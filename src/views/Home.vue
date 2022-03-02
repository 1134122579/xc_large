<template>
  <div class="homepage">
    <div class="logo">
      <img :src="logo3" alt="" />
    </div>
    <div class="container">
      <div class="left">
        <!-- 时间 -->
        <div class="daystyle flexcolumn">
          <div class="daystyle_t flexcontent">
            <i class="el-icon-light-rain"></i>{{ weather }}
          </div>
          <div class="daystyle_time flexcontent">
            <div class="hoser">{{ hours }}</div>
            <div class="ms flexcolumn">
              <p>:{{ min }}</p>
              <p>MON</p>
            </div>
          </div>
          <div class="time_years flexcontent">
            <p>{{ years }}</p>
            <p>{{ city }}</p>
          </div>
        </div>
        <!-- 热点资讯 -->
        <div class="zixun">
          <div class="b_radius"></div>
          <!-- 内容 -->
          <div class="zx_block">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/dot.png" alt="" />
              热点资讯
            </div>
            <div class="zx_swiper">
              <SwiperModel :list="zx_list" :isbutton="false">
                <template slot="content" slot-scope="{ row }">
                  <div
                    class="swiper_content"
                    :style="row.cover | filterBack"
                  ></div>
                </template>
              </SwiperModel>
            </div>
          </div>
        </div>
        <!-- 联系我们 -->
        <div class="aboutfolter flexcontent">
          <div class="about_l">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/about_icon.png" alt="" />
              联系我们
            </div>
            <div class="about_content">
              <p>电话：021-46088888</p>
              <p>电话：021-46088888</p>
            </div>
          </div>

          <div class="about_r flexcontent">
            <i class="el-icon-menu"></i>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="main containerblock">
        <div class="main_top flexcontent">
          <div class="dl_block flexcolumn">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/dw_icon.png" alt="" />
              空间导览
            </div>
            <div class="dl_container flexcolumn">
              <div class="dl_containerswiper">
                <SwiperModel :list="dl_list" :isbutton="false">
                  <template slot="content" slot-scope="{ row }">
                    <div
                      class="swiper_content"
                      :style="row.cover | filterBack"
                    ></div>
                  </template>
                </SwiperModel>
              </div>
              <p class="ljxq" @click="go('/navigation')">了解详情</p>
            </div>
          </div>
          <div class="dl_list">
            <ul class="flexcontent">
              <li
                class="flexcolumn dl_liststyle"
                v-for="(item, index) in button_list"
                :key="index"
                @click="go(item.link)"
              >
                <img :src="item.cover" alt="" />
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 最新活动 -->
        <div class="newactivity">
          <p class="title">最新活动</p>
          <div class="newactivity_block">
            <SwiperModel :list="zx_list" :isbutton="false">
              <template slot="content" slot-scope="{ row }">
                <div
                  class="swiper_content"
                  :style="row.cover | filterBack"
                ></div>
              </template>
            </SwiperModel>
          </div>
        </div>
      </div>
      <!-- 打卡图集 -->
      <div class="right flexcolumn">
        <div class="dktj flexcolumn">
          <p>打卡图集</p>
          <div class="imgList flexcolumn">
            <span class="dkdian"></span>
            <div class="dktj flexcolumn imgani">
              <img src="../assets/bgimage/djtj_icon.png" alt="" />
            </div>
            <div class="dktj_logo">
              <img src="../assets/logo.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 天空之橙 -->
        <div class="typestyle flexcontent">
          <div class="logo3 flexcolumn">
            <img src="../assets/bgimage/logo3.png" alt="" />
          </div>
          <div class="typeblkkock flexcolumn type1" @click="go('/content/xpp')">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/xpp.png" alt="" />
              新品牌
            </div>
            <div class="jiao position1"></div>
          </div>
          <div class="typeblkkock flexcolumn type2">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/spzz.png" alt="" />
              视频制作
            </div>
            <div class="jiao position2"></div>
          </div>
          <div class="typeblkkock flexcolumn type3">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/kjsj.png" alt="" />
              空间设计及运营
            </div>
            <div class="jiao position3"></div>
          </div>
          <div class="typeblkkock flexcolumn type4">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/whhd.png" alt="" />
              文化活动
            </div>
            <div class="jiao position4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo3 from "@/assets/logo3.png";
