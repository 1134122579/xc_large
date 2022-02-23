import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/common.css"; // 清除样式
import "swiper/js/swiper.min.js";
// import "swiper/css/swiper.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
