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
  // 电影页面
  {
    path: "/movie",
    name: "movie",
    component: () => import("@/views/movie/index.vue"),
    redirect: "/movie/hotmovie",
    children: [
      // 热映电影
      {
        path: "hotmovie",
        name: "hotmovie",
        component: () => import("@/views/movie/hotmovie/index.vue")
      },
      // 即将上映的电影
      {
        path: "upcoming",
        name: "upcoming",
        component: () => import("@/views/movie/upcoming/index.vue"),
        redirect: "/movie/upcoming/childpage",
        children: [
          // 即将上映电影的切换
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
  {
    path: "/ticket",
    name: "ticket",
    component: () => import("@/views/ticket")
  },
  {
    path: '/cityList',
    name: 'cityList',
    component: () => import('@/views/cityList')
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
  },


////////////////////////////////////////////////

  { // coupon: 优惠券页面
    path: '/user/coupon',
    name: 'coupon',
    component: () => import('@/views/user/page/coupon.vue')
  },

  {
    // 用户信息页面
    path: "/detailed",
    name: "detailed",
    component: () => import("@/views/user/detailed/index.vue")
  },
  {
    // 我的订单
    path: "/order",
    name: "order",
    redirect: "/order/whole",
    component: () => import("@/views/user/order/index.vue"),
    children: [{
        // 全部
        path: "whole",
        name: "whole",
        component: () => import("@/views/user/order/whole.vue")
      },
      {
        // 待付款
        path: "obligation",
        name: "obligation",
        component: () => import("@/views/user/order/obligation.vue")
      },
      {
        // 待评价
        path: "appra",
        name: "appra",
        component: () => import("@/views/user/order/appra.vue")
      },
      {
        // 退款
        path: "refund",
        name: "refund",
        component: () => import("@/views/user/order/refund.vue")
      }
    ]
  },

  // purchase_tickets: 购票页面
  {
    path: '/user/purchase_tickets',
    name: 'purchase_tickets',
    component: () => import('@/views/user/page/purchase_tickets.vue')
  },

////////////////////////////////////////////////////



  {
    // coupon: 优惠券页面
    path: "/user/coupon",
    name: "coupon",
    component: () => import("@/views/user/page/coupon.vue")
  },

  {
    // message: 消息页面
    path: "/user/message",
    name: "message",
    component: () => import("@/views/user/page/message.vue")
  },

  
  {
    path: "/cinecism",
    name: "cinecism",
    component: () => import("@/views/movie/cinecism")
  },
  {
    //登陆界面
    path: "/login",
    name: "login",
    component: () => import("@/views/user/page/login.vue")
  },
  {
    // 我的影票
    path: "/ticketBuy",
    name: "tickectBuy",
    component: () => import("@/views/user/page/ticketBuy.vue")
  },
  {
    // 消息列表
    path: "/talk",
    name: "talk",
    component: () => import("@/views/user/page/talk.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;