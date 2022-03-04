<template>
  <div class="whhd">
    <!-- 左边 -->
    <div class="typeswiper">
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
      </swiper>
      <div class="xian">
        <p></p>
      </div>
    </div>
    <!-- 右边 -->
    <div class="swiperContent">
      <swiper
        :options="swipervideoOption"
        ref="swipervideoOption"
        class="swiper-container-par"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in list"
          :key="index"
        >
          <!-- 品牌故事 -->
          <div class="scroll-wrap" v-if="item.type == 1">
            <div
              class="content_wz"
              v-for="(P_item, P_index) in item.children"
              :key="P_index"
            >
              <h3>SKYBEER</h3>
              <p>{{ P_item.desc }}</p>
              <p>{{ P_item.desc }}</p>
              <p>{{ P_item.desc }}</p>
              <p>{{ P_item.desc }}</p>
              <p>{{ P_item.desc }}</p>

              <!-- <div class="lookbutton"><p>了解详情</p></div> -->
              <div class="images">
                <div class="imsgeStyle">
                  <img :src="P_item.cover" alt="" srcset="" />
                </div>
                <div class="imsgeStyle">
                  <img :src="P_item.cover" alt="" srcset="" />
                </div>
                <div class="imsgeStyle">
                  <img :src="P_item.cover" alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <!-- 产品介绍 -->
          <div class="scroll-wrap scroll-wrap1" v-if="item.type == 2">
            <div
              class="content_cpjs"
              v-for="(P_item, P_index) in item.children"
              :key="P_index"
            >
              <div class="left">
                <h3>SKYBEER</h3>
                <p>{{ P_item.desc }}</p>
                <p>{{ P_item.desc }}</p>
                <div class="imsgeStyle">
                  <img :src="P_item.cover" alt="" srcset="" />
                </div>
              </div>
              <div class="right">
                <div class="imsgeStyle">
                  <img :src="P_item.cover" alt="" srcset="" />
                </div>
                <div class="lookbutton"><p>了解详情</p></div>
              </div>
            </div>
          </div>
          <!-- 产品介绍 -->
          <div class="scroll-wrap scroll-wrap3" v-if="item.type == 3">
            <CSwiperModel :list="item.children" />
          </div>
          <!-- 优惠活动 -->
          <!-- 视频案例 -->
          <!-- 在线商城 -->
          <div class="scroll-wrap scroll-wrap3" v-if="item.type == 6">
            <ShopSwiper :list="item.children" />
          </div>
          <!-- <slot
            name="content"
            class="SwiperModelcontentStyle"
            :row="item"
          ></slot> -->
          <!-- 视频列表 -->
        </swiper-slide>
        <!-- 分页器 -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
// import { parseTime } from "@/utils/index.js";
import CSwiperModel from "@/components/CSwiperModel/index.vue";
import ShopSwiper from "@/components/ShopSwiper/index.vue";

