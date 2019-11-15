<template>
  <div class="movieList">
    <ul class="list clearfix">
      <li class="item" v-for="item in list" :key="item.id" @click="$router.push('/movie/film')">
        <div class="cover playbutton">
          <img :src="imgUrl(item.img)" alt />
        </div>
        <div class="info">
          <p class="title">{{ item.title }}</p>
          <p v-if="item.score" class="score">
            萤火虫评分
            <span class="emp">{{ item.score }}</span>
          </p>
          <p v-if="item.want" class="want">
            <span class="emp">{{ item.want }}</span>
            人想看
          </p>
          <p class="director">导演：{{ item.director.join('/') }}</p>
          <p v-if="item.actor" class="actor">主演：{{ item.actor.join(' ') }}</p>
          <p v-if="item.genre" class="genre">{{ item.genre.join('/') }}</p>
          <ul v-if="item.tags" class="tags">
            <li
              v-for="i in item.tags"
              :key="i.text"
              :style="`color:${i.color};border-color:${i.color}`"
            >{{ i.text }}</li>
          </ul>
        </div>
        <div class="operation">
          <div v-if="type=='coming'" class="presale">预售</div>
          <div v-if="type=='showing'" class="buy">购票</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    type: String //传入'coming'或'showing'，展示预售或购票按钮
  },
  methods: {
    imgUrl(name) {
      return require(`@/assets/imgs/movie/${name}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.movieList {
  padding: 0 20px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
  .item {
    margin-top: 25px;
    height: 146px;
    background-color: #33363d;
    border-radius: 6px;
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    .cover {
      width: 105px;
      height: 156px;
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .operation {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .presale,
      .buy {
        margin-right: 14px;
        width: 54px;
        line-height: 25px;
        text-align: center;
        background: linear-gradient(
          150deg,
          rgba(98, 75, 163, 1) 0%,
          rgba(203, 68, 152, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
      }
      .buy {
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
      }
    }
    .info {
      padding-left: 10px;
      height: 100%;
      .title {
        padding: 15px 0 10px;
        font-size: 16px;
      }
      .score,
      .want {
        font-size: 14px;
        .emp {
          color: #fbc34a;
        }
      }
      .director {
        padding: 12px 0 6px;
      }
      .tags {
        padding-top: 6px;
        li {
          margin-right: 6px;
          display: inline-block;
          font-size: 10px;
          border: 1px solid;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>