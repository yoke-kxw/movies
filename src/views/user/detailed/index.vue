<template>
  <!-- 用户信息 -->
  <div class="detailed wrapper" ref="wrapper">
    <div class="content">
      <!-- 顶部导航栏 -->
      <div class="top">
        <!-- 跳转符号 -->
        <router-link to="/user" tag="div" class="jump">&lt</router-link>
        <!-- 头像 -->
        <div class="personal">
          <!-- 头像 -->
          <img :src="require('@/assets/images/我的_slices/点击查看源网页.png')" alt class="personal-img" />
          <!-- LV等级 -->
          <div class="personal-title">
            <div class="personal-title1">yujia1130</div>
            <div class="personal-title2">
              <img :src="require('@/assets/images/用户信息_slices/会员.png')" alt />
              <div>LV1</div>
            </div>
          </div>
          <!-- 内容介绍 -->
          <div class="personal-content">同学有点懒，还没有写签名</div>
          <!-- 意向 -->
          <div class="personal-intention">
            <div class="personal-intention1">
              <div>想看</div>
              <div>12</div>
            </div>
            <div class="personal-intention1">
              <div>想看</div>
              <div>12</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <!-- 看过电影 -->
      <div class="history">
        <div class="history-title">看过电影</div>
        <ul class="history-film">
          <li class="history-film1">
            <!-- 评分 -->
            <div class="grade">
              <div class="grade1">⭐⭐⭐⭐⭐</div>
              <div class="grade2">9分,很好</div>
            </div>
            <!-- 影片 -->
            <div class="details">
              <img
                :src="require('@/assets/images/用户信息_slices/大表姐CC采集到电影｜海报｜记忆复制 2(1).png')"
                alt
                class="details1"
              />
              <ul class="details2">
                <li class="details2a">后来的我们</li>
                <li class="details2b">剧情</li>
                <li class="details2b">中国/105分钟</li>
                <li class="details2b">购票时间 2017-8-4</li>
              </ul>
            </div>
          </li>
          <li class="history-film1">
            <!-- 评分 -->
            <div class="grade">
              <div class="grade1">⭐⭐⭐⭐⭐</div>
              <div class="grade2">9分,很好</div>
            </div>
            <!-- 影片 -->
            <div class="details">
              <img
                :src="require('@/assets/images/用户信息_slices/大表姐CC采集到电影｜海报｜记忆复制 2(1).png')"
                alt
                class="details1"
              />
              <ul class="details2">
                <li class="details2a">后来的我们</li>
                <li class="details2b">剧情</li>
                <li class="details2b">中国/105分钟</li>
                <li class="details2b">购票时间 2017-8-4</li>
              </ul>
            </div>
          </li>
          <li class="history-film1">
            <!-- 评分 -->
            <div class="grade">
              <div class="grade1">⭐⭐⭐⭐⭐</div>
              <div class="grade2">9分,很好</div>
            </div>
            <!-- 影片 -->
            <div class="details">
              <img
                :src="require('@/assets/images/用户信息_slices/大表姐CC采集到电影｜海报｜记忆复制 2(1).png')"
                alt
                class="details1"
              />
              <ul class="details2">
                <li class="details2a">后来的我们</li>
                <li class="details2b">剧情</li>
                <li class="details2b">中国/105分钟</li>
                <li class="details2b">购票时间 2017-8-4</li>
              </ul>
            </div>
          </li>
          <li class="history-film1">
            <!-- 评分 -->
            <div class="grade">
              <div class="grade1">⭐⭐⭐⭐⭐</div>
              <div class="grade2">9分,很好</div>
            </div>
            <!-- 影片 -->
            <div class="details">
              <img
                :src="require('@/assets/images/用户信息_slices/大表姐CC采集到电影｜海报｜记忆复制 2(1).png')"
                alt
                class="details1"
              />
              <ul class="details2">
                <li class="details2a">后来的我们</li>
                <li class="details2b">剧情</li>
                <li class="details2b">中国/105分钟</li>
                <li class="details2b">购票时间 2017-8-4</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  name: "detailed",
  // 检验是否登录
  beforeRouteEnter(to, from, next) {
    if (to.path == "/detailed") {
      if (localStorage.getItem("user")) {
         next();
      }else {
        alert('请先登录')
        next("/login")
      }
    } else {
      next();
    }
  },
  components: {
    tabBar: () => import("@/components/tabBar")
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
.wrapper {
  width: 100%;
  height: 100%;
  .content {
    height: 1080px;
    //   顶部导航栏
    .top {
      width: 100%;
      height: 277px;
      margin-top: -40px;
      padding-top: 50px;
      background: linear-gradient(
        127deg,
        rgba(242, 98, 131, 1) 0%,
        rgba(241, 163, 99, 1) 100%
      );
      border-radius: 29px;
      // opacity: 0.8996999999999999;
      // 跳转符号
      .jump {
        width: 336px;
        height: 30px;
        margin: 0 auto;
        line-height: 30px;
        color: #ffffff;
        text-align: left;
        font-size: 20px;
        opacity: 0.5;
      }
      // 头像栏
      .personal {
        position: relative;
        width: 336px;
        height: 165px;
        background: rgba(51, 54, 61, 1);
        box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
        border-radius: 17px;
        margin: 60px auto;
        text-align: center;
        padding-top: 40px;
        //   头像
        .personal-img {
          position: absolute;
          top: -36px;
          left: 131px;
          width: 73px;
          height: 73px;
        }
        //   LV等级
        .personal-title {
          width: 140px;
          height: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          .personal-title1 {
            width: 77px;
            height: 25px;
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 25px;
          }
          .personal-title2 {
            width: 50px;
            height: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            border: 1px solid rgba(251, 195, 73, 1);
            img {
              width: 12px;
              height: 12px;
            }
            div {
              width: 17px;
              height: 14px;
              font-size: 10px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(251, 195, 73, 1);
              line-height: 14px;
              margin-left: 5px;
            }
          }
        }
        //   内容介绍
        .personal-content {
          width: 168px;
          height: 20px;
          font-size: 14px;
          margin: 5px auto;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
        }
        //   意向
        .personal-intention {
          width: 280px;
          height: 37px;
          margin: 50px auto 0px;
          display: flex;
          justify-content: space-between;
          .personal-intention1 {
            width: 134px;
            height: 37px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 6px;
            border: 1px solid;
            border-image: linear-gradient(
                139deg,
                rgba(242, 96, 132, 1),
                rgba(241, 159, 100, 1)
              )
              1 1;
          }
        }
      }
    }
    //   看过电影
    .history {
      width: 336px;
      height: 667px;
      margin: 50px auto;
      // 标题
      .history-title {
        width: 72px;
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
      }
      // 影片
      .history-film {
        width: 100%;
        height: 600px;
        .history-film1 {
          height: 150px;
          // 评分
          .grade {
            width: 135px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            .grade1 {
              width: 55px;
              line-height: 30px;
              margin-left: 5px;
              color: #ffa822;
            }
            .grade2 {
              width: 77px;
              height: 30px;
              line-height: 30px;
              font-size: 12px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(251, 195, 74, 1);
              // line-height: 17px;
            }
          }
          // 影片
          .details {
            height: 120px;
            display: flex;
            .details1 {
              width: 94px;
              height: 120px;
              margin-right: 10px;
            }
            .details2 {
              width: 107px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .details2a {
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
              }
              .details2b {
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
}
</style>