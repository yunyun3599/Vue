<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>전공</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(student, i) in studentList">
                    <td>{{(i+1)}}</td>
                    <td>{{student.name}}</td>
                    <td>{{student.age}}</td>
                    <td>{{student.major}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                studentList: [
                    {"name": "Tom", age: 21, major: "Computer Science"},
                    {"name": "Emma", age: 22, major: "Medicine"},
                    {"name": "Jorge", age: 20, major: "Business"}
                ]
            }
        }
    }
</script>
<style scoped>
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 80%;
        margin: auto auto;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>