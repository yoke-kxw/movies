<template>
  <div id="app">
    <!-- 放入百度地图容器，进入页面时利用百度地图获取位置信息 -->
    <baidu-map class="bm-view" @ready="getLocation"></baidu-map>
    <transition :name="transitionName">
      <router-view class="main-view"></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      transitionName: state => state.animateName
    })
  },
  methods: {
    ...mapActions({ getLocation: "BaiduMap/getLocation" })
  }
};
</script>
<style lang="scss" scoped>
</style>
