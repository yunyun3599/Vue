<template>
    <ProvideInjectChild />
</template>
<script>
    import ProvideInjectChild from '../components/ProvideInjectChild.vue';
    export default {
        components: {ProvideInjectChild},
        data() {
            return {
                items: ['parent_a', 'parent_b']
            };
        },
        provide() {
            return {
                itemLength: this.items.length,
                items: this.items
            };
        }

    }
</script>