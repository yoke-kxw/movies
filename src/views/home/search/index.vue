<template>
  <div class="search">
    <!-- 搜索页面 -->
    <div class="search-head">
      <div class="search-eara">
        <img src="~@/assets/imgs/search/search.png" alt />
        <input @keyup.enter="record" type="text" placeholder="搜索影片,影院,明星" />
      </div>
      <span @click="$router.go(-1)">取消</span>
    </div>
    <div class="search-history">
      <div class="search-title">
        <img src="~@/assets/imgs/search/search-1.png" alt />
        <span>萤火虫热搜</span>
        <span class="delAll" @click="delAll">全部删除</span>
      </div>
      <ul class="history-list">
        <li
          @click="add(item)"
          class="history-item text-ellipsis"
          v-for=" (item,index) in historyArr"
          :key="index"
        >{{item}}</li>
        <li class="history-item">更多热搜&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      historyArr: [],
      timer: null
    };
  },
  methods: {
    record() {
      var ipt = document.querySelector("input");
      var val = ipt.value;
      console.log(val);
      //input失焦时,存入本地历史记录
      // this.historyArr=JSON.parse(localStorage.getItem("history"));
      if (val !== "") {
        if (this.historyArr.every(ele => ele !== val)) {
          this.historyArr.push(val);
        }
      }
      localStorage.setItem("history", JSON.stringify(this.historyArr));
      console.log(this.historyArr);

      ipt.value = "";
    },
    takeData() {
      //插入历史记录,从本地读取
      this.historyArr = JSON.parse(localStorage.getItem("history"));
      // console.log( this.historyArr);
      if (this.historyArr == null) {
        this.historyArr = [];
        console.log(this.historyArr);
      }
    },
    add(item) {
      //点击input历史记录;
      var ipt = document.querySelector("input");
      ipt.value = item;
    },
    //全部删除
    delAll() {
      localStorage.clear();
      this.historyArr = [];
      console.log("全部删除");
    }
  },
  created() {
    this.takeData();
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  .search-head {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin: 0 10px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
      line-height: 16px;
      white-space: nowrap;
    }
  }

  .search-history {
    width: 100%;
    .search-title {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      padding: 10px 0;
      .delAll {
        margin-left: 200px;
      }
    }
    .history-list {
      width: 100%;
      display: flex;
      padding: 10px 0;
      justify-content: space-between;
      flex-wrap: wrap;
      .history-item {
        width: 100px;
        margin: 10px 0;
        height: 30px;
        background-color: #33363d;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
      }
      .history-item:nth-last-child(1) {
        height: 0;
        color: #f1a363;
      }
    }
  }
  .mask {
    display: none;
    position: absolute;
    top: 150px;
    left: 80px;
    z-index: 999;
    width: 200px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      border: none;
      margin: 0 5px;
      padding: 5px 10px;
      outline: none;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
  }
}
</style>