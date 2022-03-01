<template>
  <div class="activitypage">
    <!-- 活动页面 -->
    <!-- 活动页面 -->
    <SwiperModel :list="zx_list">
      <template slot="content" slot-scope="{ row }">
        <div>
          {{ row }}
        </div>
      </template>
    </SwiperModel>
  </div>
</template>

<script>
import SwiperModel from "@/components/SwiperModel/index.vue";
export default {
  components: {
    SwiperModel,
  },
  data() {
    return {
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
    };
  },
};
</script>
<style lang="less" scoped>
.activitypage {
  height: 100%;
  background: cadetblue;
}
</style>
