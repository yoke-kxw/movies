<template>
  <div class="film-main">
    <!-- 下拉 回弹 -->
    <div class="wrappe" ref="wrapper">
      <div class="content">
        <div class="film-header">
          <!-- header 背景图片 -->
          <div class="film-header-bg">
            <img :src="imgs[0].bgImg" alt="" />
          </div>
          <!-- 后退 与分享 -->
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
            <van-popup
              v-model="show"
              closeable
              position="bottom"
              :style="{ height: '20%', width: '95%' }"
              close-icon="close"
              close-icon-position="top-right"
              round
              class="vant-pop"
            >
              <!-- 分享还有 链接 接口  -->
              <router-link tag="div" to="" class="share">
                分享好友
              </router-link>
            </van-popup>
          </div>
        </div>
        <!--  -->
        <div class="film-header-img">
          <img class="film-header-bigImg" :src="imgs[0].bigImg" alt="" />
          <!-- 点击 播放按钮 进行跳转 -->
          <router-link
            tag="img"
            to=""
            class="film-header-playImg"
            :src="imgs[0].playImg"
            alt=""
          ></router-link>
        </div>
        <!-- 电影详情 -->
        <div class="film-content">
          <strong class="strong-text">傲慢与偏见 (2005)</strong>
          <span class="span-text">120min</span>
          <p class="p-text">Pride & PrieJudice</p>
          <div class="film-score">
            <!--评分 星星 -->
            <van-rate
              v-model="scoreValue"
              allow-half
              void-icon="star"
              void-color="#eee"
              class="the-stars"
            />
            <!-- 评分分数 -->
            <div class="film-num">
              <span class="film-num-num">{{ (scoreValue / num) * 10 }}</span>
              <span class="film-ten">/10</span>
            </div>
            <!-- 信息 与星星 -->
            <div class="film-item-icon">
              <img class="film-smsimg" :src="imgs[0].smsImg" alt="" />
              <img
                class="film-starsimg"
                @click="addStars"
                :src="isShowStart"
                alt=""
              />
            </div>
            <!-- 影片详情切换 -->
            <div class="film-introduce-list" @click="toView">
              <span class="film-info-lis checkBgc">
                介绍
              </span>
              <span class="film-info-lis">
                影评
              </span>
              <span class="film-info-lis">
                讨论
              </span>
              <span class="film-info-lis">
                更多
              </span>
            </div>
            <!-- 影片详情介绍 -->
            <div
              class="film-text"
              v-for="filmText in list"
              :key="filmText.title"
            >
              <div class="film-text-view" v-if="current == filmText.title">
                {{ filmText.text }}
                <router-link class="router-link" :to="filmText.paths">
                  查看更多 >
                </router-link>
              </div>
            </div>
            <!-- 演员介绍 -->
            <div class="film-actor">
              <h2>演职人员</h2>
              <swiper :options="actorSwiperOption" class="film-actor-swiper">
                <swiper-slide
                  class="film-swiper-slide"
                  v-for="swipweOne in swiperList"
                  :key="swipweOne.actor"
                >
                  <!-- 单个演员 详情 接口 -->
                  <router-link tag="div" to="/actorDetail">
                    <img :src="swipweOne.imgs" alt="" />
                    <h3>{{ swipweOne.director }}</h3>
                    <h4>{{ swipweOne.actor }}</h4>
                  </router-link>
                </swiper-slide>
              </swiper>
              <!-- 查看全部演员  接口 -->
              <router-link class="h4" tag="h4" to="">全部32位演员</router-link>
            </div>
            <!-- 短视频介绍 -->
            <div class="film-video">
              <h2>视频</h2>
              <swiper :options="videoSwiperOption" class="film-video-swiper">
                <swiper-slide
                  class="film-video-slide"
                  v-for="voideSwiper in voideList"
                  :key="voideSwiper.text"
                >
                  <!-- 单个 视频 接口 -->
                  <router-link tag="div" to="">
                    <img :src="voideSwiper.imgs" alt="" />
                    <h3>
                      {{ voideSwiper.text }}
                    </h3>
                  </router-link>
                </swiper-slide>
              </swiper>
              <!-- 查看全部视频 跳转 接口 -->
              <router-link class="video-h4" tag="h4" to="/movie/showing"
                >全部10个视频</router-link
              >
            </div>
            <div class="film-boxoffice">
              <h6>票房</h6>
              <div class="film-boxoffice-item">
                <div class="film-boxoffice-left">
                  <span>2</span>
                  <strong>今日票房</strong>
                </div>
                <div class="film-boxoffice-cen">
                  <span>暂无</span>
                  <strong>首周票房</strong>
                </div>
                <div class="film-boxoffice-right">
                  <span>2660</span>
                  <strong>今日票房排行</strong>
                </div>
              </div>
              <!-- 查看票房详情 进行跳转 接口 -->
              <router-link class="boxoffice-h4" tag="h4" to="/movie/boxoffice"
                >票房详情</router-link
              >
            </div>
            <!--  特惠选座 进行跳转 接口 -->
            <router-link class="router-link-btn" to="/chooseseat" tag="a">
              特惠选座
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入下拉 回弹 插件
import BScroll from "@better-scroll/core";
// 引入 vant 插件
import Vue from "vue";
import { Popup, Rate } from "vant";
Vue.use(Popup).use(Rate);
import "vant/lib/popup/style";
import "vant/lib/rate/style";
import swiperOneImg from "@/assets/images/电影详情_slices/裴淳华图片_百度百科.png";
export default {
  name: "Film",

  data() {
    return {
      show: false,
      // 电影信息 列表 介绍
      list: [
        {
          title: "介绍",
          text:
            "11111伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）",
          paths: "/cinecism"
        },
        {
          title: "影评",
          text:
            "2222伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）",
          paths: "/cinecism"
        },
        {
          title: "讨论",
          text:
            "3333伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）",
          paths: "/cinecism"
        },
        {
          title: "更多",
          text:
            "4444伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐伊丽莎白·班纳特（凯拉·奈特莉饰）",
          paths: "/movieScore"
        }
      ],
      // 演员 列表 介绍
      swiperList: [
        {
          imgs: swiperOneImg,
          director: "凯拉·奈特莉",
          actor: "wen mu"
        },
        {
          imgs: swiperOneImg,
          director: "凯拉·奈特莉",
          actor: "文 mu"
        },
        {
          imgs: swiperOneImg,
          director: "凯拉·奈特莉",
          actor: "wen 木"
        },
        {
          imgs: swiperOneImg,
          director: "凯拉·奈特莉",
          actor: "文木"
        }
      ],
      // 视频列表 介绍
      voideList: [
        {
          imgs: swiperOneImg,
          text:
            "1111111《傲慢与偏见》：百年经典的绝美呈现,一次现实与理想的爱情碰撞"
        },
        {
          imgs: swiperOneImg,
          text:
            "2222222《傲慢与偏见》：百年经典的绝美呈现,一次现实与理想的爱情碰撞"
        },
        {
          imgs: swiperOneImg,
          text:
            "3333333333,《傲慢与偏见》：百年经典的绝美呈现,一次现实与理想的爱情碰撞"
        }
      ],
      // 轮播
      actorSwiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      },
      videoSwiperOption: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        freeMode: true
      },
      // 影片介绍 的默认选中
      current: "介绍",
      show: false,
      // 星星的默认选中
      scoreValue: 1,
      num: 5,
      // 全局的 图片
      imgs: [
        {
          bgImg: require("@/assets/images/电影详情_slices/《傲慢与偏见》.png"),
          iconImg: require("@/assets/images/电影详情_slices/分 享@2x.png"),
          arrowImg: require("@/assets/images/登录页_slices (1)/返回箭头.png"),
          bigImg: require("@/assets/images/电影详情_slices/傲慢与偏见.png"),
          playImg: require("@/assets/images/电影详情_slices/编组.png"),
          smsImg: require("@/assets/images/电影详情_slices/评论复制.png"),
          starsImg: require("@/assets/images/电影详情_slices/星复制 5.png"),
          starsImgs: require("@/assets/images/电影详情_slices/星复制 2.png"),
          actorImgOne: require("@/assets/images/电影详情_slices/裴淳华图片_百度百科.png")
        }
      ],
      // 点亮单个小星星
      isStars: false,
      isShowStart: require("@/assets/images/电影详情_slices/星复制 5.png")
    };
  },
  mounted() {
    // 下拉回弹事件
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
  methods: {
    // 分享事件
    showPopup() {
      this.show = true;
    },
    // 单个小星星的点击事件
    addStars() {
      if (this.isStars == true) {
        this.isStars = false;
        this.isShowStart = this.imgs[0].starsImg;
      } else if (this.isStars == false) {
        this.isStars = true;
        this.isShowStart = this.imgs[0].starsImgs;
      }
    },
    // 电影 详情 列表 切换 效果
    toView() {
      if (event.target.tagName == "SPAN") {
        console.log(event.target.innerText);
        this.current = event.target.innerText;
        document
          .getElementsByClassName("checkBgc")[0]
          .classList.remove("checkBgc");
        event.target.classList.add("checkBgc");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// 本页面的根
.film-main {
  width: 100%;
  .wrappe {
    width: 100%;
    height: 667px;
    .content {
      width: 100%;
      height: 1260px;
      position: relative;
      //  页面的 顶部 图片
      .film-header {
        width: 100%;
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
          top: 25px;
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

          div.share {
            text-align: center;
            line-height: 100px;
            font-size: 32px;
            color: #000;
          }
        }
      }
      // 页面的 影片 图片 与 星星
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
      // 页面电影 的详情
      .film-content {
        margin-top: 50px;
        margin-left: 20px;
        width: 100%;
        .strong-text {
          font-size: 18px;
          color: #dedede;
        }
        .span-text {
          margin-left: 32px;
          font-size: 12px;
          color: #f17479;
        }
        .p-text {
          margin-top: 15px;
        }
        .film-score {
          margin-top: 12px;
          height: 27px;
          position: relative;

          //  分数
          .the-stars {
            width: 125px;
            height: 100%;
            transform: scale(1.2);
            margin-left: 10px;
            position: relative;
          }
          //  分数 计算
          .film-num {
            display: inline-block;
            width: 55px;
            height: 100%;
            margin-left: 15px;
            transform: translateY(-5px);
            .film-num-num {
              font-size: 18px;
              color: #fbc34a;
            }
            .film-ten {
              color: #bbbbbd;
            }
          }
          // 信息 与 星星
          .film-item-icon {
            position: relative;
            width: 100%;
            height: 27px;
            .film-smsimg {
              position: absolute;
              top: -30px;
              right: 85px;
              width: 17px;
              height: 17px;
            }
            .film-starsimg {
              position: absolute;
              top: -32px;
              right: 43px;
              width: 17px;
              height: 17px;
            }
          }
          // 电影的 介绍 列表 选项
          .film-introduce-list {
            width: 202px;
            height: 27px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .film-info-lis {
              height: 100%;
              width: 40px;
              font-size: 16px;
              color: #6d6f74;
              cursor: pointer;
              line-height: 27px;
              text-align: center;
              &.checkBgc {
                width: 40px;
                background: linear-gradient(90deg, #f26a7e, #f1a163);
                border-radius: 3px;
                color: #ffffff;
              }
            }
          }
          // 电影的介绍
          .film-text {
            margin-top: 10px;
            width: 340px;
            height: 70px;
            position: absolute;
            top: 85px;
            left: 0;
            .film-text-view {
              width: 100%;
              height: 70px;
              font-size: 12px;
              line-height: 15px;
              color: #62656a;
              .router-link {
                width: 75px;
                height: 22px;
                color: orange;
                font-size: 16px;
                text-align: center;
                line-height: 22px;
              }
            }
          }
          // 电影的 演员
          .film-actor {
            width: 100%;
            margin-top: 120px;
            margin-left: -20px;
            h2 {
              font-size: 16px;
              font-weight: normal;
              margin-left: 20px;
            }
            .film-actor-swiper {
              width: 340px;
              height: 183px;
              margin-top: 20px;
              margin-bottom: 10px;
              .film-swiper-slide {
                div {
                  img {
                    width: 95px;
                    height: 140px;
                    border-radius: 10px;
                  }
                  h3 {
                    font-size: 14px;
                    color: #616468;
                    margin-top: 8px;
                  }
                  h4 {
                    font-size: 12px;
                    color: #616468;
                    margin-top: 8px;
                  }
                }
              }
            }
            .h4 {
              display: block;
              font-size: 16px;
              margin: 0 auto;
              text-align: center;
              margin-left: -20px;
              font-weight: normal;
              color: orange;
            }
          }
          // 电影的视频
          .film-video {
            width: 100%;
            margin-top: 30px;
            margin-left: -20px;
            h2 {
              font-size: 16px;
              font-weight: normal;
              margin-left: 20px;
            }
            .film-video-swiper {
              width: 340px;
              height: 183px;
              margin-top: 20px;
              margin-bottom: 10px;
              .film-video-slide {
                width: 200px;
                height: 160px;
                div {
                  width: 100%;
                  height: 100%;
                  img {
                    width: 200px;
                    height: 120px;
                  }
                  h3 {
                    font-size: 12px;
                    color: #cdcece;
                    margin-top: 8px;
                    line-height: 14px;
                  }
                }
              }
            }
            .video-h4 {
              display: block;
              font-size: 16px;
              margin: 0 auto;
              text-align: center;
              margin-left: -20px;
              font-weight: normal;
              color: orange;
              margin-top: -20px;
            }
          }
          // 电影的 票房
          .film-boxoffice {
            width: 100%;
            margin-top: 30px;
            margin-left: -20px;
            h6 {
              font-size: 16px;
              font-weight: normal;
              margin-left: 20px;
            }
            .film-boxoffice-item {
              display: flex;
              margin-left: 20px;
              .film-boxoffice-left,
              .film-boxoffice-cen,
              .film-boxoffice-right {
                width: 113px;
                height: 34px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 16px;
                margin-top: 20px;
                strong {
                  font-size: 14px;
                  color: #62656a;
                  font-weight: normal;
                  margin-top: 10px;
                }
              }
            }
            .boxoffice-h4 {
              display: block;
              font-size: 16px;
              margin: 0 auto;
              text-align: center;
              font-weight: normal;
              color: orange;
              margin-top: 20px;
            }
          }
          // 特惠选座
          .router-link-btn {
            display: block;
            width: 100%;
            height: 44px;
            background: linear-gradient(90deg, #f26a7e, #f1a163);
            margin-left: -20px;
            margin-top: 20px;
            font-size: 18px;
            color: #e7b9b0;
            line-height: 44px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
