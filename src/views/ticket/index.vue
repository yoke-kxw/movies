<template>
  <div>
    售票页面
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  name: "tiket",
  components: {
    tabBar: () => import("@/components/tabBar")
  }
};
</script>
