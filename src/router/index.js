import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
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
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import('@/views/ticket'),
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('@/views/cinema'),
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router