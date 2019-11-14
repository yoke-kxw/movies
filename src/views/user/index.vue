<template>
  <div class="user">
    <!-- 顶部 -->
    <div class="top">
      <!-- 顶部设置评论栏 -->
      <div class="install">
         <img :src="require('@/assets/images/我的_slices/install-2.png')" alt class="install-img1"  />
        <img :src="require('@/assets/images/我的_slices/install-1.png')" alt class="install-img2"  @click="toMessage"/>
      </div>
      <!--  头像栏 -->
      <div class="head">
        <!-- 头像 -->
        <router-link tag="img" to="/detailed" :src="require('@/assets/images/我的_slices/点击查看源网页.png')" alt class="head-img1" />
        <!-- 名字 -->
        <div class="head-content">
          <div class="head-content-1">yujia1130</div>
          <router-link tag="div" to="/detailed"  class="head-content-2">
            <div class="head-content-2a">青铜会员</div>
            <div class="head-content-2bb">&gt</div>
          </router-link>
        </div>
        <!-- 跳转图标 -->
        <router-link tag="div" to="/detailed" class="jump">&gt</router-link>
      </div>
    </div>
    <!-- 会员中心 -->
    <div class="member">
      <!-- 会员中心标题 -->
      <div class="center">会员中心</div>
      <!-- 分割线 -->
      <div class="separator"></div>
      <!-- 内容 -->
      <div class="content">
        <div class="content-1">会员中心</div>
        <div class="content-2">50元通兑券天天送</div>
      </div>
      <!-- 图片 -->
      <img :src="require('@/assets/images/我的_slices/红包.png')" alt class="package" />
    </div>
    <!-- 我的订单 -->
    <div  class="order">
      <!-- 导航栏 -->
      <div class="navigator">
        <div class="navigator-from">我的订单</div>
        <router-link tag="div" to="/order"  class="navigator-whole">
          <div class="navigator-whole1">全部</div>
          <div class="navigator-whole2">&gt</div>
        </router-link>
      </div>
      <!-- 分类 -->
      <ul class="classify">
        <router-link  tag="li" to="/order" >
          <img :src="require('@/assets/images/我的_slices/编组@3x.png')" alt />
          <div>未消费</div>
        </router-link>
        <router-link  tag="li" to="/order/obligation">
          <img :src="require('@/assets/images/我的_slices/编组@3x(1).png')" alt />
          <div>待付款</div>
        </router-link>
         <router-link  tag="li" to="/order/appra">
          <img :src="require('@/assets/images/我的_slices/编组@3x(2).png')" alt />
          <div>待评价</div>
         </router-link>
        <li >
          <img :src="require('@/assets/images/我的_slices/编组@3x(3).png')" alt />
          <div>付款</div>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <ul class="bottom">
      <li>
        <div class="card">影城会员卡</div>
        <div class="jump">&gt</div>
      </li>
      <li @click="toCoupon">
        <div class="card" >优惠券</div>
        <div class="jump" >&gt</div>
      </li>
      <li>
        <div class="card">我的收藏</div>
        <div class="jump">&gt</div>
      </li>
      <li>
        <div class="card">帮助与反馈</div>
        <div class="jump">&gt</div>
      </li>
    </ul>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "user",
  components: {
    tabBar: () => import("@/components/tabBar")
  },

  methods: {

    toCoupon(){ // 点击跳转优惠券页面
      this.$router.push('/user/coupon')
    },

    toMessage(){  // 点击跳到消息页面
      this.$router.push('/user/message')
    }
  }
};
</script>
<style lang="scss" scoped>
.user {
  width: 100%;
  height: 760px;
  // 顶部
  .top {
    width: 100%;
    height: 210px;
    margin: -40px auto;
    padding-top: 50px;
    background: linear-gradient(
      123deg,
      rgba(242, 94, 133, 1) 0%,
      rgba(241, 166, 97, 1) 100%
    );
    border-radius: 29px;
    // opacity: 0.9029;
    // 顶部设置评论栏
    .install {
      width: 50px;
      height: 19px;
      float: right;
      margin-bottom: 30px;
      margin-right: 20px;
      display: flex;
      .install-img1 {
        width: 19px;
        margin-right: 12px;
      }
      .install-img2 {
        width: 19px;
      }
    }
    // 头像栏
    .head {
      width: 336px;
      height: 73px;
      margin: 0 auto;
      display: flex;
      position: relative;
      // 头像
      .head-img1 {
        width: 73px;
        height: 100%;
        margin-right: 18px;
      }
      // 名字
      .head-content {
        width: 99px;
        height: 49px;
        margin-top: 12px;
        .head-content-1 {
          width: 77px;
          height: 25px;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;
        }
        .head-content-2 {
          width: 99px;
          height: 23px;
          background: rgba(51, 54, 61, 1);
          border-radius: 5px;
          opacity: 0.7293999999999999;
          display: flex;
          justify-content: center;
          .head-content-2a {
            width: 71px;
            height: 23px;
            text-align: center;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 23px;
          }
          .head-content-2bb {
            width: 8px;
            height: 23px;
            line-height: 23px;
            font-size: 14px;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      // 跳转图标
      .jump {
        position: absolute;
        right: 0px;
        top: 25px;
        width: 8px;
        height: 23px;
        line-height: 23px;
        opacity: 0.3;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  // 会员中心
  .member {
    width: 336px;
    height: 68px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    border-radius: 17px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // 会员中心标题
    .center {
      width: 72px;
      height: 25px;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
    }
    // 分割线
    .separator {
      width: 1px;
      height: 47px;
      background-color: #979797;
    }
    // 内容
    .content {
      width: 99px;
      height: 42px;
      .content-1 {
        width: 48px;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
      }
      .content-2 {
        width: 99px;
        height: 17px;
        font-size: 12px;
        margin-top: 8px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
      }
    }
    // 图片
    .package {
      width: 32px;
      height: 34px;
    }
  }
  // 我的订单
  .order {
    width: 100%;
    height: 137px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;
    margin-top: 23px;
    padding-top: 10px;
    // 导航栏
    .navigator {
      width: 336px;
      height: 25px;
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .navigator-from {
        width: 72px;
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
      }
      .navigator-whole {
        width: 41px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navigator-whole1 {
          width: 28px;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 20px;
          opacity: 0.5;
        }
        .navigator-whole2 {
          width: 5px;
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          opacity: 0.5;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    // 分类
    .classify {
      width: 336px;
      height: 58px;
      margin: 20px auto;
      display: flex;
      justify-content: space-around;
      li {
        width: 42px;
        height: 58px;
        text-align: center;
        img {
          width: 24px;
          height: 24px;
          background-size: cover;
        }
        div {
          width: 42px;
          height: 20px;
          margin-top: 14px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 20px;
        }
      }
    }
  }
  //  底部
  .bottom {
    width: 100%;
    height: 215px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;
    margin-top: 24px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
    li {
      width: 336px;
      height: 22px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card {
        width: 80px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      .jump {
        width: 5px;
        height: 8px;
        color: #ffffff;
        opacity: .5;
      }
    }
  }
}
</style>
