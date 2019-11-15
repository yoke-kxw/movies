<template>
  <div class="confirmorder">
    <!-- 头部 -->
    <div class="header">
      <img :src="imgs[1].url" alt="" @click="$router.go(-1)" />
    </div>
    <!-- 上部 -->
    <div class="top">
      <p>后来的我们</p>
      <p>今天2月1日 15:30 原版3D</p>
      <p>耀莱成龙影城(建业店)</p>
      <p>
        2号厅(冠名招商中)
        <span v-for="(item, index) in buySeatArr" :key="index"
          >{{ item.row }}排{{ item.col }}座&nbsp;</span
        >
      </p>
    </div>
    <hr />
    <!-- 中部 -->
    <div class="center">
      <div class="center-item">
        <p>电影优惠券</p>
        <div class="center-item-row">
          <p @click="$router.push('/user/coupon')">有优惠券可用</p>
          <img :src="imgs[2].url" alt="" />
        </div>
      </div>
      <div class="center-item">
        <p>会员卡</p>
        <div class="center-item-row">
          <p>去使用</p>
          <img :src="imgs[2].url" alt="" />
        </div>
      </div>
      <div class="center-item">
        <p>票价总价</p>
        <div class="center-item-row">
          <p class="total">{{ ticketTotal }}</p>
          <p class="yuan">元</p>
        </div>
      </div>
      <div>
        <div class="center-item center-item-last">
          <div class="tip">
            <p>手机号</p>
            <p>购票成功后将取到购票码</p>
          </div>
          <p class="phone">1856565656</p>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="bottom-text">
        <div class="bottom-text-l">
          <p>查看退票协议、改签协议</p>
          <img :src="imgs[0].url" alt="" />
        </div>
        <div class="bottom-text-r">
          <p>还需支付:</p>
          <div>
            <p class="bottom-text-r-total">{{ ticketTotal }}</p>
            <p class="yuan">元</p>
            <img :src="imgs[0].url" alt="" class="yuan-img" />
          </div>
        </div>
      </div>
      <button class="sure-order">确认订单</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.confirmorder {
  background: #23262d url("~@/assets/imgs/confirmorder/banner.png") no-repeat 0
    0;
  background-size: 100%;
  color: #dfdfdf;
  font-size: 16px;
  .header {
    width: 90%;
    height: 44px;
    padding: 0 5%;
    overflow: hidden;
    img {
      width: 22px;
      height: 22px;
      margin-top: 10px;
    }
  }
  .top {
    width: 90%;
    padding: 0 5% 40px 5%;

    p {
      margin-top: 18px;
      color: #dfdfdf;
      font-size: 14px;
    }
    p:nth-child(1) {
      font-size: 24px;
      color: #fff;
      margin-top: 0;
    }
  }
  .center {
    width: 86%;
    margin: 40px 5% 40px 5%;
    padding: 10px 2% 20px 2%;
    border-radius: 10px;
    background-color: #33363d;
    .center-item {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .center-item-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p:nth-child(1) {
          font-size: 12px;
        }
        p:nth-child(1).total {
          font-size: 16px;
          color: red;
        }
        .yuan {
          margin: 5px 0 0 5px;
          color: red;
          font-size: 12px;
        }
      }
    }
    .center-item-last {
      margin-top: 12px;
      .tip {
        p:nth-child(1) {
          font-size: 16px;
        }
        p:nth-child(2) {
          font-size: 12px;
          margin-top: 10px;
        }
      }
      .phone {
        font-size: 14px;
      }
    }
  }
  .bottom {
    height: 150px;
    width: 90%;
    padding: 0 5%;
    background-color: #33363d;
    overflow: hidden;
    .bottom-text {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-text-l {
        display: flex;
        justify-content: center;
        align-items: center;
        p:nth-child(1) {
          font-size: 12px;
        }
      }
      .bottom-text-r {
        display: flex;
        justify-content: center;
        align-items: center;
        .bottom-text-r-total {
          margin-left: 10px;
        }
        div:nth-child(2) {
          display: flex;
          justify-content: center;
          align-items: center;
          color: red;
        }
        .yuan {
          font-size: 12px;
          margin-top: 5px;
          color: #dfdfdf;
          margin-left: 10px;
        }
        .yuan-img {
          margin-top: 5px;
          margin-left: 10px;
        }
      }
    }
    .sure-order {
      margin-top: 30px;

      width: 100%;
      height: 40px;
      color: #fff;
      border-radius: 5px;
      background-image: linear-gradient(to right, #f16381, #f1a362);
      border: none;
    }
  }
}
</style>
<script>
export default {
  name: "confirmOrder",
  data() {
    return {
      buySeatArr: [],
      imgs: [
        {
          url: require("@/assets/imgs/confirmorder/sarrow.png")
        },
        {
          url: require("@/assets/imgs/confirmorder/larrow.png")
        },
        {
          url: require("@/assets/imgs/confirmorder/rarrow.png")
        }
      ]
    };
  },
  computed: {
    ticketTotal() {
      return Math.ceil(this.buySeatArr.length * 30.9);
    }
  },
  created() {
    for (const key in this.$route.query) {
      this.buySeatArr.push(this.$route.query[key]);
    }
  }
};
</script>
