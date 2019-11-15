<template>
  <div class="order wrapper" ref="wrapper">
    <div  class="content">
  <!-- 顶部导航 -->
    <div class="top">
      <router-link tag="div" to="/user" class="jump">&lt;</router-link>
      <div class="title">我的订单</div>
      <div class="edit">编辑</div>
    </div>
    <!-- 各类型 -->
    <ul class="type">
      <router-link tag="li" to="/order/whole">全部</router-link>
      <router-link tag="li" to="/order/obligation">待付款</router-link>
      <router-link tag="li" to="/order/appra">待评价</router-link>
      <router-link tag="li" to="/order/refund">退款</router-link>
    </ul>
    <router-view></router-view>
    </div>
  
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  // 检验是否登录
  beforeRouteEnter(to, from, next) {
    if (to.path == "/order"||to.path == "/order/whole"||to.path == "/order/obligation"||to.path == "/order/appra"||to.path == "/order/refund") {
      if (localStorage.getItem("user")) {
         next();
      }else {
        alert('请先登录')
        next("/login")
      }
    } else {
      next();
    }
  },
   mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
           click: true
      });
    });
  },
}
</script>
<style lang="scss" scoped>
.order {
  width: 100%;
  height: 100%;
  .content {
  //   顶部导航
  .top {
    width: 336px;
    height: 22px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .jump {
      width: 20px;
      height: 20px;
      color: #ffffff;
      line-height: 20px;
      font-size: 16px;
    }
    .title {
      width: 64px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
    }
    .edit {
      width: 42px;
      height: 20px;
      border-radius: 2px;
      line-height: 20px;
      text-align: center;
      color: #f9c34a;
      border: 1px solid rgba(249, 195, 74, 1);
    }
  }
  //   类型
  .type {
    width: 336px;
    height: 20px;
    margin: 10px auto 0px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 14px;
    .router-link-active {
      color: #f9c34a;
      border-bottom: 1px solid #f9c34a;
    }
  }
  }

}
</style>