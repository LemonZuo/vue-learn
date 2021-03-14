<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!-- 3、使用组件标签 -->
    <HelloWord/>
  </div>
</template>

<script>
// 1、引入组件
import HelloWord from "./components/HelloWord.vue"

export default {
  name: 'App',
  // 2、映射组件标签
  components: {HelloWord}
}
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
}
</style>
