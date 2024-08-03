<!--
 * @Description: Copyright
 * @Author: 简艾
 * @Email: 137333@163.com
 * @Date: 2017-12-15 16:51:10
 * @LastEditTime: 2024-07-30 19:37:31
 * @LastEditors: 简艾
-->

import { createApp } from "vue";
import { createPinia } from "pinia";
import directivesList from "@/directives/index";
import App from "./App.vue";

import "normalize.css";
import "@/assets/css/base.scss";
import "@/assets/css/snackbar.css";

const app = createApp(App);

app.use(createPinia());
Object.keys(directivesList).forEach(key => {
  // 注册所有自定义指令
  app.directive(key, directivesList[key]);
});

app.mount("#air-conditioner-vue");
