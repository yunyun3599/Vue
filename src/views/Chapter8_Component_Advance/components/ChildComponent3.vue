<template>
    <button type="button" @click="sendMessageToParent">trigger custom event of Parent Component</button>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'message from Child Component'
            };
        },
        methods: {
            sendMessageToParent() {
                console.log("child")
                this.$emit('send-message', this.msg)    // custom event의 이름은 카멜케이스 X
            }
        }
    }
</script>