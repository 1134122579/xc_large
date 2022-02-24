<template>
  <div class="wwqPage">
    <!-- 微文圈 -->

    <h5 class="title">微文圈</h5>
    <div class="content">
      <div class="wwqleft">
        <p class="onep">我们的最新动态</p>
        <p class="twop">尽在 <span>微文圈</span></p>
      </div>
      <div class="wwqright">
        <ul class="listStyle">
          <li v-for="(item, index) in list" :key="index" class="block">
            <div class="block_l" :style="item.cover | filterBack"></div>
            <div class="block_r">
              <h5>{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  data() {
    return {
      list: [
        {
          title: "新浪网络大V齐聚「天空之橙」聚焦“五好”城市宣传推介",
          desc: "9月23日晚，由淄博市委宣传部、市委网信办、新浪微博主办，微博名人堂、新浪山东承办的“V游记”之“美好淄味”大V行启动仪式，在「天空之橙双创艺术空间」举行。",
          link: "https://mp.weixin.qq.com/s/1xWefd-qSQAY62c_DsrMmg",
          cover: require("../assets/groupimg/20220222144921.jpg"),
        },
        {
          title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
          link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover: require("../assets/groupimg/20220222145017.jpg"),
          desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
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
    };
  },
};
</script>

<style lang="less" scoped>
.wwqPage {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .title {
    font-size: 34px;
    letter-spacing: 8px;
    text-indent: 8px;
    padding: 10px;
    display: inline-block;
    border-bottom: 3px solid #797979;
    margin-bottom: 20px;
    flex-shrink: 0;
  }
  .content {
    flex: 1;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    box-sizing: border-box;
    background: url("../assets/bgimage/wwq_bg.png") no-repeat;
    background-size: auto 400px;
    background-position: left bottom;
    .wwqleft {
      width: 44%;
      height: 100%;
      flex: 1;
      flex-shrink: 0;
      font-size: 24px;
      box-sizing: border-box;
      line-height: 1.5;
      margin-top: 140px;
      .onep {
        text-align: left;
        display: inline-block;
        margin: 0 auto;
        margin-left: -250px;
        margin-bottom: 24px;
      }
      .twop {
        margin-left: 20px;
      }
      p {
        letter-spacing: 5px;
        span {
          font-size: 38px;
          letter-spacing: 8px;
          text-indent: 8px;
        }
      }
    }
    .wwqright {
      width: 54%;
      flex-shrink: 0;
      box-sizing: border-box;
      height: 100%;
      overflow: hidden;
      padding: 0 80px;
      .listStyle {
        width: 100%;
        height: 74vh;
        overflow-y: auto;
        box-sizing: border-box;
        overflow-y: auto;
        .block {
          text-align: left;
          border: 2px solid rgba(211, 199, 199, 0.753);
          height: 180px;
          margin: 20px;
          // width: 100%;
          // margin-bottom: 40px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px;
          border-radius: 5px;
          box-sizing: border-box;
          transition: all 0.5s ease-out;
          /* 过度 所有css属性 1秒过度 结束慢*/
          -moz-transition: all 0.5s ease-out;
          /* Firefox 4 */
          -webkit-transition: all 0.5s ease-out;
          /* Safari 和 Chrome */
          -o-transition: all 0.5s ease-out;
          &:hover {
            transform: rotate(1.5, 1.5);
            box-shadow: 0 0 10px #797979;
          }
          .block_l {
            flex-shrink: 0;
            width: 180px;
            height: 100%;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
          }
          .block_r {
            padding-left: 20px;
            overflow: auto;
            height: 100%;
            h5 {
              font-size: 20px;
              font-weight: 600;
            }
            p {
              margin-top: 10px;
              line-height: 1.5;
            }
            /*修改某个div的滚动条样式*/
            &::-webkit-scrollbar {
              width: 5px;
              height: 5px;
              /**/
            }
            &::-webkit-scrollbar-track {
              background: #fff;
              border-radius: 2px;
            }
            &::-webkit-scrollbar-thumb {
              background: #fdb732;
              border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb:hover {
              background: #999;
            }
            &::-webkit-scrollbar-corner {
              background: #204754;
            }
          }
        }
        /*修改某个div的滚动条样式*/
        &::-webkit-scrollbar {
          width: 5px;
          height: 5px;
          /**/
        }
        &::-webkit-scrollbar-track {
          background: #fff;
          border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb {
          background: #fdb732;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
        &::-webkit-scrollbar-corner {
          background: #204754;
        }
      }
    }
  }
  img:hover {
    transform: scale(1.5, 1.5);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
    transition: all 0.6s ease-out;
    /* 过度 所有css属性 1秒过度 结束慢*/
    -moz-transition: all 0.6s ease-out;
    /* Firefox 4 */
    -webkit-transition: all 0.6s ease-out;
    /* Safari 和 Chrome */
    -o-transition: all 0.6s ease-out;
    /* Opera */
  }
}
</style>
