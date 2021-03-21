<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text"
                       placeholder="enter the name you search"
                       @keyup.enter="search" v-model="searchName"/>
                <button @click="search">Search</button>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript">
import PubSub from 'pubsub-js';

export default {
    name: "Search",
    data() {
        return {
            searchName: ''
        }
    }, methods: {
        search() {
            if (!this.searchName) return;
            console.log("=======")
            PubSub.publish("searchUser", this.searchName)
        }
    }
}
</script>

<style>

</style>
