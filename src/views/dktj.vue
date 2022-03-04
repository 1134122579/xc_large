<template>
  <div class="activitypage">
    <!-- 活动页面 -->
    <!-- 活动页面 -->
    <div class="SwiperModel">
      <swiper
        :options="swiperOption"
        v-show="zx_list.length > 0"
        class="swiper-container-par"
        ref="SwiperModel"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in zx_list"
          :key="index"
        >
          <div
            class="SwiperModelcontentStyle"
            :style="item.picurl | filterBack"
          ></div>
        </swiper-slide>
        <!-- 分页器 -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div v-if="zx_list.length <= 0">暂未数据</div>
    </div>
    <div class="foolter">
      <p>{{ valuetype }}</p>
      <ul>
        <li
          v-for="(item, index) in classList"
          :key="index"
          @click="button(item)"
        >
          {{ item.tags_name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPicClass, getPic } from "@/api/index.js";
import SwiperModel from "@/components/SwiperModel/index.vue";
export default {
  components: {
    SwiperModel,
  },
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  data() {
    return {
      valuetype: "",
      classList: [],
      swiperOption: {
        loop: false,
        observer: true,
        lazy: true,
        autoplay: {
          //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          disableOnInteraction: false,
          // 自动播放时间：毫秒
          delay: 6000,
        },
        effect: "fade", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
        speed: 1000, //默认就是300毫秒
        // autoplay: false,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      zx_list: [],
    };
  },
  created() {},
  mounted() {
    this.getPicClass();
  },
  methods: {
    async getPicClass() {
      let res = await getPicClass();
      this.classList = res;
      this.button(res[0]);
      this.valuetype = res[0].tags_name;
    },
    async button(data) {
      const loading = this.$loading({
        lock: true,
        text: "加载中..",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      let res = await getPic({ tags: data.id });
      loading.close();
      this.valuetype = data.tags_name;
      this.zx_list = res;
      this.$nextTick(() => {
        console.log(this.$refs["SwiperModel"].$swiper);
        let lswiper = this.$refs["SwiperModel"].$swiper;
        lswiper.slideTo(0, 1000, false);
        lswiper.updateSlides();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.activitypage {
  width: 100%;
  height: 100%;
  // background: cadetblue;
  position: relative;
  .SwiperModel {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .swiper-container-par {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      .swiper-button-prev,
      .swiper-button-next {
        outline: none;
        top: calc(50%);
        color: #333;
        background: rgba(0, 0, 0, 0.4);
        padding: 20px;
        border-radius: 5px;
      }
      .swiper-slide {
        width: 100%;
        height: 100%;
        .SwiperModelcontentStyle {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
        }
        // img {
        //   width: 100%;
        //   height: 100%;
        //   object-fit: cover;
        // }
      }
      .swiper-container-child {
        height: 100%;
      }
    }
    .swiper {
      width: 100%;
      height: 100%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .foolter {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 180px;
    height: 40px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    z-index: 5;
    font-size: 18px;
    line-height: 40px;
    p {
      font-weight: 600;
    }
    &:hover ul {
      display: block;
    }
    ul {
      position: absolute;
      width: 100%;
      bottom: 40px;
      display: none;
      li {
        margin-bottom: 4px;
        background: rgba(0, 0, 0, 0.4);
        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }
  }
}
</style>
