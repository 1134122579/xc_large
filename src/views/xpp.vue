<template>
  <div class="box">
    <div class="swiperContent">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in datalist"
          :key="index"
        >
          <div class="pagecontent" :style="item.cover | filterBack"></div>
        </div>
      </div>
      <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
// import { getDesigner } from "@/api/swiperApi.js";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  props: {
    swiperID: {
      type: String,
      default: "swiper-container" + new Date().getTime() + "  swiperContent",
    },
  },
  data() {
    return {
      dialogVisible: false,
      datalist: [
        {
          title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
          link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover: require("../assets/groupimg/20220222145017.jpg"),
          desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
        },
        {
          title: "新浪网络大V齐聚「天空之橙」聚焦“五好”城市宣传推介",
          desc: "9月23日晚，由淄博市委宣传部、市委网信办、新浪微博主办，微博名人堂、新浪山东承办的“V游记”之“美好淄味”大V行启动仪式，在「天空之橙双创艺术空间」举行。",
          link: "https://mp.weixin.qq.com/s/1xWefd-qSQAY62c_DsrMmg",
          cover: require("../assets/groupimg/20220222144921.jpg"),
        },
        {
          title: "热烈祝贺淄博「新生代企业家论坛」在「天空之橙」成功举办",
          link: "https://mp.weixin.qq.com/s/TMiokX96AQ75Yw3mHxJniw",
          cover: require("../assets/groupimg/20220222145211.jpg"),
          desc: "由淄博市工商联主办、新视野智库和天空之橙控股有限公司协办的淄博新生代企业家论坛在「天空之橙双创艺术空间」举办。",
        },
        {
          title:
            "奔跑吧！青春 |「天空之橙」与你一起，庆祝中国共产党成立100周年",
          link: "https://mp.weixin.qq.com/s/B0ao_m6cZ_u2yhTZvgBQQA",
          cover: require("../assets/groupimg/20220222145406.jpg"),
          desc: "“唱支山歌给党听，我把党来比母亲，母亲只生了我的身，党的光辉照我心",
        },
        {
          title:
            "《山东新闻联播》探寻淄博城市活力密码 | 「天空之橙」创新模式受关注",
          link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover: require("../assets/groupimg/20220222145618.jpg"),
          desc: "在天空之橙还可以干什么？",
        },
        {
          title: "牛年开工第一天，『天空之橙』领了个奖",
          link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover: require("../assets/groupimg/20220222145717.jpg"),
          desc: "淄博市委、市政府召开全市落实突破年动员大会，大会在齐盛国际宾馆召开，淄博市委书记江敦涛讲话，淄博市委副书记、市长马晓磊主持会议，天空之橙控股有限公司作为主会场授奖企业代表参与此次会议",
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
  mounted() {
    this.getBanner(); //轮播
  },
  methods: {
    //封装轮播函数
    getBanner() {
      //调用延迟加载 $nextTick
      let swiper = new Swiper("swiperContent", {
        //是否循环
        speed: 1000, //默认就是300毫秒
        // loopAdditionalSlides: 1,
        direction: "horizontal",
        loop: false,
        observer: true,
        observeParents: true,
        // mousewheel: true,
        effect: "cards", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          disableOnInteraction: false,
          // 自动播放时间：毫秒
          delay: 6000,
        },
        // pagination: {
        //   //小圆点
        //   el: ".swiper-pagination",
        // },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      });
      console.log(swiper);
      // swiper.updateSize();
      return;
      this.$nextTick(() => {
        let swiper = new Swiper("swiperContent", {
          //是否循环
          speed: 1000, //默认就是300毫秒
          // loopAdditionalSlides: 1,
          direction: "horizontal",
          loop: false,
          observer: true,
          observeParents: true,
          // mousewheel: true,
          effect: "cards", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          fadeEffect: {
            crossFade: true,
          },
          autoplay: {
            //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
            //   disableOnInteraction: false,
            disableOnInteraction: false,
            // 自动播放时间：毫秒
            delay: 6000,
          },
          // pagination: {
          //   //小圆点
          //   el: ".swiper-pagination",
          // },
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
        });
        console.log(swiper);
        swiper.updateSize();
      });
    },

    // h获取人像
    getDesigner() {
      getDesigner().then((res) => {
        let newlist = [];
        let num = parseInt(res.length / 8);
        for (let index = 0; index <= num; index++) {
          newlist.push({ list: res.slice(index * 8, (index + 1) * 8) });
        }
        console.log(newlist);
        // this.list = newlist;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .swiperContent {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 100%;
        height: 100%;
        .pagecontent {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
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
}
</style>
