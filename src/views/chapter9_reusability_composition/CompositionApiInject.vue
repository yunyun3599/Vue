<template>
    <h3>{{ title }}</h3>
</template>
<script>
    import {inject} from 'vue';
    export default {
        setup() {
            const title = inject('title');
            // inject를 이용해 provide에서 정의한 key로 데이터를 전달 받음
            return {title}
        }
    }
</script>