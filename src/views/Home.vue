<template>
  <div class="homepage">
    <div class="container">
      <div class="left">
        <!-- 时间 -->
        <div class="daystyle">
          <div class="daystyle_t">
            <i class="el-icon-light-rain"></i> 天气 15~24°
          </div>
          <div class="daystyle_time"></div>
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
            <div class="zx_swiper"></div>
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
              <p>电话：12345678910</p>
              <p>电话：12345678910</p>
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
          <div class="dl_block">
            <div class="zx_title">
              <img class="icon" src="../assets/bgimage/dw_icon.png" alt="" />
              空间导览
            </div>
            <div class="dl_container">
              <p>了解详情</p>
            </div>
          </div>
          <div class="dl_list">
            <ul class="flexcontent">
              <li class="flexcolumn dl_liststyle">
                <img src="../assets/bgimage/about.png" alt="" />
                <p>关于我们</p>
              </li>
              <li class="flexcolumn">
                <img src="../assets/bgimage/about.png" alt="" />
                <p>微文圈</p>
              </li>
              <li class="flexcolumn">
                <img src="../assets/bgimage/about.png" alt="" />
                <p>空间站</p>
              </li>
              <li class="flexcolumn">
                <img src="../assets/bgimage/about.png" alt="" />
                <p>企业文化</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 最新活动 -->
        <div class="newactivity"></div>
      </div>
      <!-- 打卡图集 -->
      <div class="right flexcolumn">
        <div class="dktj flexcolumn">
          <p>打卡图集</p>
          <div class="imgList flexcolumn">
            <span class="dkdian"></span>
            <div class="dktj flexcolumn">
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
          <div class="typeblkkock flexcolumn type1">
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
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.homepage {
  background: #ececec;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 90%;
    display: flex;
    justify-content: center;
    .containerblock {
      flex: 1;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    // 左边
    .left {
      position: relative;
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
          .zx_swiper {
            margin: 20px 0;
            box-sizing: border-box;
            width: 100%;
            height: 300px;
            background: #94a4c8;
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
            margin: 20px 40px;
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
      margin: 0 20px;
      flex: 1;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      .main_top {
        height: 40%;
        .dl_block {
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 10px;
          box-shadow: 10px 10px 10px #c0bfbf;
          box-sizing: border-box;
          padding: 20px;
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
        height: 55%;
        background: #fff;
        flex-shrink: 0;
        border-radius: 10px;
        box-shadow: 10px 10px 10px #c0bfbf;
      }
    }

    // 最右边
    .right {
      width: 460px;
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
      // 导航
      .typestyle {
        flex: 1;
        width: 100%;
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        .logo3 {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 5;
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
  }
}
</style>
