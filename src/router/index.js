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
    component: () => import("@/views/home"),
    meta: {
      mainIndex: 1
    }
  },
  {
    path: "/cityList",
    name: "cityList",
    component: () => import("@/views/cityList")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/home/search/index.vue")
  },
  {
    path: "/home/signIn",
    name: "homeSignIn",
    component: () => import("../views/home/sign-in/index.vue")
  },
  {
    path: "/user/setting",
    name: "userSetting",
    component: () => import("@/views/user/setting/index.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user")) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    //票房
    path: "/movie/boxoffice",
    name: "boxOffice",
    component: () => import("../views/movie/box-office/index.vue")
  },
  // 电影页面
  {
    path: "/movie",
    name: "movie",
    component: () => import("@/views/movie"),
    redirect: "/movie/showing",
    children: [
      // 正在热映
      {
        path: "showing",
        name: "showing",
        component: () => import("@/views/movie/showing"),
        meta: {
          mainIndex: 2
        }
      },
      // 即将上映
      {
        path: "coming",
        name: "coming",
        component: () => import("@/views/movie/coming"),
        meta: {
          mainIndex: 3
        }
      }
    ]
  },
  // movie 页面下的 影片详情
  {
    path: "/movie/film",
    name: "film",
    component: () => import("@/views/movie/filmdetails/index.vue")
  },
  // 购票页面
  {
    path: "/ticket",
    name: "ticket",
    component: () => import("@/views/ticket"),
    meta: {
      mainIndex: 4
    }
  },
  {
    path: "/cinema",
    name: "cinema",
    component: () => import("@/views/cinema"),
    meta: {
      mainIndex: 5
    }
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
    component: () => import("@/views/user"),
    meta: {
      mainIndex: 6
    }
  },
  {
    // coupon: 优惠券页面
    path: "/user/coupon",
    name: "coupon",
    component: () => import("@/views/user/page/coupon/index.vue")
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
    children: [
      {
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
  // {
  //   path: "/user/purchase_tickets",
  //   name: "purchase_tickets",
  //   component: () => import("@/views/user/page/purchase_tickets/index.vue")
  // },

  {
    // coupon: 优惠券页面
    path: "/user/coupon",
    name: "coupon",
    component: () => import("@/views/user/page/coupon/index.vue")
  },

  {
    // message: 消息页面
    path: "/user/message",
    name: "message",
    component: () => import("@/views/user/page/message/index.vue")
  },
  {
    path: "movie/cinecism",
    name: "cinecism",
    component: () => import("@/views/movie/cinecism")
  },
  // 演员详情
  {
    path: "/actorDetail",
    name: "actorDetail",
    component: () => import("@/views/movie/actorDetail")
  },
  // 电影评分
  {
    path: "/movieScore",
    name: "movieScore",
    component: () => import("@/views/movie/movieScore")
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
  },
  // 选座
  {
    path: "/chooseseat",
    name: "chooseseat",
    component: () => import("@/views/cinema/chooseseat"),
    beforeEnter(to, from, next) {
      if (localStorage.getItem("user")) {
        next();
      } else {
        alert("请先登录");
        next("/login");
      }
    }
  },
  // 确认订单
  {
    path: "/confirmorder",
    name: "confirmorder",
    component: () => import("@/views/cinema/confirmorder")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  //设置 点击下一个页面 页面在顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },

  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //跳转路由页面滚动位置
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
