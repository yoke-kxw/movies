<template>
  <div class="purchase_tickets-wrapper" ref="wrapper">
    <div class="purchase_tickets-content">

      <!-- 头部 -->
      <header>
        <span @click="$router.go(-1)" class="header-l"></span>

        <div class="header-r">
          <span></span>
          <p>hi,znkk</p>
        </div>
      </header>

      <!-- 头部下方的购票块儿 -->
      <ul class="header-sub">
        <li>
          <div>
            <p>试试搜索影片</p>
            <b></b>
          </div>
          <span></span>
        </li>

        <li>
          <div>
            <p>万达影城</p>
            <b></b>
          </div>
          <span></span>
        </li>

        <li>
          <div>
            <div>
              <p>5月9日</p>
              <p>1:34pm</p>
            </div>

            <b></b>
          </div>

          <p class="more">更多场次</p>
        </li>

        <li>
          <div>
            <div @click="changeBgc" :style="{background: bgc1}">
              <span v-if="lock1">✔</span>
            </div>
            <p>特惠票</p>
          </div>

          <div>
            <div  @click="changeBgc2" :style="{background: bgc2}">
              <span v-if="lock2">✔</span>
            </div>
            <p>推荐座位</p>
          </div>
        </li>

        <li>
          <div>购票</div>
        </li>

        <li>
          <div>
            <p>一条狗的使命 我是药神 清除历史</p>
          </div>
        </li>
      </ul>




      <!-- 特惠票部分 -->

      <div class="special-ticke">
          <h4>特惠票</h4>

          <div>
            <p>更多优惠</p>

            <span></span>
          </div>
      </div>




        <!-- 特惠票下边 -->

        <ul class="special-ticke-sub">

            <li>
              <div>
                <p>18:15</p>
                <p>22:16散场</p>
              </div>

              <div>
                <p>英雄联盟S决赛</p>
                <p>万达影城6号激光厅</p>
              </div>

              <p>40.9元</p>

              <span>
                  购票
              </span>
            </li>

            
            <li>
              <div>
                <p>18:15</p>
                <p>22:16散场</p>
              </div>

              <div>
                <p>英雄联盟S决赛</p>
                <p>万达影城6号激光厅</p>
              </div>

              <p>40.9元</p>

              <span>
                  购票
              </span>
            </li>
            
            <li>
              <div>
                <p>18:15</p>
                <p>22:16散场</p>
              </div>

              <div>
                <p>英雄联盟S决赛</p>
                <p>万达影城6号激光厅</p>
              </div>

              <p>40.9元</p>

              <span>
                  购票
              </span>
            </li>
            
            <li>
              <div>
                <p>18:15</p>
                <p>22:16散场</p>
              </div>

              <div>
                <p>英雄联盟S决赛</p>
                <p>万达影城6号激光厅</p>
              </div>

              <p>40.9元</p>

              <span>
                  购票
              </span>
            </li>
            
            <li>
              <div>
                <p>18:15</p>
                <p>22:16散场</p>
              </div>

              <div>
                <p>英雄联盟S决赛</p>
                <p>万达影城6号激光厅</p>
              </div>

              <p>40.9元</p>

              <span>
                  购票
              </span>
            </li>

        </ul>


    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "Purchase_tickets", // 购票页面

  mounted() {
    this.$nextTick(() => {
      // 因为获取页面数据一般是异步的, 所以用$nextTick异步执行
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },

  data(){
    return{
      lock1: false,
      lock2: true,

      bgc1: '',
      bgc2: 'linear-gradient(#f16d7d, #f28d6d)'
    }
  },

  methods:{
    changeBgc(){
      this.lock1 = !this.lock1;
      if(this.bgc1 != ''){
        this.bgc1 = ''
      }else{
      this.bgc1 = 'linear-gradient(#f16d7d, #f28d6d)'
      }
    },

    changeBgc2(){
      this.lock2 = !this.lock2;
       if(this.bgc2 != ''){
        this.bgc2 = ''
      }else{
      this.bgc2 = 'linear-gradient(#f16d7d, #f28d6d)'
      }
    }
  }
};
</script>




<style lang="scss" scoped>
.purchase_tickets-wrapper {
  width: 100%;
  height: 100%;

  .purchase_tickets-content { 
    width: 100%;
    // height: 700px;
    color: #fff;

    // 头部
    header {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      align-items: center;
      box-sizing: border-box;
      padding: 0 15px;
      margin-bottom: 30px;

      .header-l {
        width: 32px;
        height: 32px;
        background: url(~@/assets/images/优惠券_slices/arr_left.png) no-repeat
          center;
      }

      .header-r {
        width: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        box-sizing: border-box;
        margin-right: 10px;

        span {
          width: 33px;
          height: 33px;
          border-radius: 50%;
          background: url(~@/assets/images/购票_slices/user_photo.png) no-repeat
            center;
          background-size: 33px 33px;
        }
      }
    }

    // 头部下边的购票块儿

    .header-sub {
      width: 336px;
      height: 300px;
      margin: 0 auto;
      background-color: #33363d;
      border-radius: 10px;

      display: flex;
      flex-wrap: wrap;
      align-items: center;

      li {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        div {
          width: 80%;
          display: flex;
          justify-content: space-around;
        }
      }

      li:nth-child(1) {
        box-sizing: border-box;
        // padding-left: 30px;
        div {
          p {
            opacity: 0.6;
            margin-right: 86px;
          }

          b {
            width: 16px;
            height: 16px;
            transform: rotate(180deg);
            background: url(~@/assets/images/优惠券_slices/arr_left.png)
              no-repeat center;
            margin-left: 2px;
          }
        }
      }

      li:nth-child(2) {
        // padding-left: 50px;
        div {
          p {
            font-size: 16px;
            margin-right: 100px;
          }

          b {
            width: 16px;
            height: 16px;
            transform: rotate(180deg);
            background: url(~@/assets/images/优惠券_slices/arr_left.png)
              no-repeat center;
          }
        }

        span {
          display: block;
          width: 16px;
          height: 19px;
          background: url(~@/assets/images/购票_slices/定位复制.png) no-repeat
            center;
          margin-right: 33px;
        }
      }

      li:nth-child(3) {
        div {
          div {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            p:nth-child(1) {
              font-size: 16px;
              margin-left: 20px;
            }

            p:nth-child(2) {
              font-size: 12px;
              opacity: 0.8;
              margin-left: 10px;
            }
          }

          b {
            padding-right: 20px;
            width: 16px;
            height: 16px;
            transform: rotate(180deg);
            background: url(~@/assets/images/优惠券_slices/arr_left.png)
              no-repeat center;
            margin-right: 10px;
          }
        }

        .more {
          opacity: 0.7;
          margin-right: 19px;
        }
      }

      li:nth-child(4) {
        div:nth-child(1) {
          justify-content: flex-start;
          width: 50%;
          margin-left: 13px;
          align-items: center;
          div {
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            border: 1px solid #979797;
            // background: linear-gradient(#f16d7d, #f28d6d);
            box-sizing: border-box;
            padding-left: 2px;
            margin-right: 13px;

            span {
            }
          }

          p {
            opacity: 0.7;
            // margin-right: 20px;
          }
        }

        div:nth-child(2) {
          justify-content: flex-start;
          margin-left: 90px;

          width: 50%;

          div {
            width: 16px;
            height: 16px;
            border: 1px solid #979797;
            // background: linear-gradient(#f16d7d, #f28d6d);
            box-sizing: border-box;
            padding-left: 2px;
            margin-right: 20px;

            span {
            }
          }

          p {
            opacity: 0.7;
            // margin-right: 20px;
          }
        }
      }

      li:nth-child(5){
        justify-content: center;

          div{
            width: 86%;
            height: 76%;
            background: linear-gradient(to right, #F25B86, #F1AC5E );
            font-size: 16px;
            display: flex;
            align-items: center;
            border-radius: 6px;
          }
      }

      li:nth-child(6){
        div{
          justify-content: space-around;
          p{
            opacity: 0.7;
            margin-right: 40px;
          }
        }
      }
    }

    
    // 特惠票部分
    .special-ticke{
      width: 334px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h4{
        font-size: 16px;
        font-weight: normal;
      } 

      div{
        display: flex;
        align-items: center;
          p{
            opacity: 0.7;
          }

          span{
             width: 16px;
            height: 16px;
            transform: rotate(180deg);
            background: url(~@/assets/images/优惠券_slices/arr_left.png)
              no-repeat center;
            margin-left: 3px;
          }
      }
    }


    // 特惠票下边的购票部分
    .special-ticke-sub{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        li{
          width: 336px;
          height: 70px;
          background-color: #33363D;
          border-radius: 10px;
          margin: 10px 0;
          display: flex;
          justify-content: space-around;
          align-items: center;

          div{
            p{
              color: #fff;
              font-size: 12px;
              margin: 10px 0;
              opacity: 0.7;
            }

            p:nth-child(1){
              font-size: 15px;
              opacity: 1;
            }

          }

          p{
            font-size: 18px;
            color: #FBC34A;
          }

          span{
            text-align: center;
            line-height: 25px;
            width: 45px;
            height: 25px;
            background: linear-gradient(135deg, #F25B86,#F1AC5E);
            border-radius: 5px;
          }
        }
    }
    
  }
}
</style>