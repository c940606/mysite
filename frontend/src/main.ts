import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia"; // 状态管理
// 全局ElementPlus
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn"; // 中文
import "element-plus/dist/index.css"; // 样式文件

const app = createApp(App);
app
  .use(createPinia())
  .use(ElementPlus, { locale: zhCn })
  .mount("#app");
