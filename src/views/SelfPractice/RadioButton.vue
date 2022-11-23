<template>
    <div>
        <label><input type="radio" v-bind:value="blackCode" v-model="picked">Black</label>
        <label><input type="radio" v-bind:value="greenCode" v-model="picked">Green</label>
        <label><input type="radio" v-bind:value="purpleCode" v-model="picked">Purple</label>
        <label><input type="radio" v-bind:value="redCode" v-model="picked">Red</label>
        <p>Color code is {{picked}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                picked: '',
                blackCode: "#000000",
                greenCode: "#008000",
                purpleCode: "#800080",
                redCode: "#FF0000"
            };
        }
    }
</script>