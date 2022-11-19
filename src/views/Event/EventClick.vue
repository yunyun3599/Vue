<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <button type="button" @click="setCounter(7)">Set 7</button>
        <button type="button" @click="setCounter(0), showResetMsg()">Reset</button>
        <p>The counter is {{counter}}</p>
        <p v-show="reset">counter is reset to 0</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter: 0,
                reset: false
            };
        },
        methods: {
            increaseCounter() {
                this.counter = this.counter + 1;
                this.reset= false;
            },
            setCounter(counter) {
                this.counter = counter;
                this.reset= false;
            },
            showResetMsg() {
                this.reset = true;
            }
        }
    }
</script>
