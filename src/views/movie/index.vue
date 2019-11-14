<template>
  <div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "movie",
  components: {
    tabBar: () => import("@/components/tabBar")
  }
};
</script>
