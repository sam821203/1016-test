<template>
  <span class="badge" :class="checkType(type)">
    {{ badgeTitle }}
  </span>
</template>

<script setup>
import { computed, toRefs, reactive } from "vue";

const props = defineProps(["type", "title"]);
const { type, title } = toRefs(props);
const badgeTitle = computed(() => title.value.toLowerCase());
console.log(badgeTitle);

const activeFilters = reactive({
  story: true,
  unique: true,
  us: true,
});

const checkType = (type) => {
  if (type === "故事") return "story";
  if (type === "精選優質") return "unique";
  if (type === "美文") return "us";
  if (type === "日文") return "jap";
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  margin-right: 0.4rem;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: #252525;
  background-color: #ccc;
  border-radius: 4px;
  letter-spacing: 0.3px;
}
.us,
.jap {
  color: #f2a51f;
  background-color: rgba(255, 187, 69, 0.25);
}
.story {
  color: #3340d5;
  background-color: rgba(51, 64, 213, 0.25);
}

.unique {
  color: #85ef87;
  background-color: rgba(133, 239, 135, 0.35);
}
</style>
