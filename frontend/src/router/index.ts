import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Layout from "@/layout/Home/index.vue";
import { TITLE } from "@/assets/global";
import { getLocal } from "@/request/auth";

const routes: RouteRecordRaw[] = [
  // { path: "/", redirect: "/dashboard" }, // 重定向
  {
    path: "/",
    name: "whitePage",
    component: () => import("@/views/whitePage/index.vue"),
  }, // 重定向
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
          title: "系统首页",
          icon: "dashboard",
          roles: ["admin", "teacher", "student"],
        },
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "/search",
        name: "search",
        meta: {
          title: "搜索",
          icon: "home",
          roles: ["admin", "teacher", "student"],
        },
        component: () => import("@/views/search/index.vue"),
      },
      {
        path: "/video",
        name: "video",
        meta: {
          title: "视频",
          icon: "home",
          roles: ["admin", "teacher", "student"],
        },
        component: () => import("@/views/video/index.vue"),
      },
    ],
  },
];
// console.log(import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// 全局路由守卫
// router.beforeEach((to, from, next) => {
// document.title = `${to.meta.title} | ${TITLE}`; // 页面名
// const userInfo = JSON.parse(getLocal("userInfo"));
// if (!userInfo && to.path !== "/login") {
//   next("/login");
// } else if (to.meta.permission) {
//   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//   userInfo.name === "admin" ? next() : next("/403");
// } else {
//   next();
// }
// });

export default router;
