import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home")
  },
  {
    path: "/movie",
    name: "movie",
    component: () => import("@/views/movie/index.vue"),
    redirect: "/movie/hotmovie",
    children: [
      {
        path: "hotmovie",
        name: "hotmovie",
        component: () => import("@/views/movie/hotmovie/index.vue")
      },
      {
        path: "upcoming",
        name: "upcoming",
        component: () => import("@/views/movie/upcoming/index.vue")
      }
    ]
  },
  {
    path: "/ticket",
    name: "ticket",
    component: () => import("@/views/ticket")
  },
  {
    path: "/cinema",
    name: "cinema",
    component: () => import("@/views/cinema")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
