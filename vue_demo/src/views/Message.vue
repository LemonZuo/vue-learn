<template>
    <ul>
        <li v-for="(message, index) in messageList" :key="message.id">
            <a href="???/">{{message.title}}</a>
        </li>
    </ul>
</template>

<script type="text/javascript">
export default {
    name: "Message",
    data() {
        return {
            messageList: []
        }
    },mounted() {
        setTimeout(()=>{
            let message = [
                {id: 1, title: "message01"},
                {id: 2, title: "message02"},
                {id: 3, title: "message03"}
            ];
            this.messageList = message;
        }, 2000);
    }
}
</script>

<style>

</style>
