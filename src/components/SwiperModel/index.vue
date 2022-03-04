<template>
  <div class="SwiperModel">
    <swiper :options="swiperOption" class="swiper-container-par">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in list"
        :key="index"
      >
        <slot name="content" class="SwiperModelcontentStyle" :row="item"></slot>
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div
        v-show="isbutton"
        class="swiper-button-prev"
        slot="button-prev"
      ></div>
      <div
        v-show="isbutton"
        class="swiper-button-next"
        slot="button-next"
      ></div>
    </swiper>
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
    isautoplay: {
      type: Boolean,
      default: true,
    },
  },
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000, //默认就是300毫秒
        observer: true,
        // autoplay: {
        //   //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
        //   //   disableOnInteraction: false,
        //   disableOnInteraction: false,
        //   // 自动播放时间：毫秒
        //   delay: 6000,
        // },
        autoplay: false,
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
        loop: true,
        direction: "vertical",
      },
      item: 8,
    };
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
  .swiper-container-par {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .swiper-button-prev,
    .swiper-button-next {
      outline: none;
      top: calc(50%);
      color: #333;
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
</style>
