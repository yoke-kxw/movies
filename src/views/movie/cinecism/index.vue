<template>
<div class="wrapper" ref="wrapper">
  <div class="cinecism">
    <!-- 头部 -->
    <div class="topbar">
      <img @click="$router.go(-1)" src="@/assets/images/影评_slices/arrowl.png" alt />
      <img src="@/assets/images/签到_slices/分 享.png" alt />
    </div>
    <!-- 内容区 -->
    <div class="content">
      <ul class="detail-nav">
        <li>简介</li>
        <li>影评</li>
        <li>讨论</li>
        <li>更多</li>
      </ul>
      <!-- 小标签 -->
      <div class="viewer">
        <div class="viewer-bar">
          <span>观众热评</span>
          <span>写影评</span>
        </div>
        <ul class="viewer-tag">
          <li>全部</li>
          <li>最新</li>
          <li>
            陪伴是最长情的告白
            <span>1902</span>
          </li>
          <li>
            爱狗人士必看
            <span>1902</span>
          </li>
          <li>
            好评
            <span>1902</span>
          </li>
          <li>
            差评
            <span>69</span>
          </li>
          <li>
            点映
            <span>1902</span>
          </li>
          <li>
            购票
            <span>1902</span>
          </li>
          <li>
            影评达人
            <span>1902</span>
          </li>
          <li>
            同城
            <span>1902</span>
          </li>
        </ul>
        <div class="arrow">
          <img src="@/assets/images/首页_slices/下 箭头.png" alt />
        </div>
      </div>
      <!-- 详细影评区 -->
      <ul class="comments"> 
        <li class="comment-item">
          <!-- 头像和评分 -->
          <div class="item-head">
            <div class="user-info">
              <div class="avatar">
                <img src="@/assets/images/影评_slices/点击查看源网页.png" alt />
              </div>
              <div class="user-point">
                <p>石原里美</p>
                <div class="user-star">
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/半星.png" alt />
                  <span>9.0</span>
                </div>
              </div>
            </div>
            <div class="info-more">
              <img src="@/assets/images/影评_slices/更多.png" alt />
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="item-text">
            <p>2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…</p>
          </div>
          <!-- 评论详情底部 -->
          <div class="item-foot">
            <div class="itemfoot-left">
              <p>05-17 9:34</p>
            </div>
            <ul class="itemfoot-right">
              <li>
                <img src="@/assets/images/影评_slices/点赞.png" alt />
                <span>56</span>
              </li>
              <li>
                <img src="@/assets/images/影评_slices/评论.png" alt />
                <span>1</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="comment-item">
          <!-- 头像和评分 -->
          <div class="item-head">
            <div class="user-info">
              <div class="avatar">
                <img src="@/assets/images/影评_slices/点击查看源网页(1).png" alt />
              </div>
              <div class="user-point">
                <p>十元</p>
                <div class="user-star">
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/半星.png" alt />
                  <span>9.0</span>
                </div>
              </div>
            </div>
            <div class="info-more">
              <img src="@/assets/images/影评_slices/更多.png" alt />
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="item-text">
            <p>2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…</p>
          </div>
          <!-- 评论详情底部 -->
          <div class="item-foot">
            <div class="itemfoot-left">
              <p>05-17 9:34</p>
            </div>
            <ul class="itemfoot-right">
              <li>
                <img src="@/assets/images/影评_slices/点赞.png" alt />
                <span>56</span>
              </li>
              <li>
                <img src="@/assets/images/影评_slices/评论.png" alt />
                <span>1</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="comment-item">
          <!-- 头像和评分 -->
          <div class="item-head">
            <div class="user-info">
              <div class="avatar">
                <img src="@/assets/images/影评_slices/点击查看源网页(2).png" alt />
              </div>
              <div class="user-point">
                <p>拾圆</p>
                <div class="user-star">
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/五角星.png" alt />
                  <img src="@/assets/images/影评_slices/半星.png" alt />
                  <span>9.0</span>
                </div>
              </div>
            </div>
            <div class="info-more">
              <img src="@/assets/images/影评_slices/更多.png" alt />
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="item-text">
            <p>2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…</p>
          </div>
          <!-- 评论详情底部 -->
          <div class="item-foot">
            <div class="itemfoot-left">
              <p>05-17 9:34</p>
            </div>
            <ul class="itemfoot-right">
              <li>
                <img src="@/assets/images/影评_slices/点赞.png" alt />
                <span>56</span>
              </li>
              <li>
                <img src="@/assets/images/影评_slices/评论.png" alt />
                <span>1</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- button按钮 -->
    <div class="bottom-btn" @click="$router.push('/chooseseat')">
      特惠选座
    </div>
  </div>
</div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){
    this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, { click: true });
        });
  }
};
</script>

<style lang='scss' scoped>
.wrapper{
  height: 675px;
}
.cinecism {
  overflow: hidden;
  .topbar {
    height: 20px;
    margin-top: 25px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    padding: 0 20px;
    // 影评标题
    .detail-nav {
      margin-top: 24px;
      display: flex;
      color: #ffffff;
      font-size: 14px;
      li {
        margin-right: 27px;
      }
    }
    // 观众热评
    .viewer {
      margin-top: 30px;
      .viewer-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        span:nth-child(1) {
          font-size: 18px;
        }
        span:nth-child(2) {
          height: 25px;
          width: 54px;
          text-align: center;
          line-height: 25px;
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          border-radius: 13px;
        }
      }
      // 小标签样式
      .viewer-tag {
        margin-top: 24px;
        width: 300px;
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        li {
          height: 22px;
          padding: 3px 10px 2px;
          margin-right: 14px;
          margin-bottom: 15px;
          line-height: 22px;
          border-radius: 9.5px;
          background-color: #33363d;
          text-align: center;
          span {
            font-size: 10px;
            color: rgba(255, 255, 255, 0.5);
          }
        }
        li:nth-child(3) {
          background: url("~@/assets/images/影评_slices/矩形复制 2.png")
            no-repeat center;
          background-size: 149px 22px;
        }
        li:nth-child(4) {
          background: url("~@/assets/images/影评_slices/矩形复制 2.png")
            no-repeat center;
          background-size: 112px 22px;
        }
      }
      .arrow {
        width: 100%;
        img {
          margin: 0 auto;
          display: block;
        }
      }
    }
    //详细影评样式
    .comments {
      margin-top: 35px;
      .comment-item {
        margin-bottom: 25px;
        .item-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .user-info {
            display: flex;
            align-items: center;
            .avatar {
              margin-right: 14px;
              img{
                width: 50px;
                height: 50px;
              }
            }
            .user-point {
              p {
                margin-bottom: 10px;
              }
              .user-star {
                img {
                  margin-right: 4px;
                }
              }
            }
          }
        }
        .item-text {
          margin-top: 8px;
          font-size: 12px;
          color: #ffffff;
          line-height: 18px;
        }
        .item-foot {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          align-items: center;
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          line-height: 17px;
          .itemfoot-right {
            display: flex;
            align-items: center;
            li {
              margin-right: 11px;
              display: flex;
              align-items: center;
              img {
                margin-right: 6px;
              }
            }
          }
        }
      }
    }
  }
  .bottom-btn{
    height: 48px;
    width: 100%;
    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
    color: #FFFFFF;
    font-size: 18px;
    text-align: center;
    line-height: 48px;
  }
}
</style>