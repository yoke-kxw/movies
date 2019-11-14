<template>
  <ul class="tab-bar">
    <router-link to="/home" tag="li">
      <img src="@/assets/images/图标/形状结合e@3x.png" alt />
      <img src="@/assets/images/图标/形状结合@3x.png" alt />
    </router-link>
    <router-link to="/movie" tag="li">
      <img src="@/assets/images/图标/编组 4@3x.png" alt />
      <img src="@/assets/images/图标/编组 4复制@3x.png" alt />
    </router-link>
    <router-link to="/ticket" tag="li">
      <img src="@/assets/images/图标/编组 6@3x.png" alt />
      <img src="@/assets/images/图标/编组 6@3x.png" alt />
    </router-link>
    <router-link to="/cinema" tag="li">
      <img src="@/assets/images/图标/编组 8@3x.png" alt />
      <img src="@/assets/images/图标/编组 811@3x.png" alt />
    </router-link>
    <router-link to="/user" tag="li">
      <img src="@/assets/images/图标/编组 3@3x.png" alt />
      <img src="@/assets/images/图标/编组 31@3x.png" alt />
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "tabBar"
};
</script>

<style lang="scss" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    padding-bottom: 14px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    height: 99px;
    background: url("~@/assets/images/图标/编组@3x.png") no-repeat center / 100%
        100%;
    box-sizing: border-box;
    z-index: 9;
    li {
        width: 40px;
        &:nth-child(3) {
            width: 65px;
            height: 65px;
        }
        img {
            display: block;
            width: 100%;
        }
        img:last-child {
            display: none;
        }
        &.router-link-active img:first-child {
            display: none;
        }
        &.router-link-active img:last-child {
            display: block;
        }
    }
    img {
      display: block;
      width: 100%;
    }
    img:last-child {
      display: none;
    }
    &.router-link-active img:first-child {
      display: none;
    }
    &.router-link-active img:last-child {
      display: block;
    }
  }

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>
