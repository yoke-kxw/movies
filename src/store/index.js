import Vue from 'vue'
import Vuex from 'vuex'
import BaiduMap from './modules/BMap'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //初始使用动画
    animateName: 'slide-left'
  },
  mutations: {
    //用于修改vuex的动画名
    newAnimateName(state, val) {
      state.animateName = val
    }
  },
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