<template>
  <div class="pages-main">
    <div class="content-main">
      <div class="content-main-c">
        <div class="content-item" v-for="item in list" :key="item.id">
          <div class="content-item-img">
            <img :src="item.bigImg" alt="" />
            <a href="https://www.baidu.com">
              <img :src="item.smallImg" alt="" />
            </a>
          </div>
          <div class="content-item-text">
            <h2>{{ item.oneTitle }}</h2>
            <h3>
              {{ item.twoTitle }} <i>{{ item.score }}</i>
            </h3>
            <h4>{{ item.director }}</h4>
            <h4>{{ item.starring }}</h4>
            <span>{{ item.dayHot }}</span>
            <h5>{{ item.weekHot }}</h5>
          </div>
          <div class="content-item-ticket">
            <a href="https://www.baidu.com">{{ item.theTicket }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "childpage",
  data() {
    return {
      list: [],
      imgs: [
        {
          bigImg: require("@/assets/images/电影详情_slices/傲慢与偏见.png"),
          smallImg: require("@/assets/images/电影正在热映_slices/编组 9.png")
        }
      ]
    };
  },
  methods: {
    init() {
      for (var i = 0; i < 10; i++) {
        var obj = {
          bigImg: this.imgs[0].bigImg,
          smallImg: this.imgs[0].smallImg,
          oneTitle: "傲慢与偏见",
          twoTitle: "萤火虫评分",
          score: 9.1,
          director: "导演:文木",
          starring: "主演:赞恩.拉菲亚",
          dayHot: "今日热点",
          weekHot: "一周最热",
          theTicket: "购票",
          id: i++
        };
        this.list.push(obj);
      }
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.content-main {
  .content-main-c {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #22262d;
    padding-bottom: 100px;
    padding-top: 45px;
    .content-item {
      width: 340px;
      height: 146px;
      margin: 0 auto;
      background: #33363d;
      border-radius: 10px;
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .content-item-img {
        width: 105px;
        height: 160px;
        transform: translate(-5px, -5px);
        position: relative;

        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 22%;
        }
        a {
          position: absolute;
          top: 30%;
          left: 35%;
          width: 38px;
          height: 38px;
          &.img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .content-item-text {
        margin-left: -70px;
        h2 {
          font-size: 18px;
          color: #f5f5f5;
          transform: translateY(-10px);
          font-weight: normal;
        }
        h3 {
          font-size: 16px;
          color: #dfdfdf;
          margin: 8px 0;
          font-weight: normal;
          i {
            font-style: normal;
            color: orange;
          }
        }
        h4 {
          font-size: 12px;
          color: #cacacb;
          line-height: 18px;
        }
        span {
          display: inline-block;
          width: 51px;
          height: 21px;
          border: 1px solid orange;
          border-radius: 5px;
          font-size: 10px;
          line-height: 21px;
          text-align: center;
          color: orange;
          margin-top: 8px;
        }
        h5 {
          display: inline-block;
          width: 51px;
          height: 21px;
          border-radius: 5px;
          font-size: 10px;
          line-height: 21px;
          text-align: center;
          margin-top: 8px;
          border: 1px solid red;
          color: red;
        }
      }
      .content-item-ticket {
        width: 54px;
        height: 25px;
        transform: translateX(-15px);
        a {
          display: block;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f26a7e, #f1a163);
          font-size: 12px;
          line-height: 25px;
          text-align: center;
          color: #f5f5f5;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
