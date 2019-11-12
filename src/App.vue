<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/ticketBuy">ticketBuy</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
html,
body {
  // height: 100%;
  background-color: #23262d;
}
</style>
