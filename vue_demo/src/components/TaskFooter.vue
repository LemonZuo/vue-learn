<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isAllChecked"/>
        </label>
        <span>
          <span>已完成{{ getComplete }}</span> / 全部{{ taskList.length }}
        </span>
        <button class="btn btn-danger" v-show="getComplete" @click="delTask(1, 0)">清除已完成任务</button>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "TaskFooter",
    props: {
        taskList: {type: Array, required: true},
        delTask: {type: Function, required: true},
        selectAll: {type: Function, required: true},
    }
    , computed: {
        getComplete() {
            return this.taskList.reduce((pre, cur) => pre + (cur.flag ? 1 : 0), 0);
        },
        isAllChecked: {
            get() {
                return this.getComplete === this.taskList.length && this.taskList.length > 0;
            },
            set(value) {
                this.selectAll(value);
            }
        }
    }
}
</script>

<style>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
