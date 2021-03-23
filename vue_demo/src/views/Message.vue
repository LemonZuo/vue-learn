<template>
    <div>
        <ul>
            <li v-for="(message, index) in messageList" :key="message.id">
                <router-link :to="`/home/message/messageDetail/${message.id}`">{{ message.title }}</router-link>
            </li>
        </ul>
        <hr>
        <div>
            <router-view></router-view>
        </div>
    </div>

</template>

<script type="text/javascript">
export default {
    name: "Message",
    data() {
        return {
            messageList: []
        }
    }, mounted() {
        setTimeout(() => {
            let message = [
                {id: 1, title: "message01"},
                {id: 2, title: "message02"},
                {id: 3, title: "message03"}
            ];
            this.messageList = message;
        }, 500);
    }
}
</script>

<style>

</style>
