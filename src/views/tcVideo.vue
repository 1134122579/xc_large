<template>
  <div class="tcVideo">
    <!-- 左边 -->
    <div class="typeswiper">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="item.id == listQuery.tags_id && 'iative'"
          @click="getlist(index, item)"
        >
          <p>{{ item.tags_name }}</p>
        </li>
      </ul>
      <p class="xian"></p>
    </div>
    <!-- 右边 -->
    <div class="swiperContent">
      <div class="searchStyle">
        <el-input
          placeholder="请输入搜索内容"
          suffix-icon="el-icon-search"
          v-model="listQuery.name"
          round
          @input="onsearch"
          clearable
          style="width: 30%"
        />
      </div>
      <ul>
        <li
          v-for="(item, index) in videolist"
          :key="index"
          @click="lookvideo(index, item)"
        >
          <div class="videocover">
            <img :src="item.cover" alt="" srcset="" />
          </div>
          <h4>{{ item.name }}</h4>
          <div class="videodesc">
            <p>{{ item.playtime }}</p>
            <p>
              <i class="el-icon-view"></i>
              {{ item.looknum }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 视频弹窗 -->
    <el-dialog
      :title="videoobj.name"
      :visible.sync="dialogVisible"
      width="50%"
      @close="onclose"
      :close-on-click-modal="false"
    >
      <vue-core-video-player
        class="vuecorevideoplayer"
        v-if="dialogVisible"
        :title="videoobj.name"
        :loop="false"
        :controls="controls"
        :src="videoobj.video_url"
      ></vue-core-video-player>
    </el-dialog>
  </div>
</template>

<script>
// import { parseTime } from "@/utils/index.js";
import { getVideoTags, getVideo } from "@/api/index.js";
export default {
  name: "tcVideo",

  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  watch: {},
  data() {
    return {
      listQuery: {
        tags_id: "",
        name: "",
      },
      list: [
        {
          type: 1,
          title: "全部视频",
          children: [],
        },
        {
          type: 1,
          title: "天橙视频",
          children: [],
        },
        {
          type: 1,
          title: "精选案例",
          children: [],
        },
        {
          type: 1,
          title: "宣传片",
          children: [],
        },
        {
          type: 1,
          title: "广告片",
          children: [],
        },
        {
          type: 1,
          title: "微电影",
          children: [],
        },
        {
          type: 1,
          title: "MG动画",
          children: [],
        },
        {
          type: 1,
          title: "三维动画",
          children: [],
        },
      ],
      videolist: [],
      swipervideoOption: {
        slidesPerView: 4,
        direction: "vertical",
        grabCursor: true,
        grid: {
          fill: "row",
          rows: 3,
        },
        spaceBetween: 30,
      },
      swiperOption: {
        loop: false,
        grabCursor: true,
        speed: 1000, //默认就是300毫秒
        // centeredSlides: true,
        // slidesPerview: 1,
        // loopAdditionalSlides: 1,
        // loopedSlides: 1,
        autoplay: {
          //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          disableOnInteraction: false,
          // 自动播放时间：毫秒
          delay: 6000,
        },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      swiperOption1: {
        //开启循环模式
        loop: false,
        observer: true,
        direction: "vertical",
        speed: 800, //默认就是300毫秒
        effect: "cards",
        spaceBetween: 10,
        slidesPerView: 6,
        centeredSlides: true,
        grabCursor: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      item: 8,
      dialogVisible: false,
      videoobj: {},
      controls: "auto", //'fixed' 表示底部导航栏会一直固定显示；'auto' 表示底部导航栏在用户未产生任何交互操作后自动消失，默认的形式；
    };
  },
  created() {
    this.getVideoTags();
    this.getVideo();
  },
  mounted() {
    // this.$nextTick(() => {
    //   const swiperleft = this.$refs["swipervideoOption"].$swiper;
    //   console.log(swiperleft);
    //   // const swiperThumbs = this.$refs.swiperThumbs.$swiper;
    //   // swiperleft.controller.control = swiperThumbs;
    //   // swiperThumbs.controller.control = swiperleft;
    // });
  },
  methods: {
    onsearch(value) {
      console.log(value);
      if (value.length > 3) {
        this.getVideo();
      }
      if (value.length == 0) {
        this.getVideo();
      }
    },
    async getVideoTags() {
      let res = await getVideoTags();
      this.list = res;
    },
    async getVideo() {
      let { tags_id = "", name = "" } = this.listQuery;
      let res = [];
      const loading = this.$loading({
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      res = await getVideo(this.listQuery);
      // console.log(res, Math.floor(Math.random() * 1000));
      res = res.map((item) => {
        item["looknum"] = Math.floor(Math.random() * 1000);
        return item;
      });
      this.videolist = res;
      loading.close();
    },
    onclose() {
      this.dialogVisible = false;
      console.log(1);
    },
    lookvideo(index, data) {
      this.videoobj = data;
      this.dialogVisible = true;
    },
    // 获取数据
    getlist(index, data) {
      if (this.listQuery.tags_id == data.id) return;
      this.listQuery.tags_id = data.id;
      this.getVideo();
    },
  },
};
</script>

<style scoped lang="less">
.tcVideo {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 10%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiperContent {
    flex: 1;
    height: 100%;
    .searchStyle {
      display: flex;
      justify-content: flex-end;
      padding: 20px 0;
    }
    ul {
      width: 100%;
      height: 90%;
      overflow: auto;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      li {
        width: 31%;
        margin-right: 2.2%;
        cursor: pointer;
        // background: brown;
        height: 240px;
        margin-bottom: 24px;
        box-sizing: border-box;
        box-shadow: 0 0 14px #8395bb;
        background: #fff;
        border-radius: 5px;
        transition: all 0.5s ease;
        overflow: hidden;
        h4 {
          text-align: left;
          padding: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .videocover {
          height: 70%;
          background: #333;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .videodesc {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          box-sizing: border-box;
        }
        &:hover {
          transform: scale(1.06);
        }
      }
    }
  }

  // 左边
  .typeswiper {
    width: 20vw;
    height: 100%;
    flex-shrink: 0;
    ul {
      width: 100%;
      height: 80%;
      overflow-y: auto;

      padding: 10px 20px 40px 0;
      box-sizing: border-box;
      li {
        height: 50px;
        line-height: 50px;
        margin-bottom: 10px;
        font-size: 18px;
        box-sizing: border-box;
        cursor: pointer;
        border-left: 2px solid #fff;
        &:hover {
          box-shadow: 4px 6px 18px #8395bb;
          border-left: 2px solid #8395bb;
          color: #8395bb;
        }
      }
      .iative {
        box-shadow: 4px 6px 18px #8395bb;
        border-left: 2px solid #8395bb;
        color: #8395bb;
      }
    }
    .xian {
      height: 20%;
      width: 2px;
      background: #333;
      margin: 0 auto;
    }
  }
}
</style>
<style lang="less">
.vuecorevideoplayer {
  min-height: 50vh;
  .vcp-dashboard {
    .vue-core-video-player-control:nth-child(2) {
      display: none;
    }
  }
}
.tcVideo {
  .el-dialog__body {
    padding: 0;
  }
}
</style>
