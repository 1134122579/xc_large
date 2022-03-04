import Vue from "vue";
import "@/assets/css/common.css"; // 清除样式
import "swiper/js/swiper.min.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "animate.css";
import tagCloud from "v-tag-cloud";
import VueCoreVideoPlayer from "vue-core-video-player";

Vue.use(VueCoreVideoPlayer, {
  lang: "zh-CN",
});
Vue.use(tagCloud);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

// import "swiper/css/swiper.min.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
