<template>
  <div>
    <li class="list-group-item">
      <div class="handle">
        <a href="javascript:;" @click="del(index)">删除</a>
      </div>
      <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
      <p class="centence">{{comment.content}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: Object,
    delComment: {type: Function, required: true},
    index: Number
  },methods: {
    del(index) {
      this.delComment(index);
    }
  }
}
</script>

<style>
.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
