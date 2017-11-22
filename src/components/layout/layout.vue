<template>
    <div class="pg-layout">
        <slot></slot>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .pg-layout {
        width: 100%;
        max-width: @max-base;
        position: relative;
        margin: 0 auto;
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgLayout'
    }
</script>