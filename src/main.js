import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import BaiduMap from 'vue-baidu-map' //引入百度地图依赖
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入swiper依赖
import 'swiper/dist/css/swiper.css' // 引入swiper css
Vue.config.productionTip = false

Vue.use(BaiduMap, {
    ak: 'KrXK6GCgUdiIvPkj0FTvsXppsr7qBN5a'
  })
  .use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')