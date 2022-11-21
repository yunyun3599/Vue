<template>
    {{htmlString}}
    <div v-html="htmlString"></div>
</template>
<script>
    export default {
        data() {
            return {
                htmlString: '<div style="display:inline-block;">\
                    <h1 style="background-color:#EEDC9A;">여러 요소 종합적으로 사용해보기</h1>\
                    </div>'
            }
        }
    }
</script>
