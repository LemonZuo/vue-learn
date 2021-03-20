<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <TaskHeader @saveTask="saveTask"></TaskHeader>
                <TaskList
                    :taskList="taskList"
                    :updateTask="updateTask"></TaskList>
                <!--                <TaskFooter :taskList="taskList"
                                            :selectAll="selectAll"></TaskFooter>-->
                <TaskFooter>
                    <input type="checkbox" v-model="isAllChecked" slot="checkAll"/>
                    <span slot="complete">已完成{{ getComplete }}</span>
                    <span slot="allTask">全部{{ taskList.length }}</span>
                    <button class="btn btn-danger" v-show="getComplete" @click="del()" slot="delAll">清除已完成任务</button>
                </TaskFooter>
            </div>
        </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js';
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";
import TaskFooter from "./components/TaskFooter";
import Stroage from "./util/Stroage";

export default {
    name: "App",
    data() {
        return {
            // taskList: JSON.parse(window.localStorage.getItem("taskList") || '[]')
            taskList: Stroage.get("taskList")
        }
    },
    computed: {
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
    },
    mounted() {
        PubSub.subscribe("delTask", (msg, data) => {
            this.delTask(data.type, data.index);
        })
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
        },
        del() {
            let data = {type: 1, index: 0}
            PubSub.publish('delTask', data);
        }
    },
    watch: {
        taskList: {
            // 深度监视
            deep: true,
            handler: function (val) {
                // json数据保存到localStorage
                // window.localStorage.setItem('taskList', JSON.stringify(val));
                Stroage.set("taskList", val);
            }
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
