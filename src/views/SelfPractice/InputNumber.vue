<template>
    <div name="input-number">
        <input type="text" v-model.number="inputNumber" />
        <p>{{inputNumber+1}}</p>        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                inputNumber: 0
            }
        }
    }
</script>
