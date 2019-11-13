<template>
  <div class="login">
    <div class="head">
      <img @click="$router.go(-1)" src="@/assets/images/登录页_slices (1)/返回箭头.png" alt="">
    </div>
    <div class="content">
      <img
        class="logo"
        src="@/assets/images/登录页_slices (1)/未标题-1@3x.png"
        alt=""
      />
      <div class="user">
        <img src="@/assets/images/登录页_slices (1)/编组 2@3x.png" alt="" />
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="password">
        <img src="@/assets/images/登录页_slices (1)/编组@3x.png" alt="" />
        <input type="text" placeholder="请输入密码" />
      </div>
      <div class="btn">
        登陆
      </div>
      <div class="bottom">
        <a href="javascript:;">注册</a>
        <a href="javascript:;">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  padding: 10px 24px 0;
  .content {
    .logo {
      display: block;
      width: 103px;
      height: 92px;
      margin: 77px auto 33px;
      border: 1px dotted gray;
    }
    .user {
      display: flex;
      align-items: center;
      width: 254px;
      height: 40px;
      margin: 0 auto;
      box-sizing: border-box;
      border-radius: 11px;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
      img {
        display: block;
        width: 14px;
        height: 19px;
        margin: 0 8px 0 27px;
      }
      input {
        width: 170px;
        height: 16px;
        outline: none;
        border: 0;
        color: #ffffff;
        background: transparent;
      }
    }
    .password {
      display: flex;
      align-items: center;
      width: 254px;
      height: 40px;
      margin: 22px auto 68px;
      box-sizing: border-box;
      border-radius: 11px;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
      img {
        display: block;
        width: 14px;
        height: 19px;
        margin: 0 8px 0 27px;
      }
      input {
        width: 170px;
        height: 16px;
        outline: none;
        border: 0;
        color: #ffffff;
        background: transparent;
      }
    }
    .btn {
      width: 254px;
      height: 40px;
      margin: 0 auto 15px;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      border-radius: 11px;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.57);
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
    }
    .bottom {
        display: flex;
        justify-content: space-between;
        width: 254px;
        margin: 0 auto;
        a {
            color: #ffffff;
            text-decoration: none;
        }
    }
  }
}
</style>
