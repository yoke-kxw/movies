<template>
<div>
    <tab-bar></tab-bar>
</div>
</template>

<script>
export default {
  name: "user",
  components: {
    tabBar: () => import("@/components/tabBar")
  },
};
</script>
