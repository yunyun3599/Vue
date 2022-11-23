<template>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</template>
<script>
    export default {
        data() {
            return {
                styleObject: {
                    color: 'blue',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                }
            };
        }
    }
</script>