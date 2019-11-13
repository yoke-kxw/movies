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
<<<<<<< HEAD
    path: '/user/ticketBuy',
    name: 'ticketBuy',
    component: () => import('@/views/user/page/ticketBuy')
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import('@/views/user/page/login')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/movie')
=======
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
>>>>>>> 6a0f1e2c90bb67dff039f64ce7fa523f97bc5236
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
<<<<<<< HEAD
  {
    // 用户信息页面
    path: '/detailed',
    name: 'detailed',
    component: () => import('@/views/user/detailed/index.vue'),
  },
  {
    // 我的订单
    path: '/order',
    name: 'order',
    redirect: '/order/whole',
    component: () => import('@/views/user/order/index.vue'),
    children: [{
        // 全部
        path: 'whole',
        name: 'whole',
        component: () => import('@/views/user/order/whole.vue'),
      },
      {
        // 待付款
        path: 'obligation',
        name: 'obligation',
        component: () => import('@/views/user/order/obligation.vue'),
      },
      {
        // 待评价
        path: 'appra',
        name: 'appra',
        component: () => import('@/views/user/order/appra.vue'),
      },
      {
        // 退款
        path: 'refund',
        name: 'refund',
        component: () => import('@/views/user/order/refund.vue'),
      }
    ]
=======



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
    path: '/actorDetail',
    name: 'actorDetail',
    component: () => import('@/views/movie/actorDetail')
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
>>>>>>> 6a0f1e2c90bb67dff039f64ce7fa523f97bc5236
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;