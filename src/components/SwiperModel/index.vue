<template>
  <div class="SwiperModel">
    <swiper :options="swiperOption" class="swiper-container-par">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.title }}
        <!-- <img :src="item.cover" alt="" srcset="" /> -->
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- <swiper
          :options="swiperOption1"
          v-if="index == 4"
          style="background: green"
          class="swiper-container-child"
        >
          <swiper-slide class="swiper-slide" v-for="j in 4" :key="j">
            {{ j }}
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
    <!-- 左右箭头 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>  -->
    <!-- <button @click="del">-1</button>
    <button @click="sum">+1</button> -->
  </div>
</template>

<script>
import SwiperMpdel from "@/components/SwiperModel/index.vue";
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
  },
  data() {
    return {
      swiperOption: {
        loop: true,
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
  background: cadetblue;
  box-sizing: border-box;
  .swiper-container-par {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    .swiper-slide {
      width: 100%;
      height: 100%;
    }
    .swiper-container-child {
      height: 100%;
    }
  }
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
}
</style>
