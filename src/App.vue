<!--
 * @Description: Copyright
 * @Author: 简艾
 * @Email: 137333@163.com
 * @Date: 2017-12-15 16:51:10
 * @LastEditTime: 2024-07-30 19:37:31
 * @LastEditors: 简艾
-->

<script setup lang="ts">
import MainTop from "./components/main-top.vue";
import MainContent from "./components/main-content.vue";
import Controller from "./components/controller.vue";
import Tip from "./components/tip.vue";
import Copyright from "./components/copyright.vue";
</script>

<template>
  <main class="air-conditioner-vue">
    <MainTop />
    <Tip />
    <MainContent />
    <Controller />
    <Copyright />
  </main>
</template>

<style scoped lang="scss">
.air-conditioner-vue {
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 1.5rem 10px 10px;
}
</style>
