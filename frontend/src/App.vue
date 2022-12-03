<script setup lang="ts">
import { check_test } from "@/api";
import { onMounted, ref } from "vue";

const msg = ref()
onMounted(async () => {
  const { message } = await check_test();
  msg.value = message
})
</script>

<template>
  <h1>{{msg}}</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
