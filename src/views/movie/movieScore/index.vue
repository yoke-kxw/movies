<template>
  <div class="wrapper" ref="wrapper">
    <div class="movie-score">
      <div class="back-image"></div>
      <!-- 头部 -->
      <div class="topbar">
        <img @click="$router.go(-1)" src="@/assets/images/影评_slices/arrowl.png" alt />
        <span>电影评分</span>
        <img src="@/assets/images/签到_slices/分 享.png" alt />
      </div>
      <!-- 评分区间 -->
      <div class="score-range">
        <div class="range-title">
          <h3>《傲慢与偏见》</h3>
          <div class="point-star">
            <img src="@/assets/images/电影详情_slices/星复制 2.png" alt />
            <img src="@/assets/images/电影详情_slices/星复制 2.png" alt />
            <img src="@/assets/images/电影详情_slices/星复制 2.png" alt />
            <img src="@/assets/images/电影详情_slices/星复制 2.png" alt />
            <img src="@/assets/images/电影详情_slices/星复制 2.png" alt />
            <span>9.0</span>
          </div>
          <p>28.5万人评分</p>
        </div>
        <div class="range-bar">
          <ul class="linebar-items">
            <li class="linebar-item">
              <p>56.4%</p>
              <p></p>
              <p>9-10分</p>
            </li>
            <li class="linebar-item">
              <p>29.4%</p>
              <p></p>
              <p>8-9分</p>
            </li>
            <li class="linebar-item">
              <p>12.3%</p>
              <p></p>
              <p>7-8分</p>
            </li>
            <li class="linebar-item">
              <p>1.1%</p>
              <p></p>
              <p>6-7分</p>
            </li>
            <li class="linebar-item">
              <p>0.8%</p>
              <p></p>
              <p>0-6分</p>
            </li>
          </ul>
          <div class="linebar-foot">
            <p>以上数据实时更新</p>
          </div>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="split-line"></div>
      <!-- 观众区间 -->
      <div class="viewer-range">
        <div class="viewer-title">观众评分画像</div>
        <!-- 性别评分 -->
        <div class="sex-range">
          <div class="item-point man">
            <img src="@/assets/images/电影评分_slices/男.png" alt />
            <p>男性观众</p>
            <p>8.4分</p>
          </div>
          <span>VS</span>
          <div class="item-point woman">
            <img src="@/assets/images/电影评分_slices/女.png" alt />
            <p>女性观众</p>
            <p>8.6分</p>
          </div>
        </div>
        <!-- 年龄评分 -->
        <ul class="age-range">
          <li class="age-linebar">
            <p>95后</p>
            <p></p>
            <p>8.7分</p>
          </li>
          <li class="age-linebar">
            <p>90后</p>
            <p></p>
            <p>8.4分</p>
          </li>
          <li class="age-linebar">
            <p>80后</p>
            <p></p>
            <p>8.2分</p>
          </li>
          <li class="age-linebar">
            <p>70后</p>
            <p></p>
            <p>8.5分</p>
          </li>
        </ul>
        <div class="linebar-foot">
          <p>·以上数据，每30分钟更新一次</p>
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
        methods: {
            
        },
        mounted() {
            this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {click:true});
           
            });
        }
    };
</script>

<style lang='scss' scoped>
.wrapper{
    height: 667px;
}
.movie-score {
  overflow: hidden;
  .back-image {
    // position: relative;
    height: 215px;
    width: 100%;
    background: url("~@/assets/images/电影详情_slices/《傲慢与偏见》.png")
      no-repeat top;
    background-color: #23262d;
    opacity: 0.2;
    position: absolute;
    top: 0;
    z-index: 2;
  }
  .topbar {
    margin-top: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    img{
      z-index: 55;
    }
  }
  //  评分区间样式
  .score-range {
    overflow: hidden;
    .range-title {
      margin-top: 47px;
      text-align: center;
      h3 {
        font-size: 18px;
        color: #ffffff;
      }
      .point-star {
        display: flex;
        align-items: center;
        //   justify-items: center;
        justify-content: center;
        img {
          height: 8px;
          width: 8px;
          margin-right: 3px;
        }
        span {
          font-size: 22px;
          line-height: 30px;
          color: #fbc34a;
        }
      }
      p {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
      }
    }
    .range-bar {
      margin-top: 25px;
      .linebar-items {
        padding: 0 69px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .linebar-item {
          font-size: 12px;
          text-align: center;
          p:nth-child(1) {
            color: #fbc34a;
          }
          p:nth-child(2) {
            margin: 5px auto 10px;
            height: 135px;
            width: 22px;
            border-radius: 5px;
            background: linear-gradient(
              180deg,
              rgba(241, 162, 99, 1) 0%,
              rgba(242, 94, 132, 1) 100%
            );
          }
          p:nth-child(3) {
            color: rgba(255, 255, 255, 0.55);
          }
        }
        .linebar-item:nth-child(2) {
          p:nth-child(2) {
            height: 98px;
          }
        }
        .linebar-item:nth-child(3) {
          p:nth-child(2) {
            height: 49px;
          }
        }
        .linebar-item:nth-child(4) {
          p:nth-child(2) {
            height: 25px;
          }
        }
        .linebar-item:nth-child(5) {
          p:nth-child(2) {
            height: 17px;
          }
        }
      }
    }
  }
  //   分割线
  .split-line {
    width: 100%;
    height: 6px;
    margin: 15px 0 20px;
    background-color: #33363d;
  }
  // 观众评分区间
  .viewer-range {
    margin-bottom: 30px;
    padding: 0 28px;
    .viewer-title {
      text-align: center;
      margin-bottom: 20px;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
    }
    // 性别评分样式
    .sex-range {
      margin-bottom: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #ffffff;
        font-size: 16px;
      }
      .item-point {
        width: 138px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: #33363d;
        p:nth-child(3) {
          color: #fbc34a;
          font-size: 12px;
        }
      }
    }
    //年龄评分样式
    .age-range {
      .age-linebar {
        display: flex;
        font-size: 14px;
        margin-bottom: 24px;
        p:nth-child(1) {
          color: rgba(255, 255, 255, 0.55);
        }
        p:nth-child(2) {
          width: 135px;
          height: 12px;
          border-radius: 5px;
          margin: 0 10px 0 20px;
          background: linear-gradient(
            180deg,
            rgba(241, 162, 99, 1) 0%,
            rgba(242, 94, 132, 1) 100%
          );
        }
        p:nth-child(3) {
          color: #fbc34a;
        }
      }
      .age-linebar:nth-child(2) {
        p:nth-child(2) {
          width: 126px;
        }
      }
      .age-linebar:nth-child(3) {
        p:nth-child(2) {
          width: 110px;
        }
      }
      .age-linebar:nth-child(4) {
        margin-bottom: 0;
        p:nth-child(2) {
          width: 117px;
        }
      }
    }
  }
  //   通用foot样式
  .linebar-foot {
    margin-top: 16px;
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
    line-height: 17px;
    text-align: center;
  }
}
</style>