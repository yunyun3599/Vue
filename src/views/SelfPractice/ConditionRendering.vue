<template>
    <div>
        <span>마케팅 수신 동의</span>
        <label><input type="radio" v-bind:value="true" v-model="marketing">agree</label>
        <label><input type="radio" v-bind:value="false" v-model="marketing">disagree</label>
        <h3 v-if="marketing">마케팅 수신 동의에 감사드립니다. </h3>
        <h3 v-else>마케팅 수신에 동의하시면 다양한 혜택을 받으실 수 있습니다. </h3>
        <div v-show="marketing">
            <label><input type="checkbox" v-model="recieve_list" value="e-mail">이메일</label>
            <label><input type="checkbox" v-model="recieve_list" value="message">문자 메세지</label>
            <label><input type="checkbox" v-model="recieve_list" value="kakaotalk">카카오톡</label>
            <p>동의 항목: {{recieve_list}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                marketing: false,
                recieve_list: []
            }
        }
    }
</script>