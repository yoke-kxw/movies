<template>
  <div class="cinema-details wrapper" ref="wrapper">
    <div class="content">
      <!-- 影院地址 -->
      <router-link to="/cinema/cinemaMap" class="tomap" tag="div">
        <img class="icon-l" src="@/assets/imgs/cinemaDetails/position.png" alt />
        <span class="icon-r">&gt;</span>
        <p class="name">{{cinemaDetails.title}}</p>
        <p class="address">{{cinemaDetails.address}}</p>
      </router-link>
      <!-- 电影轮播列表 -->
      <div class="cinema-list-swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in movieList" :key="item.id">
            <img :src="imgUrl(item.img)" alt />
          </swiper-slide>
        </swiper>
        <div class="movie-info">
          <p class="movie-name">{{ movieList[currentMovie].name }}</p>
          <p class="movie-details">{{ movieList[currentMovie].tag | tag }}</p>
        </div>
      </div>
      <!-- 电影场次 -->
      <div class="session">
        <p class="today">今天2月1日</p>
        <ul class="session-list">
          <li class="session-item" v-for="item in 8" :key="item">
            <div class="time">
              <p>15:30</p>
              <p>17:14散场</p>
            </div>
            <div class="movie-type">
              <p>原版3D</p>
              <p>2号厅(冠名招商中)</p>
            </div>
            <p class="movie-price">20.9元</p>
            <div class="buy" @click="$router.push('/chooseseat')">购票</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- nav开始 -->
    <nav-bar left="back" class="nav">
      <template v-slot:center>
        <p class="nav-title text-ellipsis">{{cinemaDetails.title}}</p>
      </template>
      <template v-slot:right>
        <img src="@/assets/imgs/cinemaDetails/star.png" alt />
      </template>
    </nav-bar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import BScroll from "@better-scroll/core";

export default {
  components: {
    navBar: () => import("@/components/navBar")
  },
  filters: {
    tag(val) {
      return val.join("|");
    }
  },
  data() {
    const _this = this;
    return {
      movieList: [
        {
          id: Math.random(),
          name: "后来的我们",
          img: "movie-01.png",
          tag: ["111分钟", "剧情", "周冬雨"]
        },
        {
          id: Math.random(),
          name: "傲慢与偏见",
          img: "movie-02.png",
          tag: ["11分钟", "剧情", "科幻"]
        },
        {
          id: Math.random(),
          name: "那如明信片般美好",
          img: "movie-03.png",
          tag: ["111分钟", "惊悚", "周冬雨"]
        },
        {
          id: Math.random(),
          name: "视觉",
          img: "movie-04.png",
          tag: ["111分钟", "惊悚", "666"]
        },
        {
          id: Math.random(),
          name: "记忆",
          img: "movie-05.png",
          tag: ["118分钟", "惊悚", "666"]
        }
      ],
      currentMovie: 0,
      swiperOption: {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        // loop: true,
        // loopedSlides: 5,
        on: {
          progress: function(progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              var modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.1 + 1;
              }
              var translate = slideProgress * modify * 85 + "px";
              var scale = 1 - Math.abs(slideProgress) / 6;
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          },
          slideChange: function() {
            _this.currentMovie = this.activeIndex;
          }
        }
      }
    };
  },
  computed: {
    ...mapState({
      cinemaDetails: function(state) {
        return state.BaiduMap.cinemaList.find(
          el => el.uid == this.$route.params.uid
        );
      }
    })
  },
  methods: {
    imgUrl(name) {
      return require(`@/assets/imgs/cinemaDetails/${name}`);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.cinema-details {
  height: 100%;
  background: url("~@/assets//imgs/cinemaDetails/background.png") no-repeat
    center -40px / 100% auto;
  .nav {
    background: #23262d url("~@/assets//imgs/cinemaDetails/background.png")
      no-repeat top/cover;
    color: #fff;
    font-size: 16px;
  }
  .content {
    padding-top: 44px;
    .tomap {
      padding: 20px;
      .icon-l {
        width: 18px;
        float: left;
        margin-right: 25px;
      }
      .icon-r {
        float: right;
      }
      .name {
        font-size: 16px;
        line-height: 22px;
        color: #fff;
      }
      .address {
        font-size: 12px;
        line-height: 17px;
      }
    }
    .cinema-list-swiper {
      .swiper-slide {
        width: 140px;
        img {
          height: 188px;
        }
      }
      .movie-name {
        padding-top: 10px;
        padding-bottom: 4px;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        color: #fff;
      }
      .movie-details {
        font-size: 14px;
        text-align: center;
      }
    }
    .session {
      padding: 10px 20px;
      .today {
        font-size: 12px;
        color: #fbc34a;
      }
      .session-list {
        .session-item {
          height: 91px;
          background-color: #33363d;
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
          line-height: 17px;
          border-radius: 6px;
          .time {
            p {
              font-size: 12px;
              &:first-child {
                color: #fff;
                font-size: 18px;
                line-height: 25px;
              }
            }
          }
          .movie-type {
            width: 68px;
            text-align: left;
          }
          .movie-price {
            font-size: 18px;
            font-weight: 500;
            color: #fbc34a;
            line-height: 25px;
          }
          .buy {
            width: 45px;
            line-height: 25px;
            background: linear-gradient(
              150deg,
              rgba(242, 91, 134, 1) 0%,
              rgba(241, 172, 94, 1) 100%
            );
            box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
            border-radius: 6px;
          }
        }
      }
    }
  }
}
</style>