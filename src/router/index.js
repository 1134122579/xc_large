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
