<template>
    <div>
        <select v-model="hexcode">
            <option value="#000000">Black</option > 
            <option value="#008000">Green</option > 
            <option value="#800080">Purple</option>
            <option value="#FF0000">Red</option>
        </select>
        <p>선택된 색상 코드: {{hexcode}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                hexcode: "#000000"
            }
        }
    }
</script>
