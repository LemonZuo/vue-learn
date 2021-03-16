<template>
  <div>
    <div class="col-md-4">
      <form class="form-horizontal">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" class="form-control" placeholder="用户名" v-model="name">
        </div>
        <div class="form-group">
          <label>评论内容</label>
          <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentAdd",
  props: {
    // 属性名： {属性值类型；属性必要性}
    addComment: {type: Function, required:true}
  },
  data() {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add() {
      let name = this.name.trim();
      let content = this.content.trim();
      if (!name || !content) {
        alert("姓名或内容不能为空");
        return
      }
      // 收集录入数据，封装对象
      let comment = {
        name: name,
        content: content
      }
      // 添加comments
      this.addComment(comment);
      this.name = '';
      this.content = '';
    }
  }
}
</script>

<style scoped>

</style>
