<template>
    <div>
        <h2>자식 컴포넌트에서 부모 컴포넌트로 이벤트 / 데이터 전달</h2>
        <ChildComponent3 @send-message="sendMessage"/>
    </div>
</template>
<script>
    import ChildComponent3 from '../components/ChildComponent3.vue';
    export default {
        components: {ChildComponent3},
        methods: {
            sendMessage(data) {
                alert(data);
            }
        }
    }
</script>