import { parseTime } from "@/utils/index.js";
import SwiperModel from "../components/SwiperModel/index.vue";
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
      logo3,
      weather: "15~24°",
      years: "",
      hours: "",
      min: "",
      city: "上海",
      zx_list: [
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
      ],
      dl_list: [
        {
          title: "",
          link: "",
          cover: require("@/assets/dlimage/dl-01.png"),
          desc: "",
        },
        {
          title: "",
          link: "",
          cover: require("@/assets/dlimage/dl-02.png"),
          desc: "",
        },
        {
          title: "",
          link: "",
          cover: require("@/assets/dlimage/dl-03.png"),
          desc: "",
        },
      ],
      button_list: [
        {
          title: "关于我们",
          link: "/content/about",
          cover: require("@/assets/bgimage/about.png"),
        },
        {
          title: "微文圈",
          link: "/content/Wwq",
          cover: require("@/assets/bgimage/wwq.png"),
        },
        {
          title: "空间站",
          link: "/content/about",
          cover: require("@/assets/bgimage/kjz.png"),
        },
        {
          title: "企业文化",
          link: "/content/about",

          cover: require("@/assets/bgimage/qywh.png"),
        },
      ],
    };
  },
  created() {
    this.getnewDate();
    setInterval(() => {
      this.getnewDate();
    }, 60000);
  },
  methods: {
    go(path) {
      console.log(path, "path");
      const loading = this.$loading({
        lock: true,
        text: "进入中..",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.$router.push({
        path,
      });
      loading.close();
    },
    // 获取当前时间
    getnewDate() {
      this.years = parseTime(new Date(), "{y}-{m}-{d}");
      this.hours = parseTime(new Date(), "{h}");
      this.min = parseTime(new Date(), "{i}");
    },
  },
};
</script>

<style scoped lang="less">
.homepage {
  letter-spacing: 4px;
  background: #ececec;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .logo {
    height: 60px;
    position: absolute;
    top: 4.8vh;
    right: 2.8vw;
    img {
      height: 100%;
    }
  }
  .container {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 8.8vh;
    .containerblock {
      flex: 1;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    // 左边
    .left {
      position: relative;
      width: 410px;
      flex-shrink: 0;
      .daystyle {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: #94a4c8;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        box-shadow: 10px 10px 10px #c0bfbf;
        color: #fff;
        padding: 30px;
        box-sizing: border-box;
        margin: 0 auto;
        cursor: pointer;

        &:hover {
          animation: flip;
          animation-duration: 1s;
        }
        .daystyle_t {
          font-size: 16px;
          letter-spacing: 0;
        }
        .daystyle_time {
          padding: 5px 0;
          .hoser {
            font-size: 60px;
          }
          .ms {
            letter-spacing: 0;
            font-size: 20px;
          }
        }
        .time_years {
          font-size: 14px;
          letter-spacing: 0;
          p {
            padding: 0 4px;
          }
        }
      }
      // 资讯
      .zixun {
        margin-top: 90px;
        background: #fff;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 20px;
        box-sizing: border-box;
        box-shadow: 10px 10px 10px #c0bfbf;

        .b_radius {
          height: 110px;
          width: 220px;
          border-radius: 0 0 220px 220px;
          background: #ececec;
        }
        // 资讯内容
        .zx_block {
          width: 100%;
          box-sizing: border-box;
          padding-top: 30px;
          .zx_swiper {
            margin: 20px 0;
            cursor: pointer;
            box-sizing: border-box;
            width: 100%;
            height: 250px;
            border-radius: 5px;
            overflow: hidden;
          }
        }
      }
      .aboutfolter {
        background: #fff;
        border-radius: 10px;
        box-shadow: 10px 10px 10px #c0bfbf;

        width: 100%;
        height: 150px;
        margin-top: 20px;
        box-sizing: border-box;
        padding: 20px;
        .about_l {
          flex: 1;
          .about_content {
            text-align: left;
            margin: 20px 20px;
            p {
            }
          }
          .zx_title {
          }
        }

        .about_r {
          width: 100px;
          height: 100px;
          font-size: 100px;
        }
      }
    }
    // 中间
    .main {
      // 中间  上
      padding: 0 20px;
      flex: 1;
      max-width: 47%;
      box-sizing: border-box;
      // flex-direction: column;
      // display: flex;
      // justify-content: space-between;
      .main_top {
        height: 43%;
        .dl_block {
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 10px;
          box-shadow: 10px 10px 10px #c0bfbf;
          box-sizing: border-box;
          padding: 20px;
          .zx_title {
            width: 100%;
          }
          .dl_container {
            flex: 1;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            .dl_containerswiper {
              flex: 1;
              width: 100%;
              // background: #94a4c8;
              border-radius: 5px;
              overflow: hidden;
              cursor: pointer;
            }
            .ljxq {
              background: #94a4c8;
              color: #fff;
              margin-top: 10px;
              padding: 2px 10px;
              cursor: pointer;
              border-radius: 5px;
              &:hover {
                animation: heartBeat;
                animation-duration: 1.5s;
              }
            }
          }
        }
        .dl_list {
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          ul {
            flex-wrap: wrap;
            padding: 0 20px;
            box-sizing: border-box;
            height: 100%;
            li {
              width: 50%;
              height: 50%;
              box-sizing: border-box;
              padding: 10px;
              cursor: pointer;
              &:hover {
                animation: swing;
                animation-duration: 1.2s;
              }

              img {
                width: 100px;
              }
              p {
                font-size: 14px;
                margin-top: 10px;
              }
            }
          }
        }
      }
      // 最新活动
      .newactivity {
        cursor: pointer;
        height: 51.8%;
        background: #fff;
        margin-top: 6%;
        // flex-shrink: 0;
        border-radius: 10px;
        box-shadow: 10px 10px 10px #c0bfbf;
        box-sizing: border-box;
        position: relative;
        .title {
          background: #94a4c8;
          position: absolute;
          padding: 8px 14px;
          box-sizing: border-box;
          border-radius: 5px;
          color: #fff;
          letter-spacing: 5px;
          top: -14px;
          left: 30px;
          z-index: 10;
        }
        .newactivity_block {
          width: 100%;
          height: 100%;
          // max-height: 300px;
          overflow: hidden;
          border-radius: 10px;
        }
      }
    }

    // 最右边
    .right {
      width: 460px;
      flex-shrink: 0;
      cursor: pointer;
      .dktj {
        width: 100%;
        height: 41%;
        text-align: left;
        justify-content: flex-start;
        align-items: flex-start;
        color: #fff;

        p {
          background: #94a4c8;
          padding: 5px 10px;
          display: inline-block;
          border-radius: 5px;
        }
        .imgList {
          margin-top: 10px;
          flex: 1;
          width: 100%;
          background: #94a4c8;
          box-sizing: border-box;
          position: relative;
          border-radius: 5px;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .dkdian {
            width: 14px;
            height: 14px;
            border: 2px solid #fff;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            right: 10px;
            flex-shrink: 0;
          }
          img {
            height: 100%;
          }
          .dktj {
            width: 100px;
            height: 100px;
            box-sizing: border-box;
            border-radius: 50%;
            border: 5px solid #fff;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
              height: 30px;
            }
          }
          .dktj_logo {
            margin-top: 20px;
            height: 40px;
          }
        }
      }
      .imgani {
        &:hover {
          animation: rotateIn;
          animation-duration: 1.2s;
        }
      }
      // 导航
      .typestyle {
        flex: 1;
        width: 100%;
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        cursor: pointer;

        .logo3 {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          left: 50%;
          z-index: 5;
          &:hover img {
            animation: rotateIn;
            animation-duration: 1.2s;
          }
          img {
            width: 184px;
            border-radius: 30px;
            box-shadow: 0 0 10px #c0bfbf, 0 0 10px #c0bfbf, 0 0 10px #c0bfbf,
              0 0 10px #c0bfbf;
          }
        }
        .typeblkkock {
          width: 48%;
          background: #fff;
          height: 48%;
          flex-shrink: 0;
          box-sizing: border-box;
          border-radius: 10px;
          position: relative;
          cursor: pointer;
          &:hover img {
            animation: rotateIn;
            animation-duration: 1.2s;
          }

          .jiao {
            width: 100px;
            height: 100px;
            background: #ececec;
            position: absolute;
            // box-shadow: inset 0 0 10px #c0bfbf;
          }
          .position1 {
            right: 0;
            bottom: 0;
            border-radius: 20px 0 0 0;
          }
          .position2 {
            left: 0;
            bottom: 0;
            border-radius: 0 20px 0 0;
          }
          .position3 {
            right: 0;
            top: 0;
            border-radius: 0 0 0 20px;
          }
          .position4 {
            left: 0;
            top: 0;
            border-radius: 0 0 20px 0;
          }
        }
        .type1 {
          margin-bottom: 10px;
          .zx_title {
            margin-top: -80px;
          }
        }
        .type2 {
          margin-bottom: 10px;
          .zx_title {
            margin-top: -80px;
          }
        }
        .type3 {
          .zx_title {
            margin-top: 80px;
          }
        }
        .type4 {
          .zx_title {
            margin-top: 80px;
          }
        }
      }
    }

    // 标题
    .zx_title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      .icon {
        width: 30px;
        margin-right: 10px;
      }
    }
    .swiper_content {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
    }
  }
}
</style>
