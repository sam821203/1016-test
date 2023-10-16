<template>
  <span class="badge" :class="type">
    {{ badgeTitle }}
  </span>
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps(["type", "title"]);
const { title } = toRefs(props);
console.log(title);
const badgeTitle = computed(() => title.value.toLowerCase());
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.43rem 0.8rem 0.4rem;
  margin-right: 0.4rem;
  font-size: 0.75rem;
  color: #252525;
  background-color: #ccc;
  border-radius: 4px;
  letter-spacing: 0.3px;
}

.story {
  color: #927bdb;
  background-color: rgba(199, 184, 248, 0.5);
}

.unique {
  color: #ef85cd;
  background-color: rgba(255, 193, 235, 0.35);
}

.us {
  color: #f2a51f;
  background-color: rgba(255, 187, 69, 0.25);
}
</style>
