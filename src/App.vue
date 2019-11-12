<template>
  <div id="app">
    <!-- 放入百度地图容器，进入页面时利用百度地图获取位置信息 -->
    <baidu-map class="bm-view" @ready="getLocation"></baidu-map>
    <router-view />
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({ getLocation: "BaiduMap/getLocation" })
  }
};
</script>
<style lang="scss">
html,
body {
  // height: 100%;
  background-color: #23262d;
  #app {
    color: #dfdfdf;
  }
}
</style>
