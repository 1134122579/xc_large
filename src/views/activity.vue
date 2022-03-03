<template>
  <div class="activitypage">
    <!-- 活动页面 -->
    <!-- 活动页面 -->
    <div class="SwiperModel">
      <swiper :options="swiperOption" class="swiper-container-par">
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in zx_list"
          :key="index"
        >
          <div class="SwiperModelcontentStyle">
            <div class="content_text" v-show="item.type == 1">
              <div class="left">
                <h2>{{ item.title }}</h2>
                <div class="desc">{{ item.desc }}</div>
                <div class="imagelist">
                  <img :src="item.cover" alt="" />
                </div>
              </div>
              <div class="right">
                <div class="imagelist">
                  <img :src="item.cover" alt="" />
                </div>
                <h2>{{ item.title }}</h2>
                <div class="desc">{{ item.desc }}</div>
              </div>
            </div>
            <div class="content_text" v-show="item.type == 2">
              <div class="left">
                <h2>{{ item.title }}</h2>
                <div class="desc">{{ item.desc }}</div>
                <div class="imagelist" style="margin-right: 0">
                  <img :src="item.cover" alt="" />
                </div>
              </div>
              <div class="right">
                <div class="imagelist">
                  <img :src="item.cover" alt="" />
                </div>
                <h2>{{ item.title }}</h2>
                <div class="desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000, //默认就是300毫秒
        // autoplay: {
        //   //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
        //   //   disableOnInteraction: false,
        //   disableOnInteraction: false,
        //   // 自动播放时间：毫秒
        //   delay: 6000,
        // },
        observer: true,
        centeredSlides: true,
        freeMode: true,
        autoplay: false,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      zx_list: [
        {
          type: 1,
          title: "天空之橙受邀参加「淄博市青年企业家座谈会",
          link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover: require("../assets/groupimg/20220222145017.jpg"),
          desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
        },
        {
          type: 1,

          title: "新浪网络大V齐聚「天空之橙」聚焦“五好”城市宣传推介",
          desc: "9月23日晚，由淄博市委宣传部、市委网信办、新浪微博主办，微博名人堂、新浪山东承办的“V游记”之“美好淄味”大V行启动仪式，在「天空之橙双创艺术空间」举行。",
          link: "https://mp.weixin.qq.com/s/1xWefd-qSQAY62c_DsrMmg",
          cover: require("../assets/groupimg/20220222144921.jpg"),
        },
        {
          type: 2,
          title: "热烈祝贺淄博「新生代企业家论坛」在「天空之橙」成功举办",
          link: "https://mp.weixin.qq.com/s/TMiokX96AQ75Yw3mHxJniw",
          cover: require("../assets/groupimg/20220222145211.jpg"),
          desc: "由淄博市工商联主办、新视野智库和天空之橙控股有限公司协办的淄博新生代企业家论坛在「天空之橙双创艺术空间」举办。",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.activitypage {
  height: 100%;
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
          box-sizing: border-box;
          padding: 0 10vw;
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
          .content_text {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
              width: 49%;
              box-sizing: border-box;
              padding: 10px;
              text-align: left;
              h2 {
                font-weight: 600;
                border-left: 2px solid #94a4c8;
                padding-left: 10px;
                line-height: 1.8;
                font-size: 18px;
              }
              .desc {
                padding: 10px 0;
                line-height: 1.8;
                font-size: 14px;
                max-height: 50%;
                overflow: auto;
              }
              .imagelist {
                width: 90%;
                box-sizing: border-box;
                margin: 20px auto;
                overflow: hidden;
                border-radius: 5px;
                box-shadow: -15px 15px 0 #94a4c8;

                img {
                  width: 100%;
                  border-radius: 5px;
                  transition: all 0.6s ease-out;
                  /* 过度 所有css属性 1秒过度 结束慢*/
                  -moz-transition: all 0.6s ease-out;
                  /* Firefox 4 */
                  -webkit-transition: all 0.6s ease-out;
                  /* Safari 和 Chrome */
                  -o-transition: all 0.6s ease-out;
                }
                img:hover {
                  transform: scale(1.6, 1.6);
                }
              }
            }
            .right {
              width: 50%;
              box-sizing: border-box;
              padding: 10px;
              text-align: left;
              h2 {
                font-weight: 600;
                border-left: 2px solid #94a4c8;
                padding-left: 10px;
                line-height: 1.8;
                font-size: 18px;
              }
              .desc {
                padding: 10px 0;
                line-height: 1.8;
                font-size: 14px;
                max-height: 50%;
                overflow: auto;
              }
              .imagelist {
                width: 100%;
                box-sizing: border-box;
                margin: 20px auto;
                overflow: hidden;
                border-radius: 5px;
                box-shadow: 15px -15px 0 #94a4c8;
                img {
                  width: 100%;
                  border-radius: 5px;
                  transition: all 0.6s ease-out;
                  /* 过度 所有css属性 1秒过度 结束慢*/
                  -moz-transition: all 0.6s ease-out;
                  /* Firefox 4 */
                  -webkit-transition: all 0.6s ease-out;
                  /* Safari 和 Chrome */
                  -o-transition: all 0.6s ease-out;
                }
                img:hover {
                  transform: scale(1.6, 1.6);
                }
              }
            }
          }
        }
      }
      .swiper-container-child {
        height: 100%;
      }
    }
  }
}
</style>
