<template>
  <div class="upcoming">
    <div class="wrappe" ref="wrapper">
      <div class="content">
        <div class="header-swiper">
          <h2>热门预告片</h2>
          <swiper :options="upcomingHeaderSwiper" ref="mySwiper">
            <swiper-slide v-for="item in imgList" :key="item.id">
              <img :src="item.url" alt="" />
              <p>
                {{ item.title }} <span>{{ item.time }}</span>
              </p>
            </swiper-slide>
          </swiper>
        </div>
        <div class="center">
          <div class="center-c">
            <div class="center-text">
              <div class="center-top">
                <h2>即将上映</h2>
                <ul class="center-uls" @click="btnSwitch">
                  <router-link
                    class="router-link dateOne "
                    tag="li"
                    to="/movie/upcoming/childpage"
                    >12月2日</router-link
                  >
                  <router-link
                    class="router-link dateTwo  dateColor"
                    tag="li"
                    to="/movie/upcoming/childpage"
                    >12月3日</router-link
                  >
                  <router-link
                    class="router-link dateThree"
                    tag="li"
                    to="/movie/upcoming/childpage"
                    >12月4日</router-link
                  >
                  <router-link
                    class="router-link dateFour"
                    tag="li"
                    to="/movie/upcoming/childpage"
                    >12月5日</router-link
                  >
                  <router-link
                    class="router-link dateFive"
                    tag="li"
                    to="/movie/upcoming/childpage"
                    >12月6日</router-link
                  >
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="child-pages">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import mocks from "mockjs";
var mock = mocks.Random;
export default {
  name: "ipcoming",
  data() {
    return {
      navSwitch: false,
      upcomingHeaderSwiper: {
        spaceBetween: 10,
        slidesPerView: 1.2
      },
      imgList: [
        {
          id: mock.guid(),
          url: require("@/assets/images/电影详情_slices/傲慢与偏见@2x.png"),
          title: "变身时尚达人！！《穿普拉达的女王",
          time: "02:12"
        },
        {
          id: mock.guid(),
          url: require("@/assets/images/电影详情_slices/裴淳华图片_百度百科@2x.png"),
          title: "变身时尚达人！！《穿普拉达的女王》",
          time: "02:12"
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    btnSwitch(e) {
      document
        .getElementsByClassName("dateColor")[0]
        .classList.remove("dateColor");
      e.target.classList.add("dateColor");
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.upcoming {
  width: 100%;
  margin-top: 45px;
  .wrappe {
    width: 100%;
    height: 667px;
    .content {
      width: 100%;
      height: 800px;
      position: relative;
      .header-swiper {
        position: absolute;
        top: 0;
        width: 100%;
        height: 431px;
        // margin: 0 auto;
        h2 {
          margin-left: 20px;
          font-size: 18px;
          font-weight: normal;
          margin-top: 18px;
        }
        .swiper-container {
          margin-top: 18px;
          width: 100%;
          height: 188px;

          .swiper-slide {
            width: 318px;
            height: 431px;
            display: flex;

            img {
              width: 318px;
              height: 100%;
              overflow: hidden;
              margin-top: -20px;
              // margin-left: -20px;
              position: relative;
            }
            p {
              position: absolute;
              top: 160px;
              left: 0;
              color: #ffffff;
              font-size: 14px;
              margin-left: 20px;
              span {
                display: inline-block;
                margin-left: 15px;
                font-size: 12px;
              }
            }
          }
        }
      }
      .center {
        width: 100%;
        height: 100%;
        .center-c {
          position: relative;
          .center-text {
            position: absolute;
            top: 270px;
            padding-left: 15px;
            .center-top {
              h2 {
                font-weight: normal;
                font-size: 20px;
              }
              .center-uls {
                width: 100%;
                height: 34px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 15px;
                .router-link {
                  width: 59px;
                  height: 100%;
                  font-size: 14px;
                  color: #838485;
                  border: 2px solid #838485;
                  line-height: 34px;
                  text-align: center;
                  border-radius: 10px;
                  margin-left: 8px;
                  background: transparent;
                  z-index: 10;
                }

                .dateColor {
                  background: linear-gradient(135deg, #f26680, #f1a561);
                  color: #fff;
                  border: 2px solid orange;
                }
              }
            }
          }
        }
      }
      .child-pages {
        position: absolute;
        top: 300px;
        left: 25px;
      }
    }
  }
}
</style>
