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
    path: '/user',
    name: 'user',
    component: () => import('@/views/user'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router