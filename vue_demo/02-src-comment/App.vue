<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <CommentAdd :addComment="addComment"/>
      <!-- 组件传值 -->
      <CommentList :comments="comments" :delComment="delComment"/>
    </div>
  </div>
</template>

<script>
import CommentAdd from "./components/CommentAdd";
import CommentList from "./components/CommentList";
export default {
  name: "App",
  data() {
    return {
      comments: [
        {name: 'TOM', content: "Vue is very Good"},
        {name: 'Linda', content: "I Can use Vue"}
      ]
    }
  },
  components: {CommentAdd, CommentList},
  methods: {
    // 添加评论
    addComment(comment) {
      this.comments.unshift(comment)
    },
    delComment(index) {
      this.comments.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
