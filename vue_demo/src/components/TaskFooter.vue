<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="getFlag" @click="selectAll"/>
        </label>
        <span>
          <span>已完成{{ getComplete }}</span> / 全部{{ getCount }}
        </span>
        <button class="btn btn-danger" @click="delTask(1, 0)">清除已完成任务</button>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "TaskFooter",
    props: {
        taskList: {type: Array, required: true},
        delTask: {type: Function, required: true},
        selectAll: {type: Function, required: true}
    },
    data() {
        return {
            count: 0,
            complete: 0,
        }
    }, computed: {
        getCount() {
            this.count = this.taskList.length;
            return this.count;
        },
        getComplete() {
            let num = 0;
            for (let i = 0; i < this.taskList.length; i++) {
                if(this.taskList[i].flag) {
                    num++;
                }
            }
            this.complete = num;
            return this.complete;
        },
        getFlag() {
            if(this.count === 0) {
                return false;
            }
            return this.count === this.complete;
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
