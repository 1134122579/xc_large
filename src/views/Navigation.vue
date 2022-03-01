<template>
  <div class="Navigation">
    <div class="logo">
      <img :src="logo3" @click="gohome" alt="" />
    </div>
    <!-- 活动页面 -->
    <!-- 活动页面 -->
    <SwiperModel
      :list="zx_list"
      :setOption="setOption"
      :isbutton="isbutton"
      :opentype="opentype"
    >
      <template slot="content" slot-scope="{ row }">
        <div class="Navigation_con" :style="row.cover | filterBack"></div>
      </template>
    </SwiperModel>

    <div class="foolter">
      <div class="imgright">
        <img
          src="../assets/icons/home_icon.png"
          @click="gohome"
          alt=""
          srcset=""
        />
        <img
          src="../assets/icons/back_icon.png"
          @click="goback"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import logo3 from "@/assets/logo3.png";

import SwiperModel from "@/components/SwiperTwo/index.vue";
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
      opentype: true,
      logo3,
      zx_list: [
        {
          title: "L2",
          desc: "",
          link: "",
          cover: require("@/assets/dlimage/dl-02.png"),
        },
        {
          title: "L1",
          link: "",
          cover: require("@/assets/dlimage/dl-01.png"),
          desc: "",
        },

        {
          title: "B1",
          link: "",
          cover: require("@/assets/dlimage/dl-03.png"),
          desc: "",
        },
      ],
      isbutton: false,
      setOption: { loop: false, direction: "vertical", autoplay: false },
    };
  },
  methods: {
    gohome() {
      this.$router.push({ path: "/" });
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.Navigation {
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  // background: cadetblue;
  // background: #ececec;
  overflow: hidden;
  position: relative;
  .logo {
    height: 60px;
    position: absolute;
    top: 4.8vh;
    right: 2.8vw;
    z-index: 5;
    img {
      height: 100%;
      cursor: pointer;
    }
  }
  .Navigation_con {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
  }
  .foolter {
    position: absolute;
    bottom: 0px;
    right: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 6;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    .imgright {
      background: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      img {
        width: 54px;
        height: 54px;
        cursor: pointer;
        margin-right: 2vw;
      }
    }
  }
}
</style>
