<template>
  <div class="search-eara">
    <img src="@/assets/images/首页_slices/搜索@3x.png" alt />
    <input type="text" :placeholder="ph" class="search" />
  </div>
</template>

<script>
export default {
  props: {
    ph: String
  }
};
</script>

<style lang="scss" scoped>
.search-eara {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #33363d;
  img {
    width: 17px;
    margin: 0 6px 0 12px;
  }
  input {
    flex: 1;
    border: 0; // 去除未选中状态边框
    outline: none; // 去除选中状态边框
    background-color: #33363d;
    color: #dfdfdf;
  }
}
</style>