<template>
  <div class="login">
       <div class="head">
           &lt;
       </div>
       <div class="content">
           <img src="@/assets/images/登录页_slices (1)/未标题-1@3x.png" alt="">
           <div class="user">
               <img src="@/assets/images/登录页_slices (1)/编组 2@3x.png" alt="">
               <input type="text" placeholder="请输入手机号">
           </div>
           <div class="password">
               <img src="@/assets/images/登录页_slices (1)/编组@3x.png" alt="">
               <input type="text" placeholder="请输入密码">
           </div>
           <div>
               登陆
           </div>
           <div>
               <span>注册</span>
               <span>忘记密码</span>
           </div>
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login {
    padding: 10px 24px 0;
    .content {
        img {
            display: block;
            width: 103px;
            height: 92px;
            margin: 77px auto 33px;
        }
    }
}
</style>