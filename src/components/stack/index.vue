<template>
    <ul class="stack">
      <li class="stack-item" v-for="(item, index) in pages"
      :key="index"
      :style="[transformIndex(index),transform(index)]"
      @touchmove.stop.capture="touchmove"
      @touchstart.stop.capture="touchstart"
      @touchend.stop.capture="touchend"
      @mousedown.stop.capture="touchstart"
      @mouseup.stop.capture="touchend"
      @mousemove.stop.capture="touchmove"
      @webkit-transition-end="onTransitionEnd"
      @transitionend="onTransitionEnd"
      >
        <img :src="item.src">
        <div class="stack-txt">
            <p>{{item.title}}</p>
        </div>
           <div  class="stack-icon">
              <img :src="icon">
              <span>5s</span>
           </div>
      </li>
      <li class="stack-item-last">
       <p>已经到底了~</p> </li>
    </ul>
</template>
<script>
import icon from "@/assets/images/签到_slices/喇叭.png"
export default {
  props: {
    // pages数据包含基础的图片数据
    pages: {
      type: Array,
      default: []
    },
  },
  data () {
    return {
      icon:icon,
      // basicdata数据包含组件基本数据
      basicdata: {
        start: {}, // 记录起始位置
        end: {}, // 记录终点位置
        currentPage: 0 // 默认首图的序列
      },
      // temporaryData数据包含组件临时数据
      temporaryData: {
        poswidth: '', // 记录位移
        posheight: '', // 记录位移
        lastPosWidth: '', // 记录上次最终位移
        lastPosHeight: '', // 记录上次最终位移
        tracking: false, // 是否在滑动，防止多次操作，影响体验
        animation: false, // 首图是否启用动画效果，默认为否
        opacity: 1, // 记录首图透明度
        swipe: false ,// onTransition判定条件,
      }
    }
  },
  methods: {
    touchstart (e) {
      if (this.temporaryData.tracking) {
        return
      }
      // 是否为touch
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.temporaryData.tracking = false
          return
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime()
          this.basicdata.start.x = e.targetTouches[0].clientX
          this.basicdata.start.y = e.targetTouches[0].clientY
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
        }
      // pc操作
      } else {
        this.basicdata.start.t = new Date().getTime()
        this.basicdata.start.x = e.clientX
        this.basicdata.start.y = e.clientY
        this.basicdata.end.x = e.clientX
        this.basicdata.end.y = e.clientY
      }
      this.temporaryData.tracking = true
      this.temporaryData.animation = false
    },
    touchmove (e) {
      // 记录滑动位置
      if (this.temporaryData.tracking && !this.temporaryData.animation) {
        if (e.type === 'touchmove') {
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
        } else {
          this.basicdata.end.x = e.clientX
          this.basicdata.end.y = e.clientY
        }
        // 计算滑动值
        this.temporaryData.poswidth = this.basicdata.end.x - this.basicdata.start.x
        this.temporaryData.posheight = this.basicdata.end.y - this.basicdata.start.y
      }
    },
    touchend (e) {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 滑动结束，触发判断
      // 简单判断滑动宽度超出100像素时触发滑出
      if (Math.abs(this.temporaryData.poswidth) >= 100) {
        // 最终位移简单设定为x轴200像素的偏移
        let ratio = Math.abs(this.temporaryData.posheight / this.temporaryData.poswidth)
        this.temporaryData.poswidth = this.temporaryData.poswidth >= 0 ? this.temporaryData.poswidth + 200 : this.temporaryData.poswidth - 200
        this.temporaryData.posheight = this.temporaryData.posheight >= 0 ? Math.abs(this.temporaryData.poswidth * ratio) : -Math.abs(this.temporaryData.poswidth * ratio)
        this.temporaryData.opacity = 0
        this.temporaryData.swipe = true
        // 记录最终滑动距离
        this.temporaryData.lastPosWidth = this.temporaryData.poswidth
        this.temporaryData.lastPosHeight = this.temporaryData.posheight
        // currentPage+1 引发排序变化
        this.basicdata.currentPage += 1
        // currentPage切换，整体dom进行变化，把第一层滑动置零
        this.$nextTick(() => {
          this.temporaryData.poswidth = 0
          this.temporaryData.posheight = 0
          this.temporaryData.opacity = 1
        })
      // 不满足条件则滑入
      } else {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.swipe = false
      }
    },
    onTransitionEnd (index) {
      // dom发生变化后，正在执行的动画滑动序列已经变为上一层
      if (this.temporaryData.swipe && index === this.basicdata.currentPage - 1) {
        this.temporaryData.animation = true
        this.temporaryData.lastPosWidth = 0
        this.temporaryData.lastPosHeight = 0
        this.temporaryData.swipe = false
      }
    },
    // 非首页样式切换
    transform (index) {
      if (index > this.basicdata.currentPage) {
        let style = {}
        let visible = 3;
        let perIndex = index - this.basicdata.currentPage
        // visible可见数量前滑块的样式
        if (index <= this.basicdata.currentPage + visible - 1) {
          style['opacity'] = '1'
          style['transform'] = 'translate3D(0,0,' + -1 * perIndex * 60 + 'px' + ')'
          style['zIndex'] = visible - index + this.basicdata.currentPage
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = 300 + 'ms'
        } else {
          style['zIndex'] = '-1'
          style['transform'] = 'translate3D(0,0,' + -1 * visible * 60 + 'px' + ')'
        }
        return style
      // 已滑动模块释放后
      } else if (index === this.basicdata.currentPage - 1) {
        let style = {}
        // 继续执行动画
        style['transform'] = 'translate3D(' + this.temporaryData.lastPosWidth + 'px' + ',' + this.temporaryData.lastPosHeight + 'px' + ',0px)'
        style['opacity'] = '0'
        style['zIndex'] = '-1'
        style['transitionTimingFunction'] = 'ease'
        style['transitionDuration'] = 300 + 'ms'
        return style
      }
    },
    // 首页样式切换
    transformIndex (index) {
      // 处理3D效果
      if (index === this.basicdata.currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px)'
        style['opacity'] = this.temporaryData.opacity
        style['zIndex'] = 10
        if (this.temporaryData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = 300 + 'ms'
        }
        return style
      }
    }
  }
}
</script>
<style>
  .stack {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 400px;
    /* 后面图片高低 */
    perspective-origin: 50% 90%;
    margin: 0;
    padding: 0;
  }
  .stack-item{
    /* background: #fff; */
    height: 100%;
    width: 100%;
    border-radius: 4px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    opacity: 0;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    user-select: none;
    pointer-events: auto;
  }
  .stack-item-last{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .stack-item-last p{
    width: 200px;
    height: 100px;
    line-height: 100px;
    font-size:18px;
    text-align: center;
    background-color: rgba(0,0,0,0.8);
    
  }
  .stack-item img {
    width: 100%;
    display: block;
    pointer-events: none;
  }
  .stack-txt{
    font-size:18px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:600;
    color:#000;
    line-height:25px;
    position: absolute;
    bottom: 80px ;
    left: 40px;
  }
  .stack-icon{
    position: absolute;
    bottom: 80px;
    right: 30px;
    width:73px;
    height:30px;
    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
    box-shadow:0px 4px 16px 0px rgba(0,0,0,0.5);
    border-radius:11px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
  }
  .stack-icon img{
      width: auto;
  }
  .stack-container li.move-back {
    /* http://matthewlein.com/ceaser/ */
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.470, 1.515);
  }
</style>