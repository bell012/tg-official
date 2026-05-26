import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页" },
      },
      {
        path: "serve",
        name: "Serve",
        component: () => import("@/views/serve/index.vue"),
        meta: { title: "包网服务" },
      },
      {
        path: "consult",
        name: "Consult",
        component: () => import("@/views/consult/index.vue"),
        meta: { title: "包网资讯" },
      },
      {
        path: "consult/:id",
        name: "ConsultDetail",
        component: () => import("@/views/consult/detail/index.vue"),
        meta: { title: "包网资讯" },
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: { title: "关于我们" },
      },
      {
        path: "connect",
        name: "Connect",
        component: () => import("@/views/connect/index.vue"),
        meta: { title: "联系我们" },
      },
      {
        path: "search",
        name: "Search",
        component: () => import("@/views/search/index.vue"),
        meta: { title: "搜索" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
})


router.beforeEach((to, _from, next) => {
  // const pageTitle = to.meta?.title as string | undefined
  // document.title = pageTitle ? `${pageTitle} - ${SITE_NAME}` : SITE_NAME
  next()
})

export default router
