import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import BaiduMap from 'vue-baidu-map' //引入百度地图依赖
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入swiper依赖
import 'swiper/dist/css/swiper.css' // 引入swiper css
import '@/assets/css/reset.css'
import '@/assets/css/common.scss'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
    ak: 'KrXK6GCgUdiIvPkj0FTvsXppsr7qBN5a'
  })
  .use(VueAwesomeSwiper)

// 过渡动画

// 一、更改动画状态
window.addEventListener("popstate", function (e) {
  //popestate 用于监听浏览器url为返回或forward
  //isBack值 用于判断用户 是点击（页面链接跳转） 还是（点击浏览器返回键或点击返回按钮）
  sessionStorage.isBack = true
}, false);

//二、更改动画
router.beforeEach(function (to, form, next) {
  if (to.meta.mainIndex) {
    store.commit('switchTab', true)
  } else {
    store.commit('switchTab', false)
  }
  setTimeout(function () { //加延时使上面的popstate先走  哈希模式 则不需要加延时
    // 给主页面添加mainIndex标签，用来判断是否是主页面间切换
    if (to.meta.mainIndex && form.meta.mainIndex) {
      var isBack = to.meta.mainIndex < form.meta.mainIndex;
    } else {
      // 如果isBack为true时，证明是用户点击了回退，执行slide-right或者slide-down动画
      var isBack = eval(sessionStorage.isBack)
    }

    if (isBack) {
      //        store.commit 更新vuex中的状态使用 好处是可追踪值变化
      //        更改父级路由使用的动画
      store.commit('newAnimateName', 'slide-right')
    } else {
      store.commit('newAnimateName', 'slide-left')
    }
    // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
    sessionStorage.isBack = false
    next()

  }, 0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')