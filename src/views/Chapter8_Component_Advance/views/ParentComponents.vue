<template>
    <div>
        <ParentComponent1 />
        <br/><br/><br/><br/>
        <ParentComponent2 />
        <br/><br/><br/><br/>
        <parent-component-3/>
        <br/><br/><br/><br/>
        <parent-component-4/>
    </div>
</template>
<script>
    import ParentComponent1 from './ParentComponent1.vue';
    import ParentComponent2 from './ParentComponent2.vue';
    import ParentComponent3 from './ParentComponent3.vue';
    import ParentComponent4 from './ParentComponent4.vue';
    export default {
        components: {ParentComponent1, ParentComponent2, ParentComponent3, ParentComponent4}
    }
</script>