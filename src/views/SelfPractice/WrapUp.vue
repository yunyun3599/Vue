<template>
    <div>
        <HtmlVue></HtmlVue>
        <InputTextVue></InputTextVue>
        <InputNumberVue></InputNumberVue>
        <TextAreaVue></TextAreaVue>
    </div>
</template>
<script>
import HtmlVue from './HtmlVue.vue';
import InputTextVue from './InputText.vue';
import InputNumberVue from './InputNumber.vue';
import TextAreaVue from './TextArea.vue';
    export default {
        data() {
        },
        components: {HtmlVue, InputTextVue, InputNumberVue, TextAreaVue}
    }
</script>
