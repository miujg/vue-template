<template>
    <router-view></router-view>
</template>

<script>
    export default {
        mounted() {
            // 动态设置跟组件字体。屏幕宽度的百分之一
            document.addEventListener('DOMContentLoaded', function() {
                document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px'
            })
            window.onresize = function() {
                document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px'
            }
        }
    };
</script>

<style lang="scss">

</style>
