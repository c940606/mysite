<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="store.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in state.routers">
        <!-- 二级标题 -->
        <template v-if="item.children">
          <el-sub-menu :index="item.path">
            <template #title>
              <el-icon :class="`el-icon-ali-${item.meta.icon}`" />
              <span>{{ item.meta.title }}</span>
            </template>

            <template v-for="subItem in item.children">
              <el-menu-item :index="subItem.path">
                <el-icon :class="`el-icon-ali-${subItem.meta.icon}`" />
                <template #title>{{ subItem.meta.title }}</template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级标题 -->
        <template v-else>
          <el-menu-item :index="item.path">
            <el-icon :class="`el-icon-ali-${item.meta.icon}`" />
            <template #title>{{ item.meta.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { getLocal } from "@/request/auth";
import { useStore } from "@/stores";
import { computed, onBeforeMount, onMounted, reactive, ref } from "vue";
import {
  useRoute,
  useRouter,
  type RouteRecordRaw,
  type _RouteRecordBase,
} from "vue-router";

const store = useStore(); // 状态管理
const route = useRoute(); // 操作路由
const router = useRouter(); // 全局路由

// 当前路由
const onRoutes = computed(() => {
  return route.path;
});

const state = reactive({
  routers: [] as any,
  roles: getLocal("role") as string, // 得到权限标志
});

onBeforeMount(() => {
  router.options.routes.forEach((item: RouteRecordRaw) => {
    // console.log(item, item.name);
    // 判断是否是需要展示的页面
    if (item.name == "Layout") {
      item.children?.map((child: any) => {
        let newChild = { ...child }; // 不要修改原始路由
        console.log(newChild);
        // 判断二级路由是否有权限
        if (child.children) {
          let sub: RouteRecordRaw[] = [];
          child.children?.map((subChild: any) => {
            // if (subChild.meta.roles?.includes(state.roles)) {
            if (true) {
              sub.push(subChild);
              return;
            }
          });
          newChild.children = sub;
        }

        // 判断是否有权限
        // if (child.meta.roles.includes(state.roles)) {
        if (true) {
          state.routers.push(newChild);
          return;
        }
      });

      return;
    }
  });
});
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 220px;
}

.sidebar > ul {
  height: 100%;
}
</style>
