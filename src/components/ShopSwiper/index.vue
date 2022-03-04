<template>
  <div class="SwiperModel">
    <!-- 上边 -->
    <div class="swiperContent">
      <swiper
        :options="swiperOption"
        ref="swiperThumbs"
        class="swiper-container-par"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="imageL">
            <img :src="item.cover" alt="" />
          </div>
        </swiper-slide>
        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 下边 -->
    <div class="typeswiperbottom">
      <swiper
        ref="swiperleft"
        :options="swiperOption1"
        class="swiper-container-child"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="p_content">
            <h2>{{ item.title }}</h2>
            <p>BY SKYBEER</p>
            <div class="desc">
              <ul>
                <li>原料：水、小麦、酵母</li>
                <li>酒精度：6.5%</li>
                <li>IBU苦度值：10000</li>
                <li>原麦汁度：16.5°P</li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import SwiperMpdel from "@/components/SwiperModel/index.vue";
import { parseTime } from "@/utils/index.js";
export default {
  name: "SwiperModel",
  components: {
    SwiperMpdel,
  },
  props: {
    list: {
      type: Array,
      default: [],
    },
    isbutton: {
      type: Boolean,
      default: true,
    },
    isbutton: {
      type: Boolean,
      default: true,
    },
    opentype: {
      type: Boolean,
      default: false,
    },
    setOption: {
      type: Object,
      default: {},
    },
  },
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  watch: {
    setOption: {
      immediate: true,
      deep: true,
      handler(newV, oldV) {
        for (const key in newV) {
          if (Object.hasOwnProperty.call(newV, key)) {
            const element = newV[key];
            this.swiperOption[key] = element;
          }
        }
        console.log("setOption", this.swiperOption);
      },
    },
  },
  data() {
    return {
      swiperOption: {
        loop: false,
        grabCursor: true,
        spaceBetween: 20,
        slidesPerView: 4,
        speed: 1000, //默认就是300毫秒
        centeredSlides: true,
        // slidesPerview: 1,
        // loopAdditionalSlides: 1,
        // loopedSlides: 1,
        autoplay: false,
        // autoplay: {
        //   //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
        //   //   disableOnInteraction: false,
        //   disableOnInteraction: false,
        //   // 自动播放时间：毫秒
        //   delay: 6000,
        // },
        // navigation: {
        //   prevEl: ".swiper-button-prev",
        //   nextEl: ".swiper-button-next",
        // },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
      swiperOption1: {
        //开启循环模式
        loop: false,
        observer: true,
        speed: 800, //默认就是300毫秒
        effect: "cards",
        grabCursor: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      },
      item: 8,
    };
  },
  mounted() {
    console.log();
    this.$nextTick(() => {
      const swiperleft = this.$refs["swiperleft"].$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperleft.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperleft;
    });
  },
  methods: {},
};
</script>

<style scoped lang="less">
.SwiperModel {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .swiperContent {
    height: 80%;
    background: url("../../assets/icons/dizuo.png") no-repeat;
    background-position: 50% 84%;
    background-size: 400px auto;
    .swiper-container-par {
      width: 100%;
      height: 100%;
      // 图片
      .imageL {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        img {
          width: 100%;
        }
      }
      .swiper-slide {
        opacity: 0.4;
        padding: 10px 0;
        font-size: 30px;
        transform: rotate(30deg) scale(0.8);
        transition: all 500ms ease;
      }
      .swiper-slide-active {
        opacity: 1;
        font-weight: 600;
        font-size: 40px;
        transform: rotate(0) scale(1.2);
      }

      .swiper-button-prev,
      .swiper-button-next {
        outline: none;
        top: calc(50%);
        top: 90%;
        color: #000;
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
    .swiper-container-par {
      width: 100%;
      height: 100%;

      box-sizing: border-box;
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
    }
  }

  .typeswiperbottom {
    // position: absolute;
    width: 100%;
    height: 24%;
    .swiper-container-child {
      height: 100%;
      // 介绍
      .p_content {
        width: 70%;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 30px;
        text-align: left;
        h2 {
          font-size: 26px;
          font-weight: 600;
          letter-spacing: 8px;
        }
        p {
          letter-spacing: 8px;
          font-size: 16px;
          padding: 10px 0;
        }
        .desc {
          width: 100%;
          padding: 20px 0;
          text-align: center;
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              font-size: 14px;
              // width: 25%;
            }
          }
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        outline: none;
        top: calc(50%);
        color: #000;
      }
    }
    .swiper-slide {
      opacity: 0.4;
      padding: 10px 0;
    }
    .swiper-slide-active {
      opacity: 1;
    }
  }
}
</style>
