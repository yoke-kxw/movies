<template>
  <div>
    我的页面
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "main",
  components: {
    tabBar: () => import("@/components/tabBar/index.vue")
  }
};
</script>
