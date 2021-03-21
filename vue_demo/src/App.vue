<template>
    <div>
        <div v-if="!repoName">Loding</div>
        <div v-else>
            <a :href="repoUrl" target="_blank">{{repoName}}</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "App",
    data() {
        return {
            repoUrl: '',
            repoName: ''
        }
    },
    mounted() {
        axios({
            type: 'GET',
            url: 'https://api.github.com/search/repositories?q=vue&sort=stars',
        }).then(response=> {
            let result = response.data
            this.repoName = result.items[0].name
            this.repoUrl = result.items[0].owner.html_url
        }).catch(error => {
            alert("请求失败");
        })
    }
}
</script>

<style>
</style>
