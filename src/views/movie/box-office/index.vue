<template>
<!-- 票房 -->
    <div class="box-office">
        <div class="box-head">
            <span @click="$router.go(-1)">&lt;</span>
            <span>设置</span>
            <span></span>
        </div>
        <!-- 排行 -->
        <div class="ranking">
            <div class="ranking-item">
                <p></p>
                <p>2</p>
                <span>今日票房排行</span>
            </div>
            <div class="ranking-item">
                <p></p>
                <p>暂无</p>
                <span>首周票房(万)</span>
            </div>
            <div class="ranking-item">
                <p></p>
                <p>2</p>
                <span>总票房排行</span>
            </div>
        </div>
           <!-- 分割线 -->
        <div class="line-bottom"></div>
        <div class="total-rank">
            <p>总票房</p>
            <div class="area-rank">
                <span>地区</span>
                <span>每周末票房</span>
                <span>总票房</span>
            </div>
            <div class="area-rank">
                <span>中国</span>
                <span>暂无数据</span>
                <span>501万元</span>
            </div>
        </div>
        <!-- 分割线 -->
        <div class="line-bottom"></div>
        <!-- 票房明细 -->
        <div class="rank-detail">
            <div class="detail-title">
                <p>日票房明细</p>
                <span>单位:万元</span>
            </div>
            <div class="rank-date">
                <span>日期</span>
                <span>当日票房</span>
                <span>票房占比</span>
                <span>拍片占比</span>
                <span>场次人次</span>
            </div>
            <div class="rank-percent">
                <div class="rank-sign-on">
                    <p>2018-05-18</p>
                    <p>周六上映首日</p>
                </div>
                <span>586.3</span>
                <span>8.5%</span>
                <span>23%</span>
                <span>3</span>
            </div>
            <div class="rank-percent">
                <div>
                    <p>2018-05-15</p>
                    <p>周五零点场</p>
                </div>
                <span>--</span>
                <span>--</span>
                <span>0.0%</span>
                <span>0</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:"BoxOffice"
    }
</script>

<style lang="scss" scoped>
        .box-office{
            width: 100%;
            .box-head{
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
            .ranking{
                width: 100%;
                height: 100px;
                box-sizing: border-box;
                padding: 0 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .ranking-item{
                    width: 80px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    // align-content: space-around;
                    // justify-items: center;
                    text-align: center;
                    p{
                        font-size:18px;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:#FBC34A;
                        line-height:18px;
                    }
                    
                    span{
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,0.5);
                        line-height:17px;
                    }
                    &:nth-child(2) p:nth-child(2){
                        color: #fff;
                    }
                }
            }
            .line-bottom{
                width: 100%;
                height:6px;
                background:#33363D;
            }
            .total-rank{
                width: 100%;
                height: 130px;
                box-sizing: border-box;
                padding: 0 20px;
                display: flex;
                flex-direction:column;
                justify-content: space-around;
                p{
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:18px;
                }
                .area-rank{
                    display: flex;
                    justify-content: space-between;
                   
                }
                .area-rank:nth-child(2) span{
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,0.4);
                        line-height:12px;
                    }
               .area-rank:nth-child(3) span{
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,0.8);
                        line-height:12px;
                    }

            }
            .rank-detail{
                width: 100%;
                box-sizing: border-box;
                padding: 0px 20px;
                .detail-title{
                    width: 100%;
                    padding-top:20px;
                    display: flex;
                    justify-content: space-between;
                    p{
                        font-size:16px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:18px;
                    }
                    span{
                        height:12px;
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,0.5);
                        line-height:12px;
                    }
                }
                .rank-date{
                    width: 100%;
                    padding-top:20px;
                    display: flex;
                    justify-content: space-between;
                    span{
                        width: 50px;
                         height:12px;
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,0.5);
                        line-height:12px;
                    }
                 span:nth-child(1){
                    //  display: inline-block;
                        width: 100px;
                    }
                }
                .rank-percent{
                    width: 100%;
                    padding-top:20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size:12px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,0.5);
                    line-height:12px;
                    div{
                        width: 100px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    span{
                        width: 50px;
                    }
                    .rank-sign-on p:nth-child(1){
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(192,18,18,1);
                        line-height:18px;
                    }
                    .rank-sign-on p:nth-child(2){
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:#FBC34A;
                        line-height:18px;
                    }
                }
            }
        }
</style>