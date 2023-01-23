<script>
    import mixin from './mixin'
    export default {
        mixins: [mixin],
        mounted() {
            console.log('컴포넌트 mounted');
        },
        unmounted() {
            console.log('컴포넌트 unmounted');
        }
    }
</script>