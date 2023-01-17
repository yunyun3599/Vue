<template>
    <input type="text" v-model="inputTitle" />
    <input type="text" v-model="inputContent" />
    <PageTitle v-bind:title="inputTitle" :content="inputContent"/>
    <SubComponent :bool_val="bool_val" :list_val="list_val" v-bind:obj="obj" :name="obj.name"/>
    <!-- v-bind:의 약어가 : 임 -->
</template>
<script>
    import PageTitle from "../components/PageTitle.vue"
    import SubComponent from "../components/SubComponent.vue"
    export default {
        data() {
            return {
                inputTitle: "제목 입력",
                inputContent: "내용 입력",
                bool_val: false,
                list_val: [11, 12, 13],
                obj: {
                    name: "Elsa",
                    age: "25"
                }
            }
        },
        components: {PageTitle, SubComponent}
    }
</script>
