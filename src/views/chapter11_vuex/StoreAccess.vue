<template>
    <p> Count: {{ count }}</p>
    <button type="button" @click="increment">Increment</button>
    <p>cartCount: {{ cartCount }}</p>
    <p>cartNum: {{ cartNum }}</p>
    <button type="button" @click="addCart">Add Cart</button>
</template>
<script>
    export default {
        computed: {
            count() {
                return this.$store.state.count;
            },
            cartNum() {
                return this.$store.state.cart.length;
            },
            cartCount() {
                return this.$store.getters.cartCount;
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment');
            },
            addCart() {
                this.$store.commit('addCart');
            }
        }
    }
</script>