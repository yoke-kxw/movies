import Vue from 'vue'
import Vuex from 'vuex'
import BaiduMap from './modules/BMap'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    // 刷新better-scroll方法
    refreshScoll(context, that) {
      if (!that.scroll) {
        return;
      }
      that.$nextTick(() => {
        that.scroll.refresh();
      });
    }
  },
  modules: {
    BaiduMap
  }
})