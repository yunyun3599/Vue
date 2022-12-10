<template>
    <div>
        <select v-model="selectedOption" @change="alertChange">
            <option value="First">First</option>
            <option value="Business">Business</option>
            <option value="Economy">Economy</option>
        </select>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selectedOption: 'First'
            };
        },
        methods: {
            alertChange() {
                alert(this.selectedOption+"가 선택되었습니다.")
            }
        }
    }
</script>