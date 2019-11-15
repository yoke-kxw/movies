<template>
  <div class="refund">
    <ul class="whole-content">
      <!-- 第一个 -->
      <li class="whole-content1">
        <!-- 标题 -->
        <div class="whole-title">
          <div class="whole-title1">
            <div>万达国际影城</div>
            <div>&gt</div>
          </div>
          <div class="whole-title2">已完成</div>
        </div>
        <!-- 电影 -->
        <div class="film">
          <!-- 图片 -->
          <div class="film-price">
            <img :src="require('@/assets/imgs/user/order/img2.png')" alt class="film-price1" />
            <div class="film-price2">总价：70元</div>
          </div>
          <!-- 座位 -->
          <ul class="seat">
            <li class="seat1">
              <div>后来的我们</div>
              <div>2张</div>
            </li>
            <li class="seat2">05月16日 17:00</li>
            <li class="seat2">五号厅 5排14座 5排15座</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
 name:"refund"
};
</script>
<style lang="scss" scoped>
.refund {
  width: 336px;
  height: 100%;
  margin: 10px auto;
  .whole-content {
    width: 100%;
    height: 100%;
    // 第一个
    .whole-content1 {
      margin-top: 10px;
      height: 161px;
      background: rgba(51, 54, 61, 1);
      border-radius: 6px;
      padding-top: 15px;
      //   标题
      .whole-title {
        width: 100%;
        height: 14px;
        display: flex;
        justify-content: space-between;
        .whole-title1 {
          width: 100px;
          margin-left: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 14px;
        }
        .whole-title2 {
          margin-right: 15px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 14px;
        }
      }
      //   电影
      .film {
        width: 100%;
        height: 100px;
        display: flex;
        margin-left: 15px;
        margin-top: 15px;
        // 图片
        .film-price {
          width: 70px;
          height: 100%;
          .film-price1 {
            width: 100%;
            height: 81px;
          }
          .film-price2 {
            width: 100%;
            height: 12px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 12px;
            margin-top: 15px;
          }
        }
        // 座位
        .seat {
          width: 160px;
          height: 60px;
          margin-left: 15px;
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .seat1 {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
          }
          .seat2 {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>