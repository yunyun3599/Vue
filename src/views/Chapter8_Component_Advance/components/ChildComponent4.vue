<template>
    <input type="text" v-model="msg"/>
    <br/>
</template>
<script>
    export default {
        data() {
            return {
                msg: '자식 컴포넌트의 데이터'
            };
        }
    }
</script>