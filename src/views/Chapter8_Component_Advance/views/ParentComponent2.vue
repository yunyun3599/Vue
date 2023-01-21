<template>
    <h2>자식 컴포넌트의 함수 호출</h2>
    <ChildComponent2 ref="child_component" />
    <button type="button" @click="callChildFunc">call child func</button>
</template>
<script>
    import ChildComponent2 from '../components/ChildComponent2.vue';
    export default {
        components: {ChildComponent2},
        methods: {
            callChildFunc() {
                this.$refs.child_component.callFromParent();
            }
        }
    }
</script>