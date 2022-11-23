<template>
    <div>
        <HtmlVue></HtmlVue>
        <InputTextVue></InputTextVue>
        <InputNumberVue></InputNumberVue>
        <TextAreaVue></TextAreaVue>
        <SelectVue></SelectVue>
        <CheckBoxVue></CheckBoxVue>
        <RadioButtonVue></RadioButtonVue>
        <ImgVue></ImgVue>
        <ClassBindingVue></ClassBindingVue>
        <InlineStyleVue></InlineStyleVue>
    </div>
</template>
<script>
import HtmlVue from './HtmlVue.vue';
import InputTextVue from './InputText.vue';
import InputNumberVue from './InputNumber.vue';
import TextAreaVue from './TextArea.vue';
import SelectVue from './SelectVue.vue';
import CheckBoxVue from './CheckBox.vue';
import RadioButtonVue from './RadioButton.vue';
import ImgVue from './ImgVue.vue';
import ClassBindingVue from './ClassBinding.vue';
import InlineStyleVue from './InlineStyle.vue';
    export default {
        data() {
        },
        components: {HtmlVue, 
            InputTextVue, 
            InputNumberVue, 
            TextAreaVue,
            SelectVue,
            CheckBoxVue,
            RadioButtonVue,
            ImgVue,
            ClassBindingVue,
            InlineStyleVue
        }
    }
</script>
