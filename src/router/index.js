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
        // path: "upcoming",
        // name: "upcoming",
        // component: () => import("@/views/movie/upcoming/index.vue"),
        // redirect: "/movie/upcoming/childpage",
        children: [
          {
            path: "childpage",
            path: "childpage",
            component: () =>
              import("@/views/movie/upcoming/childpages/index.vue")
          }
        ]
      }
    ]
  },
  // movie 页面下的 影片详情 
  {
    path: "/movie/hotmovie/film",
    name: "film",
    component: () => import("@/views/movie/hotmovie/filmdetails/index.vue")
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
    path: "/cinema/cinemaMap",
    name: "cinemaMap",
    component: () => import("@/views/cinema/cinemaMap")
  },
  {
    path: "/cinema/cinemaDetails/:uid",
    name: "cinemaDetails",
    component: () => import("@/views/cinema/cinemaDetails")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
