<template>
    <ul class="todo-main">
        <TaskItem v-for="(taskItem, index) in taskList"
                  :taskItem="taskItem" :updateTask="updateTask"
                  :key="index" :index="index"></TaskItem>
    </ul>
</template>

<script type="text/javascript">
import TaskItem from "./TaskItem";

export default {
    name: "TaskList",
    props: {
        taskList: {type: Array, required: true},
        updateTask: {type: Function, required: true},
        /*delTask: {type: Function, required: true}*/
    },
    components: {TaskItem}
}
</script>

<style>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
