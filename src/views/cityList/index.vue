<template>
  <div class="cityList wrapper" ref="wrapper">
    <div class="content">
      <!-- 搜索开始 -->
      <div class="search">
        <div class="search-eara">
          <img src="@/assets/images/首页_slices/搜索@3x.png" alt />
          <input type="text" placeholder="输入城市" v-model="keywords" />
        </div>
        <span class="cancel" @click="$router.go(-1)">取消</span>
      </div>
      <!-- 城市列表开始 -->
      <div class="city-type">
        <p class="title">定位城市</p>
        <div class="city-item active">{{ currentcity }}</div>
        <div class="city-item" @click="getLocation">点击定位</div>
        <p class="title">历史访问城市</p>
        <ul class="city-list">
          <li
            class="city-item"
            v-for="item in historyCitys"
            :key="item"
            @click="syncSwitchCity(item)"
          >{{ item }}</li>
          <i class="city-item"></i>
        </ul>
        <p class="title">热门城市</p>
        <ul class="city-list">
          <li
            class="city-item"
            v-for="item in hotCitys.citys"
            :key="item"
            @click="syncSwitchCity(item)"
          >{{ item }}</li>
          <i class="city-item"></i>
        </ul>
      </div>
      <!-- 所有城市列表开始 -->
      <div class="city-all">
        <ul v-if="this.keywords">
          <li v-for="item in searchList" :key="item" @click="syncSwitchCity(item)">{{ item }}</li>
        </ul>
        <ul v-else v-for="item in searchList||allCity" :key="item.name">
          <p :ref="item.name">{{ item.name }}</p>
          <li v-for="i in item.citys" :key="i" @click="syncSwitchCity(i)">{{ i }}</li>
        </ul>
      </div>
    </div>
    <!-- nav开始 -->
    <nav-bar left="close" class="nav">
      <template v-slot:center>
        <p class="nav-title">选择城市</p>
      </template>
    </nav-bar>
    <!-- 城市字母选择 -->
    <ul
      class="letter-list"
      :class="{'showBorder':letter}"
      @touchmove.prevent="scollStart"
      @touchend="scollEnd"
    >
      <li
        class="letter-item"
        v-for="item in allCity"
        :key="item.name"
        @touchstart.prevent="scollStart"
      >{{ item.name }}</li>
    </ul>
    <div class="center-letter" v-show="letter">{{ letter }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import cityList from "@/assets/lib/city.js";
import BScroll from "@better-scroll/core";

export default {
  name: "cityList",
  components: {
    navBar: () => import("@/components/navBar")
  },
  data() {
    return {
      historyCitys: [],
      keywords: "",
      letter: ""
    };
  },
  computed: {
    ...mapState({
      currentcity: function(state) {
        return state.BaiduMap.city;
      }
    }),
    hotCitys() {
      this.refreshScoll(this);
      return cityList.find(el => el.name === "hot");
    },
    allCity() {
      return cityList.filter(el => el.name !== "hot");
    },
    searchList() {
      this.refreshScoll(this);
      if (!this.keywords) {
        return;
      }
      return this.allCity.reduce((a, b) => {
        return [...a, ...b.citys.filter(el => el.includes(this.keywords))];
      }, []);
    }
  },
  methods: {
    ...mapActions({
      switchCity: "BaiduMap/switchCity",
      getLocation: "BaiduMap/getLocation",
      refreshScoll: "refreshScoll"
    }),
    syncSwitchCity(val) {
      if (this.historyCitys.some(el => el === val)) {
        return;
      }
      if (this.historyCitys.length === 6) {
        this.historyCitys.splice(5, 1);
      }
      this.historyCitys.unshift(val);
      this.switchCity(val);
      this.refreshScoll(this);
    },
    scollStart(e) {
      var el = document.elementFromPoint(
        e.touches[0].clientX,
        e.touches[0].clientY
      );
      this.scroll.disable();
      if (el.className === "letter-item") {
        this.letter = el.innerText;
        this.scroll.scrollToElement(this.$refs[this.letter][0], 200);
      }
    },
    scollEnd() {
      this.letter = "";
      this.scroll.enable();
    }
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
.cityList {
  font-size: 14px;
  height: 100%;
  .content {
    padding-top: 50px;
  }
  .nav {
    background-color: #23262d;
    .nav-title {
      font-size: 18px;
      color: #fff;
    }
  }
  .search {
    display: flex;
    padding: 0 20px;
    align-items: center;
    .cancel {
      padding-left: 5px;
      font-size: 16px;
      white-space: nowrap;
    }
  }
  .city-type {
    padding: 20px;
    padding-right: 50px;
    .title {
      padding-bottom: 15px;
      font-size: 12px;
    }
    .city-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .city-item {
      margin-bottom: 15px;
      width: 30%;
      line-height: 30px;
      background-color: #33363d;
      box-sizing: border-box;
      text-align: center;
      &:nth-last-child(1) {
        margin: 0;
        height: 0;
      }
      &.active {
        border: 2px solid rgba(249, 195, 74, 1);
      }
    }
  }
  .city-all {
    padding: 0 50px 0 20px;
    line-height: 50px;
  }
  .letter-list {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    text-align: center;
    line-height: 16px;
    box-sizing: border-box;
    // z-index: 999;
    &.showBorder {
      border: 1px solid #fff;
    }
    &::before {
      content: "定位历史热门";
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      width: 24px;
      color: #f1a363;
    }
  }
  .center-letter {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 36px;
    font-weight: bold;
    border-radius: 10px;
    text-align: center;
    line-height: 100px;
  }
}
</style>