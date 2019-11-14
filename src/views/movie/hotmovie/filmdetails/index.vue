<template>
  <div class="film-main">
    <div class="wrappe" ref="wrapper">
      <div class="content">
        <div class="film-header">
          <div class="film-header-bg">
            <img :src="imgs[0].bgImg" alt="" />
          </div>
          <div class="film-header-icon">
            <img
              @click="$router.go(-1)"
              class="img-left"
              :src="imgs[0].arrowImg"
              alt=""
            />
            <img
              @click="showPopup"
              class="img-right"
              :src="imgs[0].iconImg"
              alt=""
            />
            <!-- <van-popup
              v-model="show"
              closeable
              position="bottom"
          
              :style="{ height: '20%' }"
            /> -->
          </div>
        </div>
        <div class="film-header-img">
          <img class="film-header-bigImg" :src="imgs[0].bigImg" alt="" />
          <img class="film-header-playImg" :src="imgs[0].playImg" alt="" />
        </div>
        <div class="film-content">
          <strong>傲慢与偏见 (2005)</strong> <span>120min</span>
          <p>Pride & PrieJudice</p>
          <div class="film-score">
            <van-rate v-model="scoreValue" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Vue from "vue";
import { Popup, Rate } from "vant";

Vue.use(Popup).use(Rate);
import "vant/lib/popup/style";
import "vant/lib/rate/style";
export default {
  name: "Film",

  data() {
    return {
      show: false,
      scoreValue: 3,
      imgs: [
        {
          bgImg: require("@/assets/images/电影详情_slices/《傲慢与偏见》.png"),
          iconImg: require("@/assets/images/电影详情_slices/分 享@2x.png"),
          arrowImg: require("@/assets/images/登录页_slices (1)/返回箭头.png"),
          bigImg: require("@/assets/images/电影详情_slices/傲慢与偏见.png"),
          playImg: require("@/assets/images/电影详情_slices/编组.png")
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.film-main {
  width: 100%;
  height: 100%;
  .wrappe {
    width: 100%;
    height: 667px;
    .content {
      width: 100%;
      height: 1000px;
      position: relative;
      .film-header {
        width: 375px;
        height: 254px;
        position: relative;
        .film-header-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        .film-header-icon {
          position: absolute;
          top: 0;
          left: 20px;
          width: 339px;
          height: 30px;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          .img-left,
          .img-right {
            display: block;
            width: 20px;
            height: 20px;
            margin-top: 10px;
          }
        }
      }
      .film-header-img {
        width: 100%;
        position: relative;
        .film-header-bigImg {
          position: absolute;
          top: -100px;
          left: 20px;
          width: 99px;
          height: 133px;
          z-index: 5;
        }
        .film-header-playImg {
          position: absolute;
          top: -63px;
          right: 100px;
          z-index: 5;
        }
      }
    }
  }
}
</style>
