<template>
    <v-sidebar />
    <div class="content-box">
      <div class="content">
        <router-view v-slot="{ Component }">
          <keep-alive :include="tagsList">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
</template>

<script setup>
import vSidebar from '@/components/sidebar.vue';
</script>

<style scoped>
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}

</style>