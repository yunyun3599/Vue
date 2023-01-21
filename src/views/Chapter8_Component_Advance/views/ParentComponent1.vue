<template>
    <h2>자식 컴포넌트의 이벤트 트리거</h2>
    <button type="button" @click="triggerChildButtonClick" ref="btn">parent button</button>
    <ChildComponent1 ref="child_component" />
</template>
<script>
    import ChildComponent1 from '../components/ChildComponent1.vue';
    export default {
        components: {ChildComponent1},
        methods: {
            triggerChildButtonClick() {
                this.$refs.child_component.msg = "Parent"
                this.$refs.child_component.$refs.btn.click();
            }
        }
    }
</script>