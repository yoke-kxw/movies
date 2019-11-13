<template>
  <div class="nav-bar">
    <!-- 导航栏左侧 -->
    <div class="left">
      <div class="location" v-if="left==='location'">
        <p class="elipsis">{{ city }}</p>
        <img src="@/assets/images/首页_slices/下 箭头@3x.png" alt />
      </div>
      <div class="close" v-if="left==='close'">
        <span>关闭</span>
      </div>
      <div class="back" v-if="left==='back'">
        <span @click="$router.go(-1)">&lt;</span>
      </div>
    </div>
    <!-- 导航栏中间 -->
    <div class="center">
      <slot name="center"></slot>
    </div>

    <!-- 导航栏右侧 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  props: {
    left: String
  },
  computed: {
    ...mapState({
      city: function(state) {
        return state.BaiduMap.city;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  z-index: 9;
  .location {
    width: 55px;
    display: flex;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    img {
      padding-left: 5px;
      width: 12px;
    }
  }
  .back {
    width: 55px;
  }
  .center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 55px;
    img {
      width: 17px;
    }
  }
}
</style>