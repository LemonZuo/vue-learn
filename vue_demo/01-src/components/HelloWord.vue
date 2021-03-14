<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
// 向外暴露配置对象
export default {
  name: 'HelloWord',
  data(){
    return {
      msg: "Hello Vue component"
    }
  }
}
</script>

<style>
  .msg {
    color: darkturquoise;
    font-size: 20px;
  }
</style>
