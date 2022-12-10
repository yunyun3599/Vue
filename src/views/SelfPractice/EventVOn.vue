<template>
    <div>
        <div>
            <span>interval 값 세팅: </span>
            <input type="text" v-model.number="interval" />
        </div>
        <button type="button" v-on:click="increaseCounter(interval)">Add</button> &nbsp;
        <button type="button" @click="decreaseCounter(interval)">Sub</button> &nbsp;
        <button type="button" @click="(resetCounter(), alertReset())">Reset</button>
        <p>counter 값: {{counter}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter: 0,
                interval: 1
            };
        },
        methods: {
            increaseCounter(interval) {
                this.counter = this.counter + interval;
            },
            decreaseCounter(interval) {
                this.counter = this.counter - interval;
            },
            resetCounter() {
                this.counter = 0;
            },
            alertReset() {
                alert('Counter가 리셋되었습니다.')
            }
        }
    }
</script>