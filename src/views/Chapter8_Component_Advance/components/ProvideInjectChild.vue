<template>
    <div style="border: 1px solid black">
        <p>In Child</p>
        <ProvideInjectGrandchild/>
    </div>
</template>
<script>
    import ProvideInjectGrandchild from './ProvideInjectGrandchild.vue';
    export default {
        components: {ProvideInjectGrandchild},
    }
</script>