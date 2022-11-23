<template>
    <div>
        <label><input type="radio" v-bind:value="yellow" v-model="picked">Yellow</label>
        <label><input type="radio" v-bind:value="green" v-model="picked">Green</label>
        <label><input type="radio" v-bind:value="purple" v-model="picked">Purple</label>
    </div>
    <div class="container" 
    v-bind:class="{'yellow': yellow==picked, 'green': green==picked, 'purple': purple==picked}">
        배경색 바꾸기
    </div>
    <br/><br/>
</template>
<script>
    export default {
        data() {
            return {
                picked: '',
                yellow: "yellow",
                green: "green",
                purple: "purple"
            }
        }
    }
</script>
<style scoped>
    container {
        width: 100%;
        height: 50rem;
    }
    .yellow {
        background-color: yellow;
        font-weight: bold;
    }
    .green {
        background-color: green;
        font-weight: bold;
    }
    .purple {
        background-color: purple;
        font-weight: bold;
    }
</style>