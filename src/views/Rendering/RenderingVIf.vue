<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
        <label><input type="radio" v-bind:value="A" v-model="type"/>A</label>
        <label><input type="radio" v-bind:value="B" v-model="type"/>B</label>
        <label><input type="radio" v-bind:value="C" v-model="type"/>C</label>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                type:'A',
                A: 'A',
                B: 'B',
                C: 'C'
            };
        }
    }
</script>