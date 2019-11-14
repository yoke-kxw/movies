<template>
  <div class="home">
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    tabBar: () => import("@/components/tabBar")
  }
};
</script>
