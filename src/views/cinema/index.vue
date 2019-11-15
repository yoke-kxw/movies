<template>
  <div class="cinema wrapper" ref="wrapper">
    <div class="content">
      <!-- 显示地址 -->
      <router-link class="address-bar" to="/cinema/cinemaMap" tag="p">
        <img class="icon" src="@/assets/imgs/cinema/position.png" alt />
        我在：{{ location.address }}
      </router-link>
      <!-- 影院列表开始 -->
      <ul class="cinema-list clearfix">
        <router-link
          class="item"
          :to="`/cinema/cinemaDetails/${item.uid}`"
          tag="li"
          v-for="item in cinemaList"
          :key="item.uid"
        >
          <p class="title">
            <span>{{ item.title }}</span>
            <span>
              <span class="emp">19.9元</span>
              <span class="qi">起</span>
            </span>
          </p>
          <p class="cinema-address">
            <span class="text-ellipsis">{{ item.address | address }}</span>
            <span>{{ (item.distance/1000).toFixed(1)}}km</span>
          </p>
          <div class="cinema-desc">
            <p>
              <span class="icon">惠</span>
              <span>我是药神等4部影片特惠</span>
            </p>
            <p>
              <span class="icon">促</span>
              <span>观影套餐限量特惠</span>
            </p>
            <p>
              <span class="icon">卡</span>
              <span>开卡特惠，每单2张立减2元</span>
            </p>
          </div>
        </router-link>
      </ul>
    </div>
    <!-- nav开始 -->
    <nav-bar left="location" class="nav">
      <template v-slot:center>
        <p class="nav-title">影院</p>
      </template>
      <template v-slot:right>
        <img src="@/assets/imgs/cinema/search.png" alt @click="$router.push('/search')" />
      </template>
    </nav-bar>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import BScroll from "@better-scroll/core";

export default {
  name: "cinema",
  components: {
    tabBar: () => import("@/components/tabBar"),
    navBar: () => import("@/components/navBar")
  },
  data() {
    return {};
  },
  filters: {
    // 去除市级以上地址
    address(val) {
      return val.replace(/^.+?市/, "");
    }
  },
  computed: {
    ...mapState({
      location: function(state) {
        return state.BaiduMap.location;
      },
      cinemaList: function(state) {
        this.refreshScoll(this);
        return state.BaiduMap.cinemaList;
      }
    })
  },
  methods: {
    ...mapActions({
      refreshScoll: "refreshScoll"
    })
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
.cinema {
  font-size: 12px;
  height: 100%;
  .nav {
    background-color: #33363d;
    .nav-title {
      font-size: 18px;
      color: #fff;
    }
  }
  .content {
    padding-top: 44px;
    padding-bottom: 100px;
    .address-bar {
      margin-top: 10px;
      line-height: 30px;
      background-color: #33363d;
      display: flex;
      align-items: center;
      .icon {
        margin: 0 11px 0 22px;
        width: 13px;
      }
    }
    .cinema-list {
      padding: 12px 20px 0;
      .item {
        margin-bottom: 15px;
        padding: 0 11px;
        height: 146px;
        background-color: #33363d;
        box-sizing: border-box;
        .title {
          padding: 9px 0 3px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #fff;
          .emp {
            color: #fbc34a;
          }
          .qi {
            font-size: 12px;
            color: #dfdfdf;
          }
        }
        .cinema-address {
          display: flex;
          justify-content: space-between;
        }
        .cinema-desc {
          & > p {
            padding-top: 11px;
            .icon {
              margin-right: 9px;
              display: inline-block;
              width: 18px;
              line-height: 19px;
              text-align: center;
              border-radius: 4px;
            }
            &:nth-child(1) {
              .icon {
                background: linear-gradient(
                  135deg,
                  rgba(235, 110, 117, 1) 0%,
                  rgba(247, 166, 83, 1) 100%
                );
              }
            }
            &:nth-child(2) {
              .icon {
                background: linear-gradient(
                  135deg,
                  rgba(176, 70, 157, 1) 0%,
                  rgba(97, 72, 170, 1) 100%
                );
              }
            }
            &:nth-child(3) {
              .icon {
                background: linear-gradient(
                  135deg,
                  rgba(50, 36, 149, 1) 0%,
                  rgba(49, 56, 172, 1) 100%
                );
              }
            }
          }
        }
      }
    }
  }
}
</style>
