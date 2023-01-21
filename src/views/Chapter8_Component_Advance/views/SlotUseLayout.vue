<template>
    <slot-layout>
        <template v-slot:header>
            <h1>Title in Header</h1>
        </template>
        <template v-slot:default>
            <p> Content </p>
        </template>
        <template v-slot:footer>
            <p> footer </p>
        </template>
    </slot-layout>
</template>
<script>
    import SlotLayout from '../components/SlotLayout.vue';
    export default {
        components: {SlotLayout}
    }
</script>