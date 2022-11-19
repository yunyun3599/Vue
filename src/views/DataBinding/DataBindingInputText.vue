<template>
    <div>
        <input type="text" v-model="valueModel"/>
        <p>{{valueModel+1}}</p>
        <input type="number" v-model.number="numberModel"/>
        <p>{{numberModel+1}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                valueModel: 'SoutKorea',
                numberModel: 1
            }
        }
    }
</script>