<template>
  <div>
    movie页面
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "movie",
  components: {
    tabBar: () => import("@/components/tabBar/index.vue")
  }
};
</script>
