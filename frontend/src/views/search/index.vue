<template>
  <div>
    <el-input
      placeholder="请输入搜索关键词"
      @keyup.enter="search"
      v-model="keyword"
    ></el-input>
    <el-button type="primary" @click="search">搜索</el-button>
    {{ state.search_content }}
    <el-table :data="results" v-if="results.length > 0">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
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
  state.search_content = data;
};
</script>

<style scoped></style>
