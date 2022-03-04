<template>
  <div class="SwiperModel">
    <swiper :options="swiperOption" class="swiper-container-par">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in list"
        :key="index"
      >
        <!-- <slot name="content" class="SwiperModelcontentStyle" :row="item"></slot> -->
        <div class="SwiperModelcontentStyle flexcolumn">
          <div class="header_img">
            <img :src="item.cover" alt="" />
          </div>
          <h2>SKYBEER</h2>
          <p>{{ item.desc }}</p>
          <div>
            <i class="el-icon-box"></i>
          </div>
        </div>
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
        loop: false,
        observer: true,
        autoplay: false,
        speed: 800, //默认就是300毫秒
        slidesPerView: 3,
        centeredSlides: true,
        freeMode: true,
        spaceBetween: 40,
        grabCursor: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
        },
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
    .swiper-slide {
      width: 100%;
      height: 90%;
      margin-top: 20px;
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      transition: 300ms;
      transform: scale(0.8);
      .SwiperModelcontentStyle {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        // 内容
        .header_img {
          width: 180px;
          height: 180px;
          overflow: hidden;
          box-shadow: 5px 5px 5px #000;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          width: 60%;
          line-height: 2;
          font-size: 16px;
          min-height: 30%;
        }
        h2 {
          margin: 20px;
          font-size: 30px;
        }
        .el-icon-box {
          font-size: 40px;
        }
      }
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      transform: scale(1.05);
      // box-shadow: 0 0 8px #ccc;
      // border-radius: 10px;
      .SwiperModelcontentStyle {
        h2 {
          margin: 25px 0;
          font-size: 30px;
        }
      }
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
  .swiper-button-prev,
  .swiper-button-next {
    outline: none;
    top: calc(50%);
    color: #333;
  }
}
</style>
