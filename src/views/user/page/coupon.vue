<template>
  <div class="coupon-wrapper" ref="wrapper">
    <div class="coupon-content">
      <header>
        <span @click="$router.go(-1)"></span>
        <p>优惠券</p>
        <span></span>
      </header>

      <p class="available">你有2张优惠券可用</p>

      <!-- 代金券部分 -->
      <ul class="voucher">
        <li>
          <div>
            <p>电影专享代金券</p>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>

          <div>
            <p>5元</p>
            <p>购票</p>
          </div>
        </li>

        <li>
          <div>
            <p>电影专享代金券</p>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>

          <div>
            <p>5元</p>
            <p>购票</p>
          </div>
        </li>
        <li>
          <div>
            <p>电影专享代金券</p>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>

          <div>
            <p>5元</p>
            <p></p>

            <span></span>
          </div>
        </li>
        <li>
          <div>
            <p>电影专享代金券</p>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>

          <div>
            <p>5元</p>
            <p></p>
            <span></span>
          </div>
        </li>
        <li>
          <div>
            <p>电影专享代金券</p>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>

          <div>
            <p>5元</p>
            <p></p>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <p>去购票</p>
      <span></span>
    </footer>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {

    name: 'Coupon',     // 优惠券页面

  mounted() {
    this.$nextTick(() => {
      // 因为获取页面数据一般是异步的, 所以用$nextTick异步执行
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  }
};
</script>




<style lang="scss" scoped>
.coupon-wrapper {
  width: 100%;
  height: 667px;

  .coupon-content {
    width: 100%;
    height: 800px;
    color: #fff;

    // 头部
    header {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      align-items: center;

      span {
        width: 32px;
        height: 32px;
      }

      span:nth-child(1) {
        background: url(~@/assets/images/优惠券_slices/arr_left.png) no-repeat
          center;
        box-sizing: content-box;
        margin-left: 20px;
      }
    }

    // 2张可用
    .available {
      height: 30px;
      background-color: #2c2f36;
      opacity: 0.7;
      font-size: 12px;
      line-height: 30px;
      box-sizing: border-box;
      padding-left: 30px;
    }

    // 代金券部分
    .voucher {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 100px;

      li {
        width: 343px;
        height: 128px;
        margin-top: 10px;
        background: url(~@/assets/images/优惠券_slices/矩形复制2.png) no-repeat
          center;
        display: flex;
        justify-content: space-around;
        align-items: center;

        div {
          width: 40%;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-items: center;
          font-size: 16px;
          position: relative;
          opacity: 0.8;

          span {
            width: 54px;
            height: 54px;
            position: absolute;
            top: 43px;
            left: 53px;
            background: url(~@/assets/images/优惠券_slices/已过期.png) no-repeat
              center;
          }
        }

        div:first-child {
          width: 60%;

          p {
            font-size: 12px;
          }

          p:first-child {
            font-size: 16px;
            opacity: 1;
          }
        }
      }

      li:first-child,
      li:nth-child(2) {
        background: url(~@/assets/images/优惠券_slices/矩形.png) no-repeat
          center;
      }
    }
  }

  // 尾部 去购票

  footer {
    width: 100%;
    height: 80px;
    background-color: #2c2f36;
    position: fixed;
    bottom: 0;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        width: 32px;
        height: 32px;
        transform: rotate(180deg);
      background: url(~@/assets/images/优惠券_slices/arr_left.png) no-repeat
        center;
    }
  }
}
</style>