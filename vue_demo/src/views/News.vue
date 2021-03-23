<template>
    <ul>
        <li v-for="(news, index) in newsList" :key="index">{{ news }}</li>
    </ul>
</template>

<script type="text/javascript">
export default {
    name: "News",
    data() {
        return {
            newsList: [
                "message01",
                "message02",
                "message03",
            ]
        }
    }
}
</script>

<style>

</style>