export default {
  name: "whhd",
  components: {
    CSwiperModel,
    ShopSwiper,
  },
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  watch: {},
  data() {
    return {
      list: [
        {
          type: 1,
          title: "品牌故事",
          children: [
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
          ],
        },
        {
          type: 2,
          title: "品牌新闻",
          children: [
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
          ],
        },
        {
          type: 3,
          title: "产品介绍",
          children: [
            {
              title: "天空一号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer1.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空二号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer2.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空三号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer3.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空四号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer4.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空五号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer5.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空六号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer6.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空七号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer7.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空八号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer8.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空九号红色IPA",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("@/assets/beerimg/beer9.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
          ],
        },
        // {
        //   type: 4,
        //   title: "视频案例",
        //   children: [],
        // },
        // {
        //   type: 5,
        //   title: "优惠活动",
        //   children: [],
        // },
        {
          type: 6,
          title: "在线商城",
          children: [
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
            {
              title: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
              link: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
              cover: require("../assets/groupimg/20220222145017.jpg"),
              desc: "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
            },
          ],
        },
      ],
      videolist: [
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
      swipervideoOption: {
        // slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        grabCursor: true,
        centeredSlides: true,
        // noSwipingClass: "scroll-wrap",
        noSwipingClass: "swiper-slide",
        grid: {
          fill: "row",
          rows: 3,
        },
        spaceBetween: 30,
      },
      swiperOption: {
        loop: false,
        grabCursor: true,
        slidesPerView: "auto",
        freeMode: true,
        centeredSlides: true,
        speed: 1000, //默认就是300毫秒
        // centeredSlides: true,
        // slidesPerview: 1,
        // loopAdditionalSlides: 1,
        // loopedSlides: 1,
        autoplay: false,
        // autoplay: {
        //   //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
        //   //   disableOnInteraction: false,
        //   disableOnInteraction: false,
        //   // 自动播放时间：毫秒
        //   delay: 6000,
        // },
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
        slidesPerView: 6,
        centeredSlides: true,
        grabCursor: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      item: 8,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperThumbs = this.$refs.swiperleft.$swiper;
      const swiperleft = this.$refs["swipervideoOption"].$swiper;
      swiperleft.on = {
        tap: function (swiper, event) {
          console.log("你碰了Swiper", wiper, event);
          alert("你碰了Swiper");
        },
      };
      console.log(swiperleft, swiperThumbs);
      swiperleft.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperleft;
    });
  },
  methods: {},
};
</script>

<style scoped lang="less">
.whhd {
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
      height: 15%;
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
      height: 58%;
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
      height: 58%;
      overflow: hidden;
    }
    .swiper-slide {
      width: 100%;
      height: 100%;
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

  .scroll-wrap {
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    // padding-right: 15vw;
    margin: 0 auto;
    padding: 30px;
    padding-left: 10vw;
    text-align: left;
    overflow: auto;
    // 品牌故事
    .content_wz {
      padding: 20px;

      h3 {
        border-left: 6px solid #7a97bf;
        font-size: 28px;
        padding: 0 20px;
        margin: 20px 0;
        overflow: hidden;
        letter-spacing: 8px;

        // font-weight: 600;
      }
      p {
        font-size: 14px;
        line-height: 1.8;
      }
      // 了解详情
      .lookbutton {
        color: #fff;
        text-align: center;
        font-size: 14px;
        display: flex;
        justify-content: flex-end;
        margin: 20px 0;

        p {
          width: 120px;
          background: #000;
          padding: 6px 0;
          border-radius: 5px;
          transition: all 0.6s;
          &:hover {
            // width: 40%;
            // flex-shrink: 0;
            transform: scale(1.2); /* 放大1.2倍 */
          }
        }
      }
      // 查看图片
      .images {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 280px;
        .imsgeStyle {
          flex: 1;
          // height: 120px;
          overflow: hidden;
          border-radius: 5px;
          padding: 0 8px;
          transition: all 0.6s;
          &:hover {
            // width: 40%;
            // flex-shrink: 0;
            transform: scale(1.2); /* 放大1.2倍 */
            box-shadow: 0 0 10px #7a97bf;
            img {
              transform: scale(1.2); /* 放大1.2倍 */
            }
          }
          img {
            width: 100%;
            height: 100%;
            transition: all 0.6s;
            border-radius: 5px;
            object-fit: cover;
          }
        }
      }
    }
  }
  // <!-- 产品介绍 -->
  .scroll-wrap1 {
    // overflow-y: hidden;
    // overflow-x: auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    .content_cpjs {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .left {
        flex-shrink: 0;
        width: 45%;
        h3 {
          border-left: 6px solid #7a97bf;
          font-size: 28px;
          padding: 0 20px;
          margin: 20px 0;
          overflow: hidden;
          letter-spacing: 8px;

          // font-weight: 600;
        }
        p {
          font-size: 14px;
          line-height: 1.8;
        }
        .imsgeStyle {
          width: 90%;
          height: 300px;
          box-shadow: -16px 16px 0 #7a97bf;
          border-radius: 5px;
          transition: all 0.6s;
          overflow: hidden;
          margin: 30px 0;
          &:hover {
            // width: 40%;
            // flex-shrink: 0;
            transform: scale(1.2); /* 放大1.2倍 */
            box-shadow: 0 0 10px #7a97bf;
            img {
              transform: scale(1.2); /* 放大1.2倍 */
            }
          }
          img {
            width: 100%;
            height: 100%;
            transition: all 0.6s;
            border-radius: 5px;
            object-fit: cover;
          }
        }
      }
      .right {
        flex-shrink: 0;
        width: 45%;
        .imsgeStyle {
          width: 90%;
          height: 300px;
          box-shadow: 16px -16px 0 #7a97bf;
          border-radius: 5px;
          transition: all 0.6s;
          overflow: hidden;
          margin: 30px 0;
          &:hover {
            // width: 40%;
            // flex-shrink: 0;
            transform: scale(1.2); /* 放大1.2倍 */
            box-shadow: 0 0 10px #7a97bf;
            img {
              transform: scale(1.2); /* 放大1.2倍 */
            }
          }
          img {
            width: 100%;
            height: 100%;
            transition: all 0.6s;
            border-radius: 5px;
            object-fit: cover;
          }
        }
        // 了解详情
        .lookbutton {
          color: #fff;
          text-align: center;
          font-size: 14px;
          display: flex;
          justify-content: flex-end;
          margin: 20px 0;

          p {
            width: 120px;
            background: #000;
            padding: 6px 0;
            border-radius: 5px;
            transition: all 0.6s;
            &:hover {
              // width: 40%;
              // flex-shrink: 0;
              transform: scale(1.2); /* 放大1.2倍 */
            }
          }
        }
      }
    }
  }
  .scroll-wrap3 {
    width: 76vw;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 30px;
    padding-left: 10vw;
    overflow: hidden;
  }
}
</style>
