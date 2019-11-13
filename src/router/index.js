import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
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
    children: [{
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
    path: '/cinema/cinemaMap',
    name: 'cinemaMap',
    component: () => import('@/views/cinema/cinemaMap'),
  },
  {
    path: '/cinema/cinemaDetails/:uid',
    name: 'cinemaDetails',
    component: () => import('@/views/cinema/cinemaDetails'),
  },

  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user'),
  },



  { // coupon: 优惠券页面
    path: '/user/coupon',
    name: 'coupon',
    component: () => import('@/views/user/page/coupon.vue')
  },

  { // message: 消息页面
    path: '/user/message',
    name: 'message',
    component: () => import('@/views/user/page/message.vue')
  },

  {

    path: '/cinecism',
    name: 'cinecism',
    component: () => import('@/views/movie/cinecism')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/page/login.vue'),
  },
  {
    path: '/tickectBuy',
    name: 'tickectBuy',
    component: () => import('@/views/user/page/ticketBuy.vue'),
  },
  {
    path: '/talk',
    name: 'talk',
    component: () => import('@/views/user/page/talk.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;