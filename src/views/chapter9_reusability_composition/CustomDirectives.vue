<template>
    <div style="height:1000px;">
        <p v-pin="position">페이지 고정 영역(position:fixed;top:50px;left:100px;)</p>   <!--적용할 element는 <p>, 바인딩 할 데이터는 position -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                position: {top: 50, left: 100}
            };
        },
        directives: {
            pin: {
                mounted(el, binding) {  // 적용할 element, 바인딩할 데이터
                    el.style.position = 'fixed';
                    el.style.top = binding.value.top + 'px';
                    el.style.left = binding.value.left + 'px';
                }
            }
        },
    }
</script>