<template>
    <div class="sign-in">
    <div class="sign-head">
        <img src="~@/assets/images/签到_slices/错误(1).png"  @click="$router.back(-1)">
        <img src="~@/assets/images/签到_slices/错误.png" alt="">
    </div>
    <div class="sign-img">
        <!-- <img src="~@/assets/images/签到_slices/大表姐CC采集到电影｜海报｜记忆.png" alt="">
        <img src="~@/assets/images/签到_slices/大表姐CC采集到电影｜海报｜记忆复制.png" alt="">
        <img src="~@/assets/images/签到_slices/大鱼海棠。.png" alt=""> -->
        <stack ref="stack" :pages="imgArr"></stack>
        <div class="sign-icon">
          <img src="~@/assets/images/签到_slices/编组 4.png" alt="">
          <img src="~@/assets/images/签到_slices/点赞.png" alt="">
          <img src="~@/assets/images/签到_slices/分 享.png" alt="">
          <img src="~@/assets/images/签到_slices/评论.png" alt="">
        </div>
       
    </div>


    </div>
</template>

<script>

    export default {
        name:"signIn",
        components:{
          stack:()=>import("@/components/stack")
          },
          data(){
            return{
              imgArr:[
                {
                  src:require("@/assets/images/签到_slices/大表姐CC采集到电影｜海报｜记忆.png"),
                  title:"傲慢与偏见"
              },{
                  src:require("@/assets/images/签到_slices/大表姐CC采集到电影｜海报｜记忆复制.png"),
                  title:"某某韩剧"
                },{
                  src:require("@/assets/images/签到_slices/大鱼海棠。.png"),
                  title:"大鱼海棠"}],
            }
          }

    }
</script>

<style lang="scss" scoped>
    .sign-in{
      position: fixed;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        background:url("~@/assets/images/影院详情_slices/椭圆形复制 3.png") no-repeat top;
        background-size: 100% auto;
        .sign-head{
            height: 44px;
            width: 100%;
            // padding: 0 20px;
            // box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img:nth-child(1){
                width: 16px;
                height: 16px;
            }
            img:nth-child(2){
                width: 22px;
                height: 16px;
            }
        }
        .sign-img{
          width: 100%;
          height: 550px;
            // padding: 0 20px;
            // box-sizing: border-box;
            margin: 0 auto;
            position: relative;
            z-index: 1000;
            list-style: none;
            pointer-events: none;
            .sign-icon{
              width: 100%;
              display: flex;
              justify-content: space-around;
            }
        }


    }

</style>
