import Vue from 'vue'
import Vuex from 'vuex'
import BaiduMap from './modules/BMap'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //初始使用动的
    animateName: 'slide-left',
    // 是否显示tabBar
    tabIsShow: true
  },
  mutations: {
    newAnimateName(state, val) {
      state.animateName = val
    },
    switchTab(state, bool) {
      state.tabIsShow = bool
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