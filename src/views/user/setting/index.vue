<template>
<!-- 设置页面 -->
    <div class="setting">
        <div class="set-head">
            <span @click="$router.go(-1)">&lt;</span>
            <span>设置</span>
            <span></span>
        </div>
        <div class="user-img">
            <span></span>
            <dl>
                <dt>
                    <img src="~@/assets/images/我的_slices/点击查看源网页.png" alt="">
                </dt>
                <dd>哈哈哈哈</dd>
            </dl>
            <div class="account">
                <span>账户与安全</span>
                <span>手机更换与绑定 &gt;</span>
            </div>
        </div>
        <!-- 分割线 -->
        <div class="line-bottom"></div>
        <div class="msg-switch">
             <div class="account">
                <span>被赞提醒</span>
               <div class="a-switch" @click="isCheck(0)">
                   <div class="round"></div>
               </div>
            </div>
            <div class="account">
                <span>影评/话题提醒</span>
               <div class="a-switch" @click="isCheck(1)">
                   <div class="round"></div>
               </div>
            </div>
            <div class="account">
                <span>推送通知</span>
               <div class="a-switch" @click="isCheck(2)">
                   <div class="round"></div>
               </div>
            </div>
            <div class="account">
                <span>系统通知</span>
               <div class="a-switch" @click="isCheck(3)">
                   <div class="round"></div>
               </div>
            </div>
        </div>
        <!-- 分割线 -->
        <div class="line-bottom"></div>
        <div class="about-app">
            <div class="account">
                <span>关于</span>
                <span> &gt;</span>
            </div>
            <div class="log-out" @click="clearInfo">退出登录</div>

        </div>
    </div>
</template>

<script>
    var  aswitch = document.getElementsByClassName("a-switch");

    export default {
        name:"setting",
        data(){
            return{
            }
        },
        methods:{
            isCheck(index){
                if(aswitch[index].classList.contains('active')){
                    aswitch[index].classList.remove("active");
                    aswitch[index].children.style="left:0";
                }else{
                     aswitch[index].classList.add("active");
                    aswitch[index].children.style="right:0";
                }
            },
            //清除本地数据
            clearInfo(){
                localStorage.clear();
                console.log("已清除数据,退出登录")
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.setting{
    .set-head{
        width: 100%;
        height: 44px;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:nth-child(2){
            font-size: 16px;
        }
    }
    .user-img{
        width: 100%;
        height: 250px;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .account{
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        dl{
            text-align: center;
            dd{
                margin: 10px 0;
            }
        }
         span:nth-child(2) {
            opacity: .6;
        }
    }
    .line-bottom{
        width: 100%;
        height:6px;
        background:#33363D;
    }
    .msg-switch{
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        // align-items: center;
        .account{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            .a-switch{
                position: relative;
                width:40px;
                height:20px;
                border-radius:12px;
                background-color: #fff;
                .round{
                    position: absolute;
                    top: 0;
                    left:0;
                    right: auto;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #fff;
                    box-shadow:0px 0px 6px #000;
                    transition: all .4s ease;
                }
            }
            .active{
                background:linear-gradient(135deg,rgba(242,93,133,1) 0%,rgba(242,165,98,1) 100%);
                .round{
                    position: absolute;
                    top: 0;
                    left:auto;
                    right:0;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #fff;
                    box-shadow:0px 0px 6px #000;
                    transition: all .4s ease;
                }
            }
        }
    }
    .about-app{
       width: 100%;
        height: 150px;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        .account{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
        }
        .log-out{
            width:100%;
            height:40px;
            margin:20px 0;
            text-align: center;
            line-height: 40px;
            background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
            box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
            border-radius:6px;
        }
    }
}


</style>