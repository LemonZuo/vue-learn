<template>
    <div>
        <h2>Home</h2>
        <ul class="nav nav-tabs">
            <router-link to="/home/news">news</router-link>
            <router-link to="/home/message">message</router-link>
        </ul>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "Home"
}
</script>

<style>

</style>
