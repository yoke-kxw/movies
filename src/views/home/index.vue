<template>
  <div class="home">
 
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {
    tabBar: () => import("@/components/tabBar/index.vue"),
   
  }
};
</script>
