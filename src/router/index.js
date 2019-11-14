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
    component: () => import('@/views/home'),
  },
  {
    path:'/search',
    name:'Search',
    component:() => import('../views/home/search/index.vue'),
  },
  {
    path:'/home/signIn',
    name:'homeSignIn',
    component:() => import('../views/home/sign-in/index.vue'),
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/movie')
  },
  {
    path: '/movie/boxoffice',
    name: 'boxOffice',
    component: () => import('../views/movie/box-office/index.vue')
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
    path: '/user',
    name: 'user',
    component: () => import('@/views/user'),
  }, 
  {
    path:'/user/setting',
    name:'userSetting',
    component:()=>import('@/views/user/setting/index.vue'),
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router