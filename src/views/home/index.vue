<template>
  <div class="home wrapper" ref="wrapper">
    <div class="content">
      <!-- banner开始 -->
      <div class="banner">
        <swiper :options="bannerOption">
          <swiper-slide
            v-for="item in bannerSlides"
            :key="item"
            :style="`background-image:url(${imgUrl(item)})`"
          ></swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <!-- 热映开始 -->
      <div class="hot">
        <div class="title">
          <span class="text">热映影片</span>
          <router-link to="/movie" tag="span" class="all">全部&nbsp;&gt;</router-link>
        </div>
        <swiper :options="crossOption" class="hot-list">
          <swiper-slide class="item" v-for="item in hotList" :key="item.id">
            <img :src="imgUrl(item.img)" alt />
            <p class="text-ellipsis">{{ item.title }}</p>
            <div class="buy">购票</div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 即将上映开始 -->
      <div class="coming">
        <div class="title">
          <span class="text">即将上映</span>
          <router-link to="/movie/coming" tag="span" class="all">全部&nbsp;&gt;</router-link>
        </div>
        <swiper :options="crossOption" class="coming-list">
          <swiper-slide class="item" v-for="item in comingList" :key="item.id">
            <img :src="imgUrl(item.img)" alt />
            <p class="text-ellipsis">{{ item.title }}</p>
            <p class="date">{{ item.date }}</p>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 预告开始 -->
      <div class="trailer">
        <div class="title">
          <span class="text">精选预告</span>
          <router-link to="/movie/coming" tag="span" class="all">全部&nbsp;&gt;</router-link>
        </div>
        <swiper :options="crossOption" class="trailer-list">
          <swiper-slide class="item" v-for="item in trailerList" :key="item.id">
            <img :src="imgUrl(item.img)" alt />
            <p class="info">{{ item.info }}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- nav开始 -->
    <nav-Bar left="location" class="nav">
      <template v-slot:center>
        <div class="search-eara">
          <img src="@/assets/images/首页_slices/搜索@3x.png" alt />
          <input type="text" placeholder="搜影片、影院、影人" />
        </div>
      </template>
      <template v-slot:right>
        <img src="@/assets/images/首页_slices/打卡@3x.png" alt />
      </template>
    </nav-Bar>
    <!-- tab栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "home",
  components: {
    navBar: () => import("@/components/navBar"),
    tabBar: () => import("@/components/tabBar")
  },
  data() {
    return {
      bannerOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".banner .swiper-pagination",
          bulletClass: "banner-bullet",
          bulletActiveClass: "banner-bullet-active"
        }
      },
      crossOption: {
        slidesPerView: "auto",
        spaceBetween: 15,
        freeMode: true
      },
      bannerSlides: [
        "爱学习不解释采集到大护法相关@3x.png",
        "大鱼海棠@3x.png",
        "大鱼海棠复制4@3x.png"
      ],
      hotList: [
        {
          title: "傲慢与偏见",
          img: "傲慢与偏见@3x.png",
          id: Math.random()
        },
        {
          title: "韩国电影",
          img: "anan小玉采集到绘画@3x.png",
          id: Math.random()
        },
        {
          title: "帕丁顿熊",
          img: "JIONSEM采集到海报画册@3x.png",
          id: Math.random()
        },
        {
          title: "不知道是啥",
          img: "朱大来〞采集到设计复制@3x.png",
          id: Math.random()
        }
      ],
      comingList: [
        {
          id: Math.random(),
          title: "My bluebery aaaaaaaaaa",
          img: "都付与断井颓垣采集到影。@3x.png",
          date: "1月25日"
        },
        {
          id: Math.random(),
          title: "THE WORLD aaaaaaaaa",
          img: "NicoleVivico采集到经典电影海报@3x.png",
          date: "1月25日"
        },
        {
          id: Math.random(),
          title: "BABBIT HOLE",
          img: "嘿看这采集到Graphic Design ☆ 广告、海报复制@3x.png",
          date: "1月25日"
        }
      ],
      trailerList: [
        {
          id: Math.random(),
          img: "爱学习不解释采集到大护法相关@3x.png",
          info:
            "《大护法》是一部能够体现反专制、反乌托邦式的寓言动画啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
        },
        {
          id: Math.random(),
          img: "电影截图复制@3x.png",
          info:
            "《大护法》是一部能够体现反专制、反乌托邦式的寓言动画啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
        }
      ]
    };
  },
  methods: {
    imgUrl(name) {
      return require(`@/assets/images/首页_slices/${name}`);
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
.home {
  height: 100%;
  // nav部分
  .nav {
    background-color: #23262d;
    ::v-deep .right {
      margin-left: 7px;
      width: auto;
    }
  }
  .content {
    padding-top: 44px;
    padding-bottom: 100px;
    // banner部分
    .banner {
      padding-top: 10px;
      .swiper-slide {
        width: 330px;
        height: 145px;
        background-position: center;
        background-size: cover;
        border-radius: 6px;
        transition: 300ms;
        transform: scale(0.9);
      }
      .swiper-slide-active {
        transform: scale(1);
      }
      .swiper-pagination {
        position: static;
        ::v-deep .banner-bullet {
          display: inline-block;
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius: 2px;
          margin: 3px;
          transition: all 0.3s linear;
        }
        ::v-deep .banner-bullet-active {
          width: 14px;
        }
      }
    }
    // 主体部分
    .hot-list,
    .coming-list,
    .trailer-list {
      padding-left: 20px;
      .item {
        font-size: 12px;
        text-align: left;
        .text-ellipsis {
          padding: 10px 0 6px;
        }
      }
    }
    .hot {
      .item {
        width: 90px;
        img {
          width: 90px;
          height: 122px;
        }
        .buy {
          width: 50px;
          line-height: 22px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
          border-radius: 11px;
          text-align: center;
        }
      }
    }
    .coming {
      .item {
        width: 120px;
        img {
          width: 120px;
          height: 162px;
        }
        .text-ellipsis {
          font-size: 14px;
        }
        .date {
          font-size: 12px;
        }
      }
    }
    .trailer {
      .item {
        width: 295px;
        img {
          width: 295px;
          height: 160px;
        }
        .info {
          padding-top: 10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          white-space: normal;
          overflow: hidden;
        }
      }
    }
    // 标题公共样式
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 20px 11px;
      .text {
        position: relative;
        padding-left: 10px;
        font-size: 18px;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(242, 97, 130, 1) 0%,
            rgba(241, 160, 100, 1) 100%
          );
        }
      }
    }
  }
}
</style>
