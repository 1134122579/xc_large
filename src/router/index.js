import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/content",
    name: "content",
    component: Layout,
    redirect: "/xpp",
    children: [
      {
        path: "xpp",
        name: "xpp",
        component: () => import("@/views/xpp.vue"),
      },
      {
        path: "Wwq",
        name: "Wwq",
        component: () => import("@/views/Wwq.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
      // 企业活动
      {
        path: "activity",
        name: "Activity",
        component: () => import("@/views/activity.vue"),
      },
      //  最新资讯
      {
        path: "information",
        name: "Information",
        component: () => import("@/views/Information.vue"),
      },
      //  天橙视频
      {
        path: "tcVideo",
        name: "TcVideo",
        component: () => import("@/views/tcVideo.vue"),
      },
      // 文字云
      {
        path: "wzy",
        name: "Wzy",
        component: () => import("@/views/wzy.vue"),
      },
      // 文化活动
      {
        path: "whhd",
        name: "Whhd",
        component: () => import("@/views/whhd.vue"),
      },
      //打卡图集
      {
        path: "dktj",
        name: "Dktj",
        component: () => import("@/views/dktj.vue"),
      },
    ],
  },
  // 空间导览
  {
    path: "/navigation",
    name: "Navigation",
    component: () => import("@/views/Navigation.vue"),
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  // mode: "history",
  mode: "hash",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
