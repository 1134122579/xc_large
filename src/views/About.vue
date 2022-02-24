<template>
  <div class="aboutpage">
    <div class="title">
      <span></span>
      <h1>我们做什么?</h1>
      <span></span>
    </div>
    <ul class="aboutList">
      <li v-for="(item, index) in list" :key="index">
        <div class="block ani">
          <i class="el-icon-video-camera-solid"></i>
          <p>{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "空间设计改造",
          icon: "",
        },
        {
          title: "建筑施工",
          icon: "",
        },
        {
          title: "视频制作",
          icon: "",
        },
        {
          title: "数字科技",
          icon: "",
        },
        {
          title: "运营管理",
          icon: "",
        },
        {
          title: "创意策划",
          icon: "",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.aboutpage {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 250px;
  overflow-y: auto;
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 8px;
    text-indent: 8px;
    padding: 30px;
    span {
      display: inline-block;
      height: 6px;
      width: 80px;
      background: #e37a11;
    }
    h1 {
      font-size: 40px;
      font-weight: 600;
      padding: 20px;
    }
  }
  .aboutList {
    width: 100%;
    flex: 1;
    height: 68vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
    li {
      flex-shrink: 0;
      width: 33.33%;
      height: 40%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      .block {
        width: 180px;
        height: 160px;
        border-radius: 10px;
        border: 2px solid #696868;
        display: flex;
        color: #696868;
        flex-direction: column;
        justify-content: center;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          box-shadow: 0 0 15px #8d8989;
          animation: rotateIn;
          animation-duration: 0.7s;
        }
        i {
          font-size: 40px;
        }
        p {
          margin-top: 20px;
          font-size: 16px;
          line-height: 1.8;
        }
      }
    }
  }
}
</style>
