<template>
  <div class="talk">
    <div class="head">
      <img
        class="head-back"
        src="@/assets/images/登录页_slices (1)/返回箭头.png"
        alt=""
      />
      <img
        class="head-avator"
        src="@/assets/images/消息列表_slices/椭圆形复制 3@3x.png"
        alt=""
      />
      Zeng Wen
      <img
        class="head-more"
        src="@/assets/images/消息列表_slices/三个点.png"
        alt=""
      />
    </div>
    <div class="content">
      <div class="content-1">
        <img
          src="../../../assets/images/消息列表_slices/编组 2@3x.png"
          alt=""
        />
      </div>
      <div class="content-2">
        <img
          src="../../../assets/images/消息列表_slices/编组 2复制@3x.png"
          alt=""
        />
      </div>
      <div class="content-3">
        <div>
          2002年，15岁的石原里美参加 了HORIPRO公司第27回艺人新
          人选拔，获得最佳新人“完…
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.talk {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  .head {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 30px;
    height: 32px;
    font-size: 14px;
    line-height: 20px;
    .head-back {
      width: 6.8px;
      height: 13.1px;
      margin-right: 19px;
    }
    .head-avator {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
    .head-more {
      position: absolute;
      right: 0;
    }
  }
  .content {
    width: 100%;
    margin-top: 43px;
    .content-1 {
      width: 100%;
      img {
        width: 91px;
        height: 32px;
      }
    }
    .content-2 {
      position: relative;
      width: 100%;
      height: 32px;
      margin: 15px 0 0 auto;
      img {
        right: 0;
        position: absolute;
        display: block;
        width: 91px;
        height: 32px;
      }
    }
    .content-3 {
      width: 234px;
      height: 85px;
      margin-top: 57px;
      background: url("../../../assets/images/消息列表_slices/编组 2复制 2@3x.png")
        no-repeat center/100%;
      overflow: hidden;
      div {
        margin: 15px 10px 16px 33px;
        width: 193px;
        height: 54px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
    }
  }
}
</style>
