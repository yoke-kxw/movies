<template>
  <div>
    <movie-list :list="showingList" type="showing"></movie-list>
  </div>
</template>

<script>
export default {
  name: "showing",
  components: {
    movieList: () => import("@/components/movieList")
  },
  data() {
    return {
      showingList: [
        {
          id: Math.random(),
          title: "CRACKS（2018)",
          img: "hot-01.png",
          director: ["赞恩.阿尔.拉菲亚"],
          actor: ["赞恩.阿尔.拉菲亚"],
          score: "9.1",
          tags: [
            {
              color: "#FBC34A",
              text: "今日最热"
            },
            {
              color: "#F26C7E",
              text: "一周最热"
            }
          ]
        },
        {
          id: Math.random(),
          title: "大鱼海棠",
          img: "hot-01.png",
          director: ["梁旋", "季冠霖"],
          duration: "105分钟",
          genre: ["动画", "奇幻"],
          want: "16.4万",
          tags: [
            {
              color: "#3C4CAC",
              text: "口碑最佳"
            }
          ]
        },
        {
          id: Math.random(),
          title: "大鱼海",
          img: "hot-01.png",
          director: ["梁旋", "季冠霖"],
          duration: "120分钟",
          genre: ["动画", "奇幻"],
          want: "16.4万"
        },
        {
          id: Math.random(),
          title: "大鱼海",
          img: "hot-01.png",
          director: ["梁旋", "季冠霖"],
          duration: "120分钟",
          genre: ["动画", "奇幻"],
          want: "16.4万"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>