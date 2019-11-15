<template>
  <div class="coming">
    <p class="title">热门预告片</p>
    <ul class="trailer-list oneline">
      <li class="item playbutton" v-for="item in trailerList" :key="item.id">
        <img :src="imgUrl(item.img)" alt />
        <p class="info">{{ item.info}}</p>
        <p class="duration">{{ item.duration}}</p>
      </li>
    </ul>
    <p class="title">即将上映</p>
    <ul class="coming-date-list oneline">
      <li
        class="item"
        :class="[nowDay===index?'active':'']"
        v-for="(item,index) in comingList"
        :key="item.date"
        @click="nowDay=index"
      >{{ item.date }}</li>
    </ul>
    <movieList :list="nowList" type="coming"></movieList>
  </div>
</template>

<script>
export default {
  name: "coming",
  components: {
    movieList: () => import("@/components/movieList")
  },
  data() {
    return {
      nowDay: 0,
      trailerList: [
        {
          id: Math.random(),
          img: "banner-01.png",
          info: "变身时尚达人。。。。。。。。",
          duration: "02:12"
        },
        {
          id: Math.random(),
          img: "banner-02.png",
          info: "变身时尚达人。。。。。。。。",
          duration: "02:20"
        }
      ],
      comingList: [
        {
          date: "11月9日",
          list: [
            {
              id: Math.random(),
              title: "大鱼海棠9日1",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠9日2",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠9日3",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            }
          ]
        },
        {
          date: "11月10日",
          list: [
            {
              id: Math.random(),
              title: "大鱼海棠10日1",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠10日2",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠10日3",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            }
          ]
        },
        {
          date: "11月11日",
          list: [
            {
              id: Math.random(),
              title: "大鱼海棠11日1",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠11日2",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠11日3",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            }
          ]
        },
        {
          date: "11月12日",
          list: [
            {
              id: Math.random(),
              title: "大鱼海棠12日1",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠12日2",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠12日3",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            }
          ]
        },
        {
          date: "11月13日",
          list: [
            {
              id: Math.random(),
              title: "大鱼海棠13日1",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠13日2",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            },
            {
              id: Math.random(),
              title: "大鱼海棠13日3",
              img: "hot-01.png",
              director: ["梁旋", "季冠霖"],
              duration: "105分钟",
              genre: ["动画", "奇幻"],
              want: "16.4万"
            }
          ]
        }
      ]
    };
  },
  computed: {
    nowList() {
      return this.comingList[this.nowDay].list;
    }
  },
  methods: {
    imgUrl(name) {
      return require(`@/assets/imgs/movie/${name}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.coming {
  .title {
    padding: 30px 0 20px 20px;
    font-size: 18px;
  }
  .trailer-list {
    .item {
      position: relative;
      width: 318px;
      font-size: 12px;
      img {
        width: 100%;
      }
      .info {
        position: absolute;
        bottom: 15px;
        left: 25px;
      }
      .duration {
        font-size: 12px;
        position: absolute;
        bottom: 15px;
        right: 5px;
      }
    }
  }
  .coming-date-list {
    .item {
      width: 82px;
      font-size: 14px;
      line-height: 24px;
      border-radius: 12px;
      border: 2px solid #979797;
      text-align: center;
      &.active {
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 10px 0px rgba(242, 109, 125, 0.4);
        border-color: transparent;
      }
    }
  }
}
</style>