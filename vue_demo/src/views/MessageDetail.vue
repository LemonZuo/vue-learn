<template>
    <ul>
        <li>id:{{messageDetail.id}}</li>
        <li>title:{{messageDetail.title}}</li>
        <li>content:{{messageDetail.content}}</li>
    </ul>
</template>

<script type="text/javascript">
export default {
    name: "MessageDetail",
    data() {
        return {
            allMessage: [
                {id: 1, title: "message01", content: "message01-content"},
                {id: 2, title: "message02", content: "message02-content"},
                {id: 3, title: "message03", content: "message03-content"}
            ],
            messageDetail: {}
        }
    }, mounted() {
        let id = this.$route.params.id;
        this.messageDetail = this.allMessage.find(detail => detail.id == id)
    }, watch: {
        $route: function (value) {
            let id = value.params.id;
            this.messageDetail = this.allMessage.find(detail => detail.id == id)
        }
    }
}
</script>

<style>

</style>
