<template>
  <div class="cinema-map">
    <!-- nav开始 -->
    <nav-bar left="back" class="nav">
      <template v-slot:center>
        <p class="nav-title">影院地图</p>
      </template>
      <template v-slot:right>
        <img src="@/assets/images/首页_slices/搜索@3x.png" alt @click="$router.push('/search')" />
      </template>
    </nav-bar>
    <!-- 百度地图开始 -->
    <baidu-map class="cinema-map-view" @ready="getLocation">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
    <!-- 影院列表开始 -->
    <ul class="cinema-list oneline">
      <li class="item" v-for="item in cinemaList" :key="item.uid" @click="fouce(item.point)">
        <img class="cinema-img" src="@/assets/images/影院地图_slices/影院门头_百度图片搜索@3x.png" alt />
        <div class="cinema-info">
          <router-link :to="`/cinema/cinemaDetails/${item.uid}`" class="view" tag="div">查看</router-link>
          <p class="elipsis">{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    navBar: () => import("@/components/navBar")
  },
  computed: {
    ...mapState({
      cinemaList: function(state) {
        return state.BaiduMap.cinemaList;
      },
      BMap: state => state.BaiduMap.BMap
    })
  },
  methods: {
    ...mapActions({
      getLocation: "BaiduMap/getLocation",
      mapFouce: "BaiduMap/mapFouce"
    }),
    fouce(point) {
      this.mapFouce(new this.BMap.Point(point.lng, point.lat));
    }
  }
};
</script>

<style lang="scss" scoped>
.cinema-map {
  padding-top: 44px;
  .nav {
    font-size: 20px;
    color: #fff;
  }
  .cinema-map-view {
    width: 100%;
    height: 584px;
    border-radius: 22px;
    overflow: hidden;
  }
  .cinema-list {
    position: fixed;
    left: 0;
    bottom: 10px;
    .item {
      width: 203px;
      height: 194px;
      background-color: #33363d;
      box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.19);
      border-radius: 6px;
      font-size: 12px;
      .cinema-img {
        width: 100%;
        display: block;
      }
      .cinema-info {
        padding: 5px 5px 0;
        text-align: left;
        .view {
          float: right;
          margin-top: 15px;
          width: 45px;
          line-height: 25px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          border-radius: 6px;
          text-align: center;
        }
      }
    }
  }
}
</style>