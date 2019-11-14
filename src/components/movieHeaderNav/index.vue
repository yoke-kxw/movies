<template>
  <div class="header">
    <div class="header-c">
      <div class="header-text">
        <a href="http:www.baidu.com">郑州 &or;</a>
      </div>
      <!-- <div class="header-hotmovie" @click="hotmovie">
        <img
          v-if="navSwitch"
          src="@/assets/images/电影即将上映_slices/编组 7.png"
          alt=""
        />
        <img
          v-else
          src="@/assets/images/电影正在热映_slices/编组 7.png"
          alt=""
        />
      </div> -->
      <div class="header-search" @click="$router.push('/search')">
        <img src="@/assets/images/首页_slices/搜索.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navSwitch: false,
    };
  },
  methods: {
    // hotmovie(e) {
    //   if (e.pageX > 106 && e.pageX < 186 && e.pageY > 8 && e.pageY < 33) {
    //     this.navSwitch = false;
    //     // this.$router.push("/movie/hotmovie");
    //   } else if (
    //     e.pageX > 188 &&
    //     e.pageX < 266 &&
    //     e.pageY > 8 &&
    //     e.pageY < 33
    //   ) {
    //     this.navSwitch = true;
    //     // this.$router.push("/movie/upcoming");
    //   }
    //   console.log(e.pageX);
    //   console.log(this.navSwitch);
    //   console.log(e.pageY);
    //   console.log(e.target);
    // }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #33363d;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  .header-c {
    width: 337px;
    height: 45px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .header-text {
      width: 83px;
      height: 45px;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-user-select: none;
      -moz-user-focus: none;
      -moz-user-select: none;
      a {
        display: block;
        width: 100%;
        height: 45px;
        font-size: 16px;
        line-height: 45px;
        text-decoration: none;
        color: #d5d5d5;
      }
    }
    .header-hotmovie {
      width: 167px;
      height: 100%;
      position: relative;
      img {
        display: block;
        width: 100%;
        height: 35px;
        margin-top: 5px;
      }
    }
    .header-search {
      width: 89px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        display: block;
        width: 17px;
        height: 17px;
        margin-right: 10px;
      }
    }
  }
}
</style>
