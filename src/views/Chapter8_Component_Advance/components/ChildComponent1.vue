<template>
    <button type="button" @click="childFunc(this.msg)" ref="btn">child button</button>
</template>
<script>
    export default {
        data() {
            return {
                msg: "Child"
            }
        },
        methods: {
            childFunc(msg) {
                alert(msg + " 컴포넌트에서 발생시킨 이벤트")
                this.msg = "Child"
            }
        }
    }
</script>
