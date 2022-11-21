<template>
    <div name="input-text">
        <input type="text" v-model="inputData" />
        <p>{{inputData+1}}</p>        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                inputData: '입력받을 데이터'
            }
        }
    }
</script>
