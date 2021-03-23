<template>
    <div>
        <h2 v-show="isEmpty">请输入关键字进行检索</h2>
        <div v-show="loding">Loding</div>
        <div class="row" v-show="!isEmpty">
            <div class="card" v-for="user in userList">
                <a :href="user.url" target="_blank">
                    <img :src="user.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{ user.name }}</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Pubsub from 'pubsub-js';
import axios from 'axios';

export default {
    name: "Main",
    data() {
        return {
            isEmpty: true,
            loding: false,
            userList: []
        }
    }, mounted() {
        Pubsub.subscribe("searchUser", (msg, data) => {
            this.loding = true;
            this.isEmpty = false;
            this.userList = [];
            axios({
                type: 'GET',
                url: 'https://api.github.com/search/users',
                params: {
                    q: data
                }
            }).then(response => {
                let result = response.data;
                this.userList = result.items.map(item => ({
                    url: item.html_url,
                    avatar_url: item.avatar_url,
                    name: item.login
                }))
                // this.userList = response.data;
                this.loding = false;

            }).catch(error => {
                this.loding = false;

            })
        })
    }
}
</script>

<style>
.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>
