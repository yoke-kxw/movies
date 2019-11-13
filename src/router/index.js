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



  { // coupon: 优惠券页面
    path: '/user/coupon',
    name: 'coupon',
    component: () => import('@/views/user/page/coupon.vue')
  },

  { // message: 消息页面
    path: '/user/message',
    name: 'message',
    component: () => import('@/views/user/page/message.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router