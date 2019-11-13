<template>
  <div class="movie-header">
    <headerNav></headerNav>
    <ul class="movie-uls">
      <router-link
        class="movie-item"
        tag="li"
        :to="item.path"
        v-for="item in list"
        :key="item.path"
      >
        {{ item.name }}
      </router-link>
    </ul>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "movie",
  data() {
    return {
      list: [
        {
          path: "/movie/hotmovie",
          name: "正在热映"
        },
        {
          path: "/movie/upcoming",
          name: "即将上映"
        }
      ]
    };
  },
  components: {
    tabBar: () => import("@/components/tabBar/index.vue"),
    headerNav: () => import("@/components/movieHeaderNav/index.vue")
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.movie-header {
  position: relative;
  width: 100%;
  height: 100%;
  background: #22262d;
  .movie-uls {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 164px;
    height: 26px;
    display: flex;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    border: 1px solid orange;
    background: #23262d;
    z-index: 10;
    margin-top: 10px;
    border-radius: 5px;
    color: #969393;
    .movie-item {
      width: 84px;
      height: 26.5px;
      border-radius: 2px 0 0 2px;
    }
    .router-link-active {
      background: linear-gradient(135deg, #f26680, #f1a561);
      color: #fff;
    }
    .movie-item:nth-child(2) {
      border-radius: 0 2px 2px 0;
    }
  }
}
</style>
