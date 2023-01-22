<template>
    <div style="border: 1px solid black">
        <p>In Grandchild</p>
        <p>injected data length: {{ this.itemLength }}</p>
        <p>injected data: {{ this.items }}</p>
    </div>
</template>
<script>
    export default {
        inject: ['itemLength', 'items']
    }
</script>