import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/serve",
    name: "Serve",
    component: () => import("@/views/serve/index.vue"),
    meta: { title: "包网服务" },
  },
  {
    path: "/consult",
    name: "Consult",
    component: () => import("@/views/connect/index.vue"),
    meta: { title: "包网咨询" },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "关于我们" },
  },
  {
    path: "/connect",
    name: "Connect",
    component: () => import("@/views/connect/index.vue"),
    meta: { title: "联系我们" },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/search/index.vue"),
    meta: { title: "搜索" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  const title = (to.meta?.title as string | undefined) ?? 'tg-official'
  document.title = title
  next()
})

export default router
