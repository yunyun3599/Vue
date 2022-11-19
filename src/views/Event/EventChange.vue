<template>
    <div>
        <select v-model="selectValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                selectValue: ''
            };
        },
        methods: {
            changeSelect() {
                alert(this.selectValue);
            }
        }
    }
</script>