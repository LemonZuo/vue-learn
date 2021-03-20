<template>
    <li>
        <label>
            <input type="checkbox" v-model="taskItem.flag" @click="updateTask(index)"/>
            <span>{{ taskItem.name }}</span>
        </label>
        <button class="btn btn-danger"
                v-show="taskItem.flag" @click="del(index)">删除</button>
    </li>
</template>

<script type="text/javascript">
import PubSub from 'pubsub-js';
export default {
    name: "TaskItem",
    props: {
        taskItem: {type: Object, required: true},
        updateTask: {type: Function, required: true},
        index: {type: Number, required: true}
    }, methods: {
        del(index) {
            let data = {type: 0, index: index}
            PubSub.publish('delTask', data);
        }
    }
}
</script>

<style>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>
