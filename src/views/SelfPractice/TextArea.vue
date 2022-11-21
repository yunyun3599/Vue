<template>
    <div name="text-area">
        <textarea v-model="inputText"></textarea> 
    </div>
</template>
<script>
    export default {
        data() {
            return {
                inputText: '텍스트를 입력하세요'
            }
        }
    }
</script>
