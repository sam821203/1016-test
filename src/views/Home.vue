<template>
  <main>
    <div v-for="article in articlesData" :key="article.id" class="card-wrap">
      <h3>{{ article.title }}</h3>
      <template v-if="article.categories.includes('美文')">
        <div class="content-wrap single-img">
          <div class="info">
            <div class="info__top">
              <div class="avatar">
                <img :src="article.avatarUrl" alt="" />
              </div>
              <span>{{ article.author }}</span>
              <span>{{ article.datePosted }}</span>
            </div>
            <p>
              {{ article.content }}
            </p>
          </div>
          <div :class="['img-wrap']">
            <img :src="article.imageUrl" alt="" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="content-wrap multi-imgs">
          <div class="info">
            <div class="info__top">
              <div class="avatar">
                <img :src="article.avatarUrl" alt="" />
              </div>
              <span>{{ article.author }}</span>
              <span>{{ article.datePosted }}</span>
            </div>
            <p>
              {{ article.content }}
            </p>
          </div>
          <div class="img-wrap">
            <img :src="image" v-for="image in article.imageUrl" alt="" />
          </div>
        </div>
      </template>
      <div class="extra-info-wrap">
        <BaseBadge
          v-for="cat in article.categories"
          :key="cat"
          :type="cat"
          :title="cat"
        />
        <span class="like">點讚 231</span>・ <span>收藏 1236</span>・
        <span>評論 191</span>・
        <span>觀看 405</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue";

const articlesData = reactive([
  {
    id: new Date().getTime(),
    title: "我好像為什麼事情很悲唉，我想起生命",
    author: "張杰敏",
    content:
      "我好像為什麼事情很悲唉，我想起生命是一場無盡的旅程，充滿了起伏和挑戰。我们经历了成功和失败，欢笑和眼泪，但正是这些经历塑造了我们的性格和使命",
    datePosted: new Date().toLocaleDateString("en-US"),
    categories: ["美文", "故事", "精選優質"],
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    imageUrl:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: new Date().getTime(),
    title: "我好像為什麼事情很悲唉，我想起生命",
    author: "張杰敏",
    content:
      "每一天都是一张全新的画布，等待着我们来书写自己的故事。生命中的每个瞬间都有其独特的意义，让我们珍惜并感恩这份宝贵的礼物。",
    datePosted: new Date().toLocaleDateString("en-US"),
    categories: ["日文", "故事"],
    avatarUrl:
      "https://slp-statics.astockcdn.net/static_assets/staging/22spring/free/browse-vector-categories-collections/Card4_399895799.jpg?width=580",
    imageUrl: [
      "https://us.123rf.com/450wm/wavebreakmediamicro/wavebreakmediamicro1606/wavebreakmediamicro160606524/58216116-young-girl-clicking-a-photograph-from-camera-in-park.jpg?ver=6",
      "https://www.stockvault.net/data/2019/03/11/261989/thumb16.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlTcbq_bTnbLYF5neW-ThD8anLndOaqdmFxLfyKGYylokA-pggFERHtq3QPPc0q9z7To&usqp=CAU",
    ],
  },
]);
</script>

<style scoped>
h3 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 0;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-wrap {
  padding: 4%;
  margin-bottom: 2%;
  text-align: left;
  background-color: #fff;
}

.content-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.info p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.single-img .info {
  width: calc(72% - 5px);
}

.single-img .info p {
  -webkit-line-clamp: 2;
}

.multi-imgs .info {
  width: 100%;
}

.multi-imgs .info p {
  -webkit-line-clamp: 1;
}

.info__top {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.img-wrap {
  width: calc(28% - 5px);
  height: 88px;
}

.multi-imgs {
  width: 100%;
  margin-bottom: 12px;
}

.multi-imgs .img-wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.img-wrap img {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.multi-imgs .img-wrap img {
  width: calc(33% - 6px);
}

.avatar {
  display: inline-block;
  width: 36px;
  height: 36px;
  max-width: 48px;
  min-width: 36px;
  margin-right: 8px;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar + span {
  margin-right: 1%;
}

.extra-info-wrap {
  display: flex;
  align-items: center;
  width: 400px;
  color: #bababa;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.extra-info-wrap span {
  font-size: 12px;
}
</style>
