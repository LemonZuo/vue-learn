<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <TaskHeader :saveTask="saveTask"></TaskHeader>
                <TaskList
                    :taskList="taskList"
                    :updateTask="updateTask"
                    :delTask="delTask"></TaskList>
                <TaskFooter :taskList="taskList"
                            :selectAll="selectAll"
                            :delTask="delTask"></TaskFooter>
            </div>
        </div>
    </div>
</template>

<script>
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";
import TaskFooter from "./components/TaskFooter";

export default {
    name: "App",
    data() {
        return {
            taskList: [
                {flag: true, name: 'Java'},
                {flag: false, name: 'Vue'},
                {flag: true, name: 'MySQL'}
            ]
        }
    },
    components: {TaskHeader, TaskList, TaskFooter},
    methods: {
        saveTask(value) {
            this.taskList.unshift({name: value, flag: false})
        },
        updateTask(index) {
            this.taskList[index].flag = !this.taskList[index].flag;
        },
        delTask(type, index) {
            if (type == 0) {
                // 删除单个
                this.taskList.splice(index, 1);
            } else if (type == 1) {
                // 清除全部
                this.taskList = this.taskList.filter(task => !task.flag);

            }
        },
        selectAll(check) {
            this.taskList.forEach(task => task.flag = check);
        }
    }
}
</script>

<style>
/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
