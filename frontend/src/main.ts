import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia"; // 状态管理

import router from "./router"; // 路由
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css

// 全局ElementPlus
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn"; // 中文
import "element-plus/dist/index.css"; // 样式文件
import "@/assets/css/icon.css"; // 阿里云图标
const app = createApp(App);
app
  .use(vue3videoPlay)
  .use(createPinia())
  .use(router)
  .use(ElementPlus, { locale: zhCn })
  .mount("#app");
