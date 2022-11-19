<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
        <p>지역코드: {{city}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                city: "064"
            };
        }
    }
</script>