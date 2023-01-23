<template>
    <div>
        <calculator-basic />
        <calculator-composition-api />
        <calculator-composition-api-2 />
        <calculator-composition-api-3 />
        <calculator-composition-api-4 />
        <composition-api-provide />
        <component-mixin-hook />
        <broad-custom-directives />
        <custom-directives />
    </div>
</template>
<script>
    import CalculatorBasic from './CalculatorBasic.vue';
    import CalculatorCompositionApi from './CalculatorCompositionApi.vue';
    import CalculatorCompositionApi2 from './CalculatorCompositionApi2.vue';
    import CalculatorCompositionApi3 from './CalculatorCompositionApi3.vue';
    import CalculatorCompositionApi4 from './CalculatorCompositionApi4.vue';
    import CompositionApiProvide from './CompositionApiProvide.vue';
    import ComponentMixinHook from './ComponentMixinHook.vue';
    import BroadCustomDirectives from './BroadCustomDirectives.vue';
    import CustomDirectives from './CustomDirectives.vue';
    export default {
        components: { 
            CalculatorBasic, 
            CalculatorCompositionApi, 
            CalculatorCompositionApi2,
            CalculatorCompositionApi3,
            CalculatorCompositionApi4,
            CompositionApiProvide,
            ComponentMixinHook,
            BroadCustomDirectives,
            CustomDirectives
         }
    }
</script>