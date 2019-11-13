<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/user/login">login</router-link>
    </div>
=======
    <!-- 放入百度地图容器，进入页面时利用百度地图获取位置信息 -->
    <baidu-map class="bm-view" @ready="getLocation"></baidu-map>
>>>>>>> 30145365bf4a51aecd769c3a370f5fc5adfcdd3b
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
</style>
