<template>
  <div>
    影院页面
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "cinema",
  components: {
    tabBar: () => import("@/components/tabBar/index.vue")
  }
};
</script>
