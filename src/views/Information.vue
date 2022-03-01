<template>
  <div class="Information">
    <SwiperModel :list="datalist" :setOption="setOption">
      <template slot="content" slot-scope="{ row }">
        <div class="Navigation_con flexcontent">
          <div class="content_a flexcontent">
            <div class="title">
              <p>NEWS</p>
              <h2>{{ row.type }}</h2>
            </div>
            <div class="content">
              <div class="image">
                <img :src="row.cover" alt="" />
              </div>
              <!-- 文本介绍 -->
              <ul class="liststyle">
                <li v-for="(item, index) in datalist" :key="index">
                  <div class="p_title">
                    {{ item.title }}
                  </div>
                  <div class="p_desc">
                    {{ item.desc }}
                  </div>
                </li>
                <li class="gengduo">
                  <p>了解更多</p>
                </li>
              </ul>
            </div>
            <!-- 热门标题 -->
            <div class="headerText">
              <div class="headerText_l flexcolumn">
                2022 <br />
                <span> /</span> <br />11.01
              </div>
              <div class="headerText_r">
                <div class="new_title">
                  {{ row.title }}
                </div>
                <div class="new_desc">
                  {{ row.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SwiperModel>
  </div>
</template>
<script>
// import { getDesigner } from "@/api/swiperApi.js";
import SwiperModel from "@/components/Swiperdirection/index.vue";
export default {
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  components: {
    SwiperModel,
  },
  data() {
    return {
      dialogVisible: false,
      setOption: { loop: false, autoplay: false },
      datalist: [
        {
          type: "最新资讯",
          en: "NEWS",
          title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
          link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover: require("../assets/groupimg/20220222145017.jpg"),
          desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
        },
        {
          type: "最新动态",
          en: "NEWS",
          title: "新浪网络大V齐聚「天空之橙」聚焦“五好”城市宣传推介",
          desc: "9月23日晚，由淄博市委宣传部、市委网信办、新浪微博主办，微博名人堂、新浪山东承办的“V游记”之“美好淄味”大V行启动仪式，在「天空之橙双创艺术空间」举行。",
          link: "https://mp.weixin.qq.com/s/1xWefd-qSQAY62c_DsrMmg",
          cover: require("../assets/groupimg/20220222144921.jpg"),
        },
      ],
      userInfo: {},
    };
  },
  computed: {
    classname() {
      return "swiper-container" + new Date().getTime() + "  swiperContent";
    },
  },
  created() {
    // this.getDesigner();
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.Information {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .Navigation_con {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    padding-top: 80px;
    .content_a {
      position: relative;
      width: 60%;
      margin-top: 50px;
    }
    .title {
      height: 50%;
      letter-spacing: 10px;
      font-weight: 600;
      text-align: left;
      writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
      writing-mode: tb-lr; /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
      h2 {
        font-size: 24px;
      }
    }
    // 内容
    .content {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      .title {
        h2 {
          width: 20px;
        }
      }
      .image {
        width: 40%;
        background: #fafafa;
        box-shadow: 5px 5px 10px #ccc;
        height: 400px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .liststyle {
        width: 57%;
        text-align: left;
        max-height: 60vh;
        overflow-y: auto;
        li {
          line-height: 1.5;
          border-bottom: 2px solid #000;
          cursor: pointer;
          .p_title {
            font-size: 18px;
            font-weight: 600;
            margin-top: 20px;
          }
          .p_desc {
            padding: 10px 0;
            text-indent: 36px;
            font-size: 16px;
          }
        }
        .gengduo {
          border: none;
          display: flex;
          justify-content: flex-end;
          padding: 10px;
          p {
            width: 100px;
            text-align: center;
            border: 1px solid #000;
            padding: 5px 0;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
    // 热门
    .headerText {
      position: absolute;
      height: 280px;
      width: 60%;
      top: -140px;
      right: 0px;
      background: #fff;
      box-shadow: 5px 5px 20px #ccc;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .headerText_l {
        width: 10%;
        height: 80%;
        margin-top: -20px;
        padding: 10px;
        background: #7e95bf;
        margin-left: 10px;
        color: #fff;
        font-size: 20px;
        span {
          font-size: 40px;
        }
      }
      .headerText_r {
        width: 84%;
        box-sizing: border-box;
        padding: 20px;
        text-align: left;
        line-height: 1.6;
        .new_title {
          font-size: 18px;
          font-weight: 600;
        }
        .new_desc {
          font-size: 16px;
          padding: 10px 0;
          overflow-y: auto;
          max-height: 50%;
          padding: 0 20px;
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 5px;
    color: #fff;
  }
  img {
    width: 100%;
    height: auto;
    transform: scale(1);
    transition: transform 1s ease 0s;
  }

  img:hover {
    transform: scale(2.05);
  }
}
</style>
