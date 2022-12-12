<template>
    <br><br>
    <input type="text" v-model="firstName" />
    <div>Concat variable: {{(firstName + ' ' + lastName)}}</div>
    <div>Concat by function: {{getFullName()}}</div>
    <div>Concat by Computed: {{fullName}}</div>
    <div>Concat by Watch: {{fullNameByWatch}}</div>
</template>
<script>
    export default {
        data() { 
            return {
                firstName: 'Andy',
                lastName: 'Park',
                fullNameByWatch: ''
            };
        },
        methods: {
            getFullName() {
                return this.firstName + ' ' + this.lastName;
            }
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName;
            }
        },
        watch: {
            firstName() {
                this.fullNameByWatch = this.firstName + ' ' + this.lastName;
            },
            lastName() {
                this.fullNameByWatch = this.firstName + ' ' + this.lastName;
            }
        }
    }
</script>