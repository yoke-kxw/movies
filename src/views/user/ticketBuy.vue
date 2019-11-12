<template>
  <div class="ticket-buy">
    <div class="head">
      <span @click="back">&lt;</span> <span>我的影票</span> <span> &lt; </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {}
  }
};
</script>

<style lang="scss" scoped>
.ticket-buy {
  padding: 8px;
  overflow: hidden;
  .head {
    margin-bottom: 62px;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    background-color: rgb(87, 194, 38);
    span:nth-child(1) {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: -2px;
        left: -5px;
        width: 20px;
        height: 20px;
      }
    }
    span:nth-child(3) {
      visibility: hidden;
    }
  }
}
</style>
