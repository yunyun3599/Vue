<template>
    <h2>{{ bool_val }}</h2>
    <p>{{ list_val }}</p>
    <div :key="i" v-for="(value, i) in list_val">
        <p>{{ value }}</p>
    </div>
    <p>{{ obj }}</p>
    <p>{{ name }}</p>
</template>
<script>
    export default {
        props: {
            bool_val: {
                type: Boolean,
                default: true
            },
            list_val: {
                type: Array,
                default: () => [1, 2, 3]
            },
            obj: {
                type: Object,
                default: () => {
                    return {
                        name: "Olaf",
                        age: 1
                    }
                }
            },
            name: {
                type: String,
                default: "Olaf"
            }
        }
    }
</script>
