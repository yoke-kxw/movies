<template>
  <div class="buyticket">
    <!-- 头部开始 -->
    <div class="header">
      <img :src="imgs[0].src" alt="" @click="$router.go(-1)" />
      <p>耀莱成龙影城(建业店)</p>
      <img :src="imgs[1].src" alt="" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <h3 class="content-title">后来的我们</h3>
      <div class="content-time">
        <p>15.30-17.14</p>
        <p>原版3D</p>
      </div>
      <div class="content-seat">
        <div class="content-seat-yes">
          <div></div>
          <p>可选</p>
        </div>
        <div class="content-seat-no">
          <div></div>
          <p>不可选</p>
        </div>
        <div class="content-seat-yet">
          <div></div>
          <p>已选</p>
        </div>
      </div>
      <!-- 座位图 -->
      <div v-if="seatArray.length > 0" class="content-main">
        <div class="nav-center"><span>2号厅(冠名招商中)</span></div>
        <div class="nav-side">
          <p v-for="item in 9" :key="item">{{ item }}</p>
        </div>
        <div class="inner-seat-wrapper" ref="innerseatwrapper">
          <div v-for="(row, index) in seatRow" :key="index" class="seat-clo">
            <!--v-show必须有，没有会报错，因为seatArray初始为空-->
            <div
              v-for="(col, index) in seatCol"
              :key="index"
              class="seat"
              v-show="seatArray.length > 0"
              :style="{ width: seatSize + 'px', height: seatSize + 'px' }"
            >
              <div
                class="inner-seat"
                @click="handleChooseSeat(row - 1, col - 1)"
                v-if="seatArray[row - 1][col - 1] !== -1"
                :class="
                  seatArray[row - 1][col - 1] === 2
                    ? 'bought-seat'
                    : seatArray[row - 1][col - 1] === 1
                    ? 'selected-seat'
                    : 'unselected-seat'
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐座位部分 -->
      <div class="content-recommend">
        <div class="content-recommend-numofp">
          <p>推荐座位</p>
          <p
            @click="smartChoose(1)"
            :class="seatAct[0].flag ? 'smartChoose-act' : ''"
          >
            1人
          </p>
          <p
            @click="smartChoose(2)"
            :class="seatAct[1].flag ? 'smartChoose-act' : ''"
          >
            2人
          </p>
          <p
            @click="smartChoose(3)"
            :class="seatAct[2].flag ? 'smartChoose-act' : ''"
          >
            3人
          </p>
          <p
            @click="smartChoose(4)"
            :class="seatAct[3].flag ? 'smartChoose-act' : ''"
          >
            4人
          </p>
        </div>
        <button v-if="!flag">
          请先选座
        </button>
        <button @click="buySeat()" v-else>购票</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.buyticket {
  background: #23262d url("~@/assets/images/选座/seat_bg.9f25a857.png")
    no-repeat 0 0;
  background-size: 100% 30%;
  width: 375px;
  height: 667px;
  overflow: hidden;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 335px;
    height: 44px;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;

    z-index: 999;
    p {
      font-size: 16px;
      color: #fff;
    }
    img {
      width: 22px;
      height: 22px;
    }
  }
  .content {
    padding: 0 20px;
    margin-top: 44px;
    .content-title {
      width: 335px;
      height: 34px;
      font-size: 16px;
      line-height: 44px;
      color: #dad0cf;
    }
    .content-time {
      display: flex;
      align-items: center;
      padding: 10px 0;
      p:nth-child(1) {
        font-size: 14px;
        background-color: #564048;
        padding: 2px 10px;
        border-radius: 5px;
        color: #dad0cf;
      }
      p:nth-child(2) {
        font-size: 14px;
        padding: 2px 10px;
        border: 1px solid #564147;
        border-radius: 10px;
        margin-left: 20px;
        color: #dad0cf;
      }
    }
    .content-seat {
      width: 335px;
      height: 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      .content-seat-yes {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 26px;
          height: 26px;
          margin-right: 10px;
          float: left;
          background-color: #909294;
          border-radius: 5px;
        }
        p {
          font-size: 14px;
          float: left;
          color: #dad0cf;
        }
      }
      .content-seat-no {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 26px;
          height: 26px;
          margin-right: 10px;
          float: left;
          background-color: #f9c34a;
          border-radius: 5px;
        }
        p {
          font-size: 14px;
          float: left;
          color: #dad0cf;
        }
      }
      .content-seat-yet {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 26px;
          height: 26px;
          margin-right: 10px;
          float: left;
          background-color: #6548a9;
          border-radius: 5px;
        }
        p {
          font-size: 14px;
          float: left;
          color: #dad0cf;
        }
      }
    }
    .content-main {
      position: relative;
      height: 312px;
      width: 345px;
      .nav-center {
        position: absolute;
        left: 95px;
        top: -5px;
        font-size: 12px;
        border-radius: 5px;
        width: 130px;
        border-top: 20px solid #33363d;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        font-size: 12px;
        color: #fff;
        span {
          position: absolute;
          top: -17px;
          left: 15px;
        }
      }
      .nav-side {
        position: absolute;
        top: 40px;
        left: -10px;
        width: 20px;
        height: 270px;
        font-size: 12px;
        color: #fff;
        background-color: #33363d;
        border-radius: 20px;
        padding-top: 26px;
        p {
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          padding-bottom: 5px;
        }
        p:nth-child(4) {
          padding-top: 10px;
        }
        p:nth-child(7) {
          padding-top: 10px;
        }
      }
      .inner-seat-wrapper {
        width: 330px;
        padding: 66px 0 0 15px;
        .seat-clo {
          height: 25px !important;
          &:nth-child(4) {
            margin-top: 10px;
          }
          &:nth-child(7) {
            margin-top: 10px;
          }
          .seat {
            float: left;
            height: 100% !important;
            overflow: hidden;
            .inner-seat {
              width: 20px;
              height: 20px;
              margin: 0 auto;
              border-radius: 3px;
            }
            .bought-seat {
              background-color: #f9c34a;
            }
            .selected-seat {
              background-color: #6548a9;
            }
            .unselected-seat {
              background-color: #909294;
            }
          }
        }
      }
    }
    .content-recommend {
      width: 375px;
      height: 145px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #33363d;
      overflow: hidden;
      .content-recommend-numofp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        padding: 0 20px;
        p {
          font-size: 16px;
          color: #fff;
          padding: 2px 12px 3px 12px;
          border: 1px solid #979797;
        }
        p:nth-child(1) {
          padding: 0;
          border: none;
        }
        .smartChoose-act {
          background-color: #6548a9;
        }
      }
      button {
        width: 335px;
        height: 40px;
        margin: 30px 0 0 20px;
        color: #fff;
        border-radius: 5px;
        background-image: linear-gradient(to right, #f16381, #f1a362);
        border: none;
        font-size: 18px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "buyticket",
  data() {
    return {
      seatArray: [],
      seatRow: 9,
      seatCol: 12,
      seatSize: 27,
      buySeatArr: [],
      seatAct: [
        { flag: false },
        { flag: false },
        { flag: false },
        { flag: false }
      ],
      imgs: [
        {
          src: require("@/assets/images/选座/larrow.png")
        },
        {
          src: require("@/assets/images/选座/share.png")
        }
      ]
    };
  },
  computed: {
    flag() {
      return this.seatArray.some(ele => ele.some(ele => ele == 1));
    }
  },
  methods: {
    //初始座位数组
    initSeatArray: function() {
      let seatArray = Array(this.seatRow)
        .fill(0)
        .map(() => Array(this.seatCol).fill(0));
      this.seatArray = seatArray;
      //均分父容器宽度作为座位的宽度
      //   this.seatSize = this.$refs.innerSeatWrapper
      //     ? parseInt(
      //         parseInt(
      //           window.getComputedStyle(this.$refs.innerSeatWrapper).width,
      //           10
      //         ) / this.seatCol,
      //         10
      //       )
      //     : 0;
      //初始化不是座位的地方
      this.initNonSeatPlace();
    },

    // 初始化不是座位的地方
    initNonSeatPlace: function() {
      for (let i = 0; i < 2; i++) {
        this.seatArray[i][0] = -1;
        this.seatArray[i][11] = -1;
      }
      this.seatArray[0][1] = this.seatArray[0][10] = -1;
      this.seatArray[4][5] = this.seatArray[4][6] = 2;
    },
    handleChooseSeat: function(row, col) {
      let seatValue = this.seatArray[row][col];
      let newArray = this.seatArray;
      //如果是已购座位，直接返回
      if (seatValue === 2) return;
      //如果是已选座位点击后变未选
      if (seatValue === 1) {
        newArray[row][col] = 0;
      } else if (seatValue === 0) {
        newArray[row][col] = 1;
      }
      //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
      this.seatArray = newArray.slice();
    },

    //推荐选座

    smartChoose: function(num) {
      //删除激活位
      var seatActClone = this.seatAct.slice(0);
      for (let i = 0; i < seatActClone.length; i++) {
        seatActClone[i].flag = false;
      }
      //添加激活位
      seatActClone[num - 1].flag = true;
      //重新赋值
      this.seatAct = seatActClone;
      console.log(this.seatAct);
      //找到影院座位水平垂直中间位置的后一排
      let rowStart = parseInt((this.seatRow - 1) / 2, 10) + 1;
      //先从中间排往后排搜索
      let backResult = this.searchSeatByDirection(
        rowStart,
        this.seatRow - 1,
        num
      );
      if (backResult.length > 0) {
        this.chooseSeat(backResult);
        return;
      }
      //再从中间排往前排搜索
      let forwardResult = this.searchSeatByDirection(rowStart - 1, 0, num);
      if (forwardResult.length > 0) {
        console.log(forwardResult);
        this.chooseSeat(forwardResult);
        return;
      }
      //提示用户无合法位置可选
      alert("无合法位置可选!");
    },
    /*辅助函数，判断每一行座位从i列到j列是否全部空余且连续
     *
     */
    checkRowSeatContinusAndEmpty: function(rowNum, startPos, endPos) {
      let isValid = true;
      for (let i = startPos; i <= endPos; i++) {
        if (this.seatArray[rowNum][i] !== 0) {
          isValid = false;
          break;
        }
      }
      return isValid;
    },
    //辅助函数：返回每一行的某个合理位置的座位数组
    generateRowResult: function(row, startPos, endPos) {
      let result = [];
      for (let i = startPos; i <= endPos; i++) {
        result.push([row, i]);
      }
      return result;
    },
    //辅助函数:智能推荐的选座操作
    chooseSeat: function(result) {
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < result.length; i++) {
        //选定座位
        oldArray[result[i][0]][result[i][1]] = 1;
      }
      this.seatArray = oldArray;
    },
    searchSeatByDirection: function(fromRow, toRow, num) {
      /*
       * 推荐座位规则
       * (1)初始状态从座位行数的一半处的后一排的中间开始向左右分别搜索，取离中间最近的，如果满足条件，
       *    记录下该结果离座位中轴线的距离，后排搜索完成后取距离最小的那个结果作为最终结果，优先向后排进行搜索，
       *    后排都没有才往前排搜，前排逻辑同上
       * (2)只考虑并排且连续的座位，不能不在一排或者一排中间有分隔
       * */

      /*
       * 保存当前方向搜索结果的数组,元素是对象,result是结果数组，offset代表与中轴线的偏移距离
       * {
       *   result:Array([x,y])
       *   offset:Number
       * }
       */
      let currentDirectionSearchResult = [];
      //确定行数的大小关系，从小到大进行遍历
      let largeRow = fromRow > toRow ? fromRow : toRow,
        smallRow = fromRow > toRow ? toRow : fromRow;
      //逐行搜索
      for (let i = smallRow; i <= largeRow; i++) {
        //每一排的搜索,找出该排里中轴线最近的一组座位
        let tempRowResult = [],
          minDistanceToMidLine = Infinity;
        for (let j = 0; j <= this.seatCol - num; j++) {
          //如果有合法位置
          if (this.checkRowSeatContinusAndEmpty(i, j, j + num - 1)) {
            //计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
            let resultMidPos = parseInt(j + num / 2, 10);
            let distance = Math.abs(parseInt(this.seatCol / 2) - resultMidPos);
            //如果距离较短则更新
            if (distance < minDistanceToMidLine) {
              minDistanceToMidLine = distance;
              //该行的最终结果
              tempRowResult = this.generateRowResult(i, j, j + num - 1);
            }
          }
        }
        //保存该行的最终结果
        currentDirectionSearchResult.push({
          result: tempRowResult,
          offset: minDistanceToMidLine
        });
      }

      //处理后排的搜索结果:找到距离中轴线最短的一个
      //注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
      let isBackDir = fromRow < toRow;
      let finalReuslt = [],
        minDistanceToMid = Infinity;
      if (isBackDir) {
        //后排情况,从前往后
        currentDirectionSearchResult.forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      } else {
        //前排情况，从后往前找
        currentDirectionSearchResult.reverse().forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      }
      //直接返回结果
      return finalReuslt;
    },
    //选定且购买座位
    buySeat: function() {
      //遍历seatArray，选出所有值为1的,变换格式保存
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (oldArray[i][j] === 1) {
            let Rowi = i;
            let Colj = j;
            if (Rowi == 0) {
              Colj = Colj - 2;
            }
            if (Rowi == 1) {
              Colj--;
            }
            this.buySeatArr.push({
              row: Rowi + 1,
              col: Colj + 1
            });
          }
        }
      }
      //跳转
      this.$router.push({
        path: "/confirmorder",
        query: this.buySeatArr
      });
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initSeatArray();
    });
  }
};
</script>
