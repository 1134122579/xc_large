<template>
  <div class="SwiperModel">
    <!-- 左边 -->
    <div class="typeswiper" v-if="opentype">
      <div class="xian">
        <p></p>
      </div>
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
          {{ item.title }}
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
      <div class="xian">
        <p></p>
      </div>
    </div>
    <!-- 右边 -->
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
          <slot
            name="content"
            class="SwiperModelcontentStyle"
            :row="item"
          ></slot>
        </swiper-slide>
        <!-- 分页器 -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div v-show="isbutton">
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </swiper>
    </div>
    <!-- 这个分类 -->

    <!-- 左右箭头 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>  -->
    <!-- <button @click="del">-1</button>
    <button @click="sum">+1</button> -->
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
      // default: function (value) {
      //   console.log("propE default invoked.", value);
      //   return { message: "I am from propE.", value };
      // },
      // validator(value) {
      //   console.log(value, "setOption");
      // },
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
        slidesPerView: 3,
        centeredSlides: true,
        grabCursor: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      item: 8,
    };
  },
  mounted() {
    console.log();
    if (this.opentype) {
      this.$nextTick(() => {
        const swiperleft = this.$refs["swiperleft"].$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperleft.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperleft;
      });
    }
  },
  methods: {
    del() {
      this.item--;
    },
    sum() {
      this.item++;
    },
  },
};
</script>

<style scoped lang="less">
.SwiperModel {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiperContent {
    flex: 1;
    height: 100%;
    .swiper {
      width: 100%;
      height: 100%;
      position: relative;
      .swiper-button-prev,
      .swiper-button-next {
        outline: none;
        top: calc(50%);
      }
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

  .typeswiper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    width: 20vw;
    height: 100vh;
    .xian {
      display: block;
      height: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 4px;
        height: 100%;
        background: #000;
        border-radius: 5px;
      }
      // background: chartreuse;
    }
    .swiper {
      width: 100%;
      height: 50%;
      position: relative;
      .swiper-button-prev,
      .swiper-button-next {
        outline: none;
        top: calc(50%);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper-container-child {
      height: 50%;
    }
    .swiper-slide {
      opacity: 0.4;
      // height: 80px;
      // line-height: 80px;
      padding: 10px 0;
      font-size: 30px;
    }
    .swiper-slide-active {
      opacity: 1;
      // border: 2px solid #fdb732;
      font-weight: 600;
      font-size: 40px;
      // margin-top: -4px;
      // border-radius: 5px;
    }
  }
}
</style>
