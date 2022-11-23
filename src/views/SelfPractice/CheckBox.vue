<template>
    <label><input type="checkbox" v-model="color" value="#000000">Black</label>
    <label><input type="checkbox" v-model="color" value="#008000">Green</label>
    <label><input type="checkbox" v-model="color" value="#800080">Purple</label>
    <label><input type="checkbox" v-model="color" value="#FF0000">Red</label>
    <p>Color code is {{color}}</p>
</template>
<script>
    export default {
        data() {
            return {
                color: []
            };
        }
    }
</script>
