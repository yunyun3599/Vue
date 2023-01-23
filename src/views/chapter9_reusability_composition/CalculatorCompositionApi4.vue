<template>
    <div>
        <h2>Calculator Composition API4</h2>
        <div>
            <input type="text" v-model="num1" />
            <span> + </span>
            <input type="text" v-model="num2" />
            <span> = </span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>
<script>
    import { plusCalculator } from './Common';
    export default {
        name: 'calculator-composition-api4',
        setup() {
            let {num1, num2, result} = plusCalculator();
            return {num1, num2, result}
        }
    }
</script>