<template>
  <div class="movie">
    <nav-bar left="location" class="nav">
      <template v-slot:center>
        <ul class="movie-toggle">
          <router-link to="/movie/showing" tag="li">正在热映</router-link>
          <router-link to="/movie/coming" tag="li">即将上映</router-link>
        </ul>
      </template>
      <template v-slot:right>
        <img src="@/assets/imgs/movie/search.png" alt @click="$router.push('/search')" />
      </template>
    </nav-bar>
    <transition :name="transitionName">
      <router-view class="main-view"></router-view>
    </transition>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    navBar: () => import("@/components/navBar"),
    tabBar: () => import("@/components/tabBar")
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      transitionName: state => state.animateName
    })
  }
};
</script>

<style lang="scss" scoped>
.movie {
  padding: 44px 0 100px;
  .nav {
    background-color: #33363d;
  }
  .movie-toggle {
    width: 124px;
    height: 25px;
    display: flex;
    border: 1px solid transparent;
    border-radius: 6px;
    background-image: linear-gradient(314deg, #f19e65, #f2697f);
    li {
      flex: 1;
      font-size: 14px;
      text-align: center;
      line-height: 25px;
      background-color: #33363d;
      &.router-link-active {
        background-color: transparent;
        color: #fff;
      }
      &:first-child {
        border-radius: 6px 0 0 6px;
      }
      &:last-child {
        border-radius: 0 6px 6px 0;
      }
    }
  }
}
</style>
