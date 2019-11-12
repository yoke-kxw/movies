<template>
  <div class="ticket-buy">
    <div class="head">
      <span @click="back">&lt;</span> <span>我的影票</span> <span> &lt; </span>
    </div>
    <div class="content">
      <img class="content-shadow1" src="../../assets/images/我的影票_slices/形状结合@3x.png" alt="">
      <img class="content-shadow2" src="../../assets/images/我的影票_slices/形状结合@3x.png" alt="">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="slide-top">
            <div class="top-l">
              <h3>后来的我们</h3>
              <p>今天 5-8 12:00-13:56 (英语3D)</p>
              <p>耀莱成龙影城(建业店)</p>
              <p>1号激光厅 7排12座 7排13座</p>
            </div>
            <img src="@/assets/images/我的影票_slices/illushb1356采集到那如明信片般美好的电@3x.png" alt="">
          </div>
          <div class="slide-middle">
            <div class="slide-middle-head">
              <span>取票码</span>
              <span>284856992589858F</span>
              <span>33元</span>
            </div>
            <img src="@/assets/images/我的影票_slices/timg@3x.png" alt="">
            <p>2张电影票</p>
          </div>
          <div class="slide-bottom">
            <p>
              耀莱成龙影城（建业店）
              地址:云龙区万达广场3层
            </p>
            <p>
              <span>1.3</span>km
              <img src="@/assets/images/我的影票_slices/电话@3x.png" alt="">
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-top">
            <div class="top-l">
              <h3>后来的我们</h3>
              <p>今天 5-8 12:00-13:56 (英语3D)</p>
              <p>耀莱成龙影城(建业店)</p>
              <p>1号激光厅 7排12座 7排13座</p>
            </div>
            <img src="@/assets/images/我的影票_slices/illushb1356采集到那如明信片般美好的电@3x.png" alt="">
          </div>
          <div class="slide-middle">
            <div class="slide-middle-head">
              <span>取票码</span>
              <span>284856992589858F</span>
              <span>33元</span>
            </div>
            <img src="@/assets/images/我的影票_slices/timg@3x.png" alt="">
            <p>2张电影票</p>
          </div>
          <div class="slide-bottom">
            <p>
              耀莱成龙影城（建业店）
              地址:云龙区万达广场3层
            </p>
            <p>
              <span>1.3</span>km
              <img src="@/assets/images/我的影票_slices/电话@3x.png" alt="">
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-top">
            <div class="top-l">
              <h3>后来的我们</h3>
              <p>今天 5-8 12:00-13:56 (英语3D)</p>
              <p>耀莱成龙影城(建业店)</p>
              <p>1号激光厅 7排12座 7排13座</p>
            </div>
            <img src="@/assets/images/我的影票_slices/illushb1356采集到那如明信片般美好的电@3x.png" alt="">
          </div>
          <div class="slide-middle">
            <div class="slide-middle-head">
              <span>取票码</span>
              <span>284856992589858F</span>
              <span>33元</span>
            </div>
            <img src="@/assets/images/我的影票_slices/timg@3x.png" alt="">
            <p>2张电影票</p>
          </div>
          <div class="slide-bottom">
            <p>
              耀莱成龙影城（建业店）
              地址:云龙区万达广场3层
            </p>
            <p>
              <span>1.3</span>km
              <img src="@/assets/images/我的影票_slices/电话@3x.png" alt="">
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // effect: "coverflow",
        // slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0
          // stretch: 10,
          // depth: 60,
          // modifier: 2,
          // slideShadows: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    back() {
      // console.log("点击成功");
      this.$router.push()
    }
  }
};
</script>

<style lang="scss" scoped>
.ticket-buy {
  background-color: rgb(49, 49, 49);
  padding: 8px;
  .head {
    margin-bottom: 80px;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    color: white;
    span:nth-child(1) {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: -2px;
        left: -5px;
        width: 20px;
        height: 20px;
      }
    }
    span:nth-child(3) {
      visibility: hidden;
    }
  }
  .content {
    position: relative;
    width: 340px;
    height: 550px;
    margin: 0 auto 30px;
    // box-shadow: 0 10px 10px 0 gray;
    .swiper-container {
    background: url("~@/assets/images/我的影票_slices/形状结合@3x.png")
      no-repeat center/340px 550px;
      position: relative;
      z-index: 3;
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 100%;
        .slide-top {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 190px;
          width: 267px;
          margin: 10px auto 11px;
          border-bottom: 1px dotted gray;
          .top-l {
            width: 180px;
            height: 114px;
            h3 {
              margin: 7px 0 10px;
              font-size: 18px;
              line-height: 25px;
              color:rgba(58,58,58,1);
            }
            p {
              margin-bottom: 8px;
              font-size: 12px;
              line-height: 17px;
              color:rgba(58,58,58,1);
            }
          }
          img {
            display: block;
            width: 78px;
            height: 114px;
          }
        }
        .slide-middle {
          margin: 24px auto 0;
          width: 320px;
          border-bottom: 1px dotted rgb(192, 192, 192);
          .slide-middle-head {
            display: flex;
            justify-content: space-between;
            width: 267px;
            margin: 0 auto 18px;
            font-size: 14px;
            color: #3A3A3A;
            line-height: 20px;
            span:nth-child(2) {
              display: inline-block;
              width: 162px;
              height: 21px;
              text-align: center;
              border: 1px solid gray;
            }
          }
          img {
            display: block;
            width: 144px;
            height: 144px;
            margin: 0 auto 18px;
          }
          p {
            font-size: 10px;
            line-height: 14px;
            text-align: center;
            color:rgba(58,58,58,1);
            margin-bottom: 9px
          }
        }
        .slide-bottom {
          display: flex;
          justify-content: space-between;
          width: 320px;
          margin: 20px auto;
          padding: 0 10px;
          box-sizing: border-box;
          p:nth-child(1) {
            width: 154px;
            font-size: 14px;
            line-height: 20px;
          }
          p:nth-child(2) {
            font-size: 16px;
            img {
              display: block;
              margin: 0 auto;
              width: 18px;
              height: 18px;
            }
          }
        }
      }
    }
    .content-shadow1{
      position: absolute;
      bottom: -15px;
      left: 20px;
      z-index: 2;
      width: 300px;
      height: 520px;
    }
    .content-shadow2 {
      position: absolute;
      bottom: -30px;
      left: 30px;
      z-index: 1;
      width: 280px;
      height: 500px;
    }
  }
}
</style>
