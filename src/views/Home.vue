<template>
  <main>
    <div v-for="article in articlesData" :key="article.id" class="card-wrap">
      <h3>{{ article.title }}</h3>
      <div class="content-wrap">
        <div class="info">
          <div class="info__top">
            <div class="avatar">
              <img :src="article.avatarUrl" alt="" />
            </div>
            <span>{{ article.author }}</span>
            <span>{{ article.datePosted }}</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corporis amet, totam facere, aspernatur sunt ea magnam quidem
            ratione modi pariatur nobis rem, consectetur recusandae sint
            reprehenderit libero nihil natus?
          </p>
        </div>
        <div class="img-wrap">
          <img :src="article.imageUrl" alt="" />
        </div>
      </div>
      <div class="extra-info-wrap">
        <BaseBadge
          v-for="cat in article.categories"
          :key="cat"
          :type="cat"
          :title="cat"
        />
        <span>點讚 231</span>
        <span>收藏 231</span>
        <span>評論 231</span>
        <span>觀看 231</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue";

const articlesData = reactive([
  {
    id: new Date().getTime(),
    title: "我好像為什麼事情很悲唉",
    author: "張杰楷",
    datePosted: new Date().toLocaleDateString("en-US"),
    categories: ["故事", "精選優質", "美文"],
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    imageUrl:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
]);
</script>

<style scoped>
.card-wrap {
  padding: 1.5% 3%;
  text-align: left;
  border: 1px solid #eee;
  border-radius: 6px;
}

.content-wrap {
  display: flex;
  justify-content: space-between;
}

.info {
  width: calc(80% - 10px);
}

.info p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info__top {
  display: flex;
  align-items: center;
  text-align: left;
  /* line-height: 40px; */
}

.img-wrap {
  width: calc(20% - 10px);
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar {
  display: inline-block;
  width: 4%;
  height: 4%;
  max-width: 52px;
  min-width: 40px;
  margin-right: 1%;
}

.avatar + span {
  margin-right: 1%;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.extra-info-wrap {
  display: flex;
  color: #bababa;
}
</style>
