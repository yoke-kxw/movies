<template>
  <div class="wrapper" ref="wrapper">
    <div class="actor-detail">
      <div class="intro">
        <!-- 版心 -->
        <div class="intro-c">
          <div class="topbar">
            <img @click="$router.go(-1)" src="@/assets/imgs/actordetail/arrowl.png" alt />
          </div>
          <!-- 简介 -->
          <div class="actor-info">
            <img src="@/assets/imgs/actordetail/avastar.png" alt />
            <h3>凯拉·奈特莉</h3>
            <p>Satomi lshihara</p>
            <p>关注</p>
            <p>138585人关注</p>
          </div>
          <!-- 详细介绍 -->
          <div class="info-more">
            <h3 class="common-title">简介</h3>
            <p>
              2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的爱 情电影《小岛之恋》上映；4月5日，参演的喜剧电影《我的爷爷 》上映，在片中饰演五代家的独生女五代珠子，她则凭借该片获 得了第27届日本…
              <span>查看更多></span>
            </p>
          </div>
          <!-- 个人作品 -->
          <div class="self-product">
            <h3 class="common-title">个人作品</h3>
            <ul class="product-items">
              <li class="product-item">
                <img src="@/assets/imgs/actordetail/film1.png" alt />
                <div class="product-name">
                  <h3>忍者之国</h3>
                  <p>
                    评分
                    <span>9.0</span>
                  </p>
                  <p>演员 大野智</p>
                  <p>上映时间 2017年7月1日</p>
                </div>
              </li>
              <li class="product-item">
                <img src="@/assets/imgs/actordetail/film2.png" alt />
                <div class="product-name">
                  <h3>新·哥斯拉</h3>
                  <p>
                    评分
                    <span>9.0</span>
                  </p>
                  <p>演员 大野智</p>
                  <p>上映时间 2017年7月1日</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- 演员照片 -->
          <div class="actor-photo">
            <h3 class="common-title">相册</h3>
            <div class="photos">
              <div class="photos-l">
                <div class="inner-top">
                  <img src="@/assets/imgs/actordetail/IMG_91637.png" alt />
                </div>
                <div class="inner-below">
                  <img src="@/assets/imgs/actordetail/IMG_91647.png" alt />
                  <img src="@/assets/imgs/actordetail/IMG_91658.png" alt />
                </div>
              </div>
              <div class="photos-r">
                <img src="@/assets/imgs/actordetail/IMG_91625.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true });
    });
  }
};
</script>

<style lang='scss' scoped>
.wrapper{
    height: 667px;
}
.actor-detail {
  overflow: hidden;
  .intro {
    // height: 489px;
    width: 100%;
    overflow: hidden;
    background: url("~@/assets/imgs/actordetail/actor.png")
      no-repeat top;
      background-size: 100%;
    .intro-c {
      padding: 0 20px;
      .topbar {
        // margin-left: 20px;
        margin-top: 45px;
      }
      // 简介
      .actor-info {
        width: 100%;
        margin-top: 30px;
        text-align: center;
        color: #ffffff;
        h3 {
          font-size: 20px;
          margin-top: 12px;
        }
        p:nth-child(3) {
          font-size: 12px;
          margin-top: 7px;
          color: rgba(255, 255, 255, 0.7);
        }
        p:nth-child(4) {
          margin: 10px auto 11px;
          width: 48px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          font-size: 14px;
          border-radius: 11px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
        }
        p:nth-child(5) {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
      // 详细简介
      .info-more {
        p {
          font-size: 12px;
          line-height: 18px;
          color: rgba(255, 255, 255, 0.3);
          span {
            font-size: 14px;
            color: rgba(251, 195, 74, 1);
          }
        }
      }
      //个人作品样式
      .self-product {
        .product-items {
          overflow: hidden;
          li {
            display: flex;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            margin-top: 10px;
            .product-name {
              margin-left: 16px;
              h3 {
                margin-top: 17px;
                font-size: 18px;
                color: rgba(255, 255, 255, 1);
              }
              p {
                margin-top: 16px;
              }
              p:nth-child(2) {
                span {
                  color: rgba(251, 195, 74, 1);
                }
              }
            }
          }
        }
      }
      //   演员照片样式
      .photos {
        height: 335px;
        display: flex;
        justify-content: space-between;
        .photos-l {
          .inner-top {
            margin-bottom: 7px;
          }
        }
      }
    }
  }
  .common-title {
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 28px;
  }
}
</style>