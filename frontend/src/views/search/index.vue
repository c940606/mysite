<template>
  <div>
    <div class="search">
      <el-input
        placeholder="请输入搜索关键词"
        @keyup.enter="search"
        v-model="keyword"
      ></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>

    {{ state.search_content }}
    <el-table :data="state.results" v-if="state.results.length > 0">
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="link" label="link" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { search_content } from "@/api";
import { reactive, ref } from "vue";
import type { stateType } from ".";
const keyword = ref("");

const state: stateType = reactive({
  search_content: { search: "你好" },
  results: [],
});

const results = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const search = async () => {
  const { data } = await search_content({ search: keyword.value });
  console.log("search", data);
  state.results = data;
};
</script>

<style scoped>
#search {
  max-width: 800px;
  position: relative;
  margin: 0 auto;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  word-wrap: break-word;
  color: #282a2d;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
  margin-right: auto !important;
  margin-left: auto !important;
  max-width: 800px;
  position: relative;
}

.search > el-input {
  /* flex-shrink: 0;
  width: 300px; */
  margin-right: 20px;
}
</style>
