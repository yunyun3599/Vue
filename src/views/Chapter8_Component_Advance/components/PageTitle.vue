<template>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: "페이지 제목"
            },
            content: {
                type: String,
                default: "페이지 내용"
            }
        }
    }
</script>
