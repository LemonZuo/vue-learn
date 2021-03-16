<template>
<div>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem v-for="(comment, index) in comments" :key="index" :index="index" :comment="comment" :delComment="delComment"/>
    </ul>
  </div>
</div>
</template>

<script>
import CommentItem from "./CommentItem";
export default {
  name: "CommentList",
  // 声明属性，属性成为组件对象属性
  props: ['comments', 'delComment'],
  components: {CommentItem}
}
</script>

<style>
.reply {
  margin-top: 0px;
}

li {
  transition: .5s;
  overflow: hidden;
}
</style>
