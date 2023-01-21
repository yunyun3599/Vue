<template>
    <div>
        <h2>자식 컴포넌트의 데이터 옵션 값 동기화</h2>
        <ChildComponent4 ref="child"/>
        <button type="button" @click="checkChildData">check child data</button>
    </div>
</template>
<script>
import ChildComponent4 from '../components/ChildComponent4.vue';
    export default {
        components: {ChildComponent4},
        computed: {
            msg() {
                return this.$refs.child.msg;
            }
        },
        methods: {
            checkChildData() {
                alert("child data: " + this.msg)
            }
        }
    }
</script>