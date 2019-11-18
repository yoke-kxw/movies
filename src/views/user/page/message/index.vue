<template>
  <div class="message-wrapper" ref="wrapper">
    <div class="message-content">
      <!-- 头部消息中心 -->
      <header>
        <span @click="$router.go(-1)"></span>
        <p>消息中心</p>
        <span></span>
      </header>

      <!-- 消息中心下边 -->
      <ul class="header-sub">
        <li>
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>系统通知</p>
              <p>哈皮巴斯得! 祝你生日快乐!</p>
            </div>
          </div>

          <p>1个月前</p>
        </li>
        <li>
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>赞 <div class="space"></div></p>
              <p>一个赞都不给我!</p>
            </div>
          </div>

          <p>1个月前</p>
        </li>

        <li>
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>评论 <div class="space"></div></p>
              <p>暂时还没有收到评论</p>
            </div>
          </div>

          <p>1个月前</p>
        </li>
      </ul>






      <!-- 全部私信 -->
    <p class="private">全部私信</p>

            <ul class="header-sub  private-letter">
        <li @click="$router.push('/talk')">
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>Zeng Wen</p>
              <p>暂时还没有收到评论</p>
            </div>
          </div>

          <p>
              1个月前
              <span class="little-round">1</span>
          </p>


        </li>


               <li @click="$router.push('/talk')">
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>Chikelu Obasea</p>
              <p>暂时还没有收到评论</p>
            </div>
          </div>

          <p>
              1个月前
              <span class="little-round">1</span>
          </p>


        </li>

        <li @click="$router.push('/talk')">
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>Kimmy McIlmorie</p>
              <p>暂时还没有收到评论</p>
            </div>
          </div>

          <p>
              1个月前
              <span class="little-round">3</span>
          </p>


        </li @click="$router.push('/talk')">

                <li>
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>Xu Jianhong</p>
              <p>暂时还没有收到评论</p>
            </div>
          </div>

          <p>
              1个月前
              <span class="little-round">4</span>
          </p>


        </li>

                <li  @click="$router.push('/talk')">
          <div>
            <span>
              <b></b>
            </span>

            <div>
              <p>Kung Jiyeon</p>
              <p>暂时还没有收到评论</p>
            </div>
          </div>

          <p>
              1个月前
              <span class="little-round">1</span>
          </p>


        </li>


      </ul>

    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "Message", // 消息页面
 // 检验是否登录
  beforeRouteEnter(to, from, next) {
    if (to.path == "/user/message") {
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
  mounted() {
    this.$nextTick(() => {
      // 因为获取页面数据一般是异步的, 所以用$nextTick异步执行
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  }
};
</script>




<style lang="scss" scoped>
.message-wrapper {
  width: 100%;
  height: 667px;

  .message-content {
    width: 100%;
    height: 688px;
    color: #fff;
    font-size: 12px;

    // 头部
    header {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      align-items: center;

      span {
        width: 32px;
        height: 32px;
      }

      span:nth-child(1) {
        background: url(~./imgs/arr_left.png) no-repeat
          center;
        box-sizing: content-box;
        margin-left: 20px;
      }
    }

    // 消息中心下边

    .header-sub {
      width: 100%;
      height: 230px;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;

      li {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        padding: 0 10px;

        div {
          width: 80%;
          display: flex;

          span {
            display: block;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #f9c34a;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;

            b {
              width: 22px;
              height: 23px;
              background: url(~./imgs/notice.png);
            }
          }

          div {
            width: 53%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            p {
              opacity: 0.6;
              padding-top: 0;
            }

            p:first-child {
              font-size: 14px;
              opacity: 1;
            }
          }
        }
        p {
          box-sizing: border-box;
          padding-top: 20px;
          opacity: 0.6;
        }
      }

      li:nth-child(2) {
        span {
          background-color: #ef8833;

          b {
            width: 25px;
            height: 25px;
            background: url(~./imgs/like.png);
          }
        }
      }

      li:nth-child(3) {
        span {
          background-color: #6548a9;
          b {
              width: 24px;
              height: 24px;
            background: url(~./imgs/comment.png);
          }
        }
      }
    }


    // 全部私信

    .private{
        font-size: 16px;
        text-indent: 1em;
        margin: 10px 0;
    }


    .private-letter{
        height: 190px;
        li{
            div{
                span{
                background: url(~./imgs/user1.png) no-repeat center;
                                    background-size: contain;

                b{
                    opacity: 0;
                }
            }

                div{
                    p:first-child{
                        color: #f9c34a;
                        font-size: 13px;
                    }
                }
            }

            p{
                box-sizing: border-box;
                padding-top: 0;
                // position: relative;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: flex-end;


                span{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    background-color: #f9c34a;
                    margin-top: 6px;
                    color: #fff;
                }
            }
            
        }

        li:nth-child(2){
            div{
                span{
                    background: url(~./imgs/user2.png) no-repeat center;
                                        background-size: contain;

                }
            }
        }

          li:nth-child(3){
            div{
                span{
                    background: url(~./imgs/user3.png) no-repeat center;
                                        background-size: contain;

                }
            }
        }

          li:nth-child(4){
            div{
                span{
                    background: url(~./imgs/user4.png) no-repeat center;
                                        background-size: contain;

                }
            }
        }

          li:nth-child(5){
            div{
                span{
                    background: url(~./imgs/user5.png) no-repeat center;
                                        background-size: contain;

                }
            }
        }
    }
  }
}
</style>