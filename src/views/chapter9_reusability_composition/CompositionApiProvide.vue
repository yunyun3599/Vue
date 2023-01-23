<template>
    <div>
        <h2> provide와 inject </h2>
        <composition-api-inject/>
    </div>
</template>
<script>
    import {provide} from 'vue';
    import CompositionApiInject from './CompositionApiInject.vue';
    export default {
        components: {CompositionApiInject},
        setup() {
            provide('title', 'Vue.js 공부하기')
            // provide 함수를 통해 전달할 key, value 설정
        }
    }
</script>