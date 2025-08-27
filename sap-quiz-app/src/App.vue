<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: var(--el-text-color-primary);
  overflow-x: auto;
}

#app {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;
}

/* 确保Element Plus组件正常显示 */
.el-card {
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-container {
  width: 100%;
}

/* 确保响应式布局 */
@media screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}
</style>
