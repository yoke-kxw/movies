<template>
  <div class="upcoming">
    <div class="wrappe" ref="wrapper">
      <div class="content-main">
        <div class="content-main-c">
          这是主题内容
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "ipcoming",
  data() {
    return {
      navSwitch: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.upcoming {
  width: 100%;
  height: 100%;
  // background: #22262d;
  .wrappe {
    width: 100%;
    // .content-main {
    //   width: 100%;
    //   height: 300px;
    //   background: #22262d;
    // }
  }
}
</style>
