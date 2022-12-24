<template>
  <div class="body">
    <!-- 用户信息、访问量、语言详情、待办事项 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <!-- 用户信息 -->
        <el-card class="mgb20" style="height: 252px">
          <div class="user-info">
            <img :src="userInfo.image" class="user-avator" />
            <div class="user-info-cont">
              <div class="user-info-name">{{ userInfo.name }}</div>
              <div>
                <el-icon size="16" class="el-icon-ali-id" />
                {{ state.identity }}
              </div>
            </div>
          </div>
          <div class="user-info-list">
            <!-- 最后更新时间：{{ dateFunction(userInfo.update_time) }} -->
          </div>
          <div class="user-info-list">当前登录地址：{{ userInfo.address }}</div>
        </el-card>

        <!-- 语言详情 -->
        <el-card style="height: 250px">
          <template #header>
            <div class="clearfix">
              <span>语言使用详情</span>
            </div>
          </template>

          <!-- 进度条 -->
          <el-table
            :show-header="false"
            :data="state.langDetails"
            class="language"
          >
            <el-table-column width="100">
              <template #default="scope">{{ scope.row.title }}</template>
            </el-table-column>

            <el-table-column style="width: calc(100% - 140px)">
              <template #default="scope">
                <el-progress
                  :percentage="scope.row.percentage"
                  :color="scope.row.color"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <!-- 访问量、消息、数量、待办 -->
      <el-col :span="16">
        <!-- 访问量、消息、数量 -->
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <el-icon class="grid-con-icon"><user-filled /></el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">{{ state.visitNum }}</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <el-icon class="grid-con-icon"><list /></el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">{{ state.todoNum }}</div>
                  <div>待办事项</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <el-icon class="grid-con-icon"><promotion /></el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">{{ state.requestNum }}</div>
                  <div>请求次数</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 待办 -->
        <el-card style="height: 402px">
          <template #header>
            <div class="clearfix">
              <span>待办事项</span>
              <el-button
                size="small"
                style="float: right"
                type="primary"
                @click="state.showDialog = true"
                >添加</el-button
              >
            </div>
          </template>

          <el-table
            :show-header="false"
            :data="state.todoList"
            style="width: 100%"
          >
            <el-table-column width="40">
              <template #default="scope">
                <el-checkbox
                  v-model="scope.row.status"
                  @change="modifyTodo(scope.$index)"
                />
              </template>
            </el-table-column>

            <!-- 待办内容 -->
            <el-table-column>
              <template #default="scope">
                <div
                  class="todo-item"
                  :class="{ 'todo-item-del': scope.row.status }"
                >
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { getLocal } from "@/request/auth";
import { UserInfo } from "@/types";
import { reactive } from "vue";
import { RolesEnum, State } from ".";

// 缓存的用户信息
// const userInfo: UserInfo = reactive(JSON.parse(getLocal("userInfo")));
const userInfo: UserInfo = reactive({
  id: 1,
  name: "zxiaosi",
  image: "https://avatars.githubusercontent.com/u/26485327?v=4",
  address: "北京市海淀区",
  update_time: "2021-08-01 00:00:00",
});

const state: State = reactive({
  identity: RolesEnum[getLocal("role")], // 角色权限
  langDetails: [], // 语言使用详情
  todoList: [], // 待办列表
  visitNum: 0, // 访问量
  todoNum: 0, // 待办数
  requestNum: 0, // 请求次数
  showDialog: false, // 待办添加弹框
  todoText: "", // 待办文本
});

/**
 * 勾选待办事项
 */
const modifyTodo = async (index: number) => {
  //   await updateTodo({ id: index });
  //   await getData();
};
</script>

<style scoped>
/* 屏幕最小宽度 */
.body {
  min-width: 1500px;
}

.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 112px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.el-icon-ali-id {
  font-size: 16px;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

/* 语言使用详情 */
.language {
  width: 100%;
  margin-top: -8px;
}

.mgb20 {
  margin-bottom: 20px;
}

.clearfix {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
</style>
