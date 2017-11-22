<template>
    <pg-layout>
        <yc-header></yc-header>
    	<!-- 轮播图 -->
        <banner></banner>
        <pg-wrapper>
            <!-- 登陆注册nav -->
            <clound-nav></clound-nav>
            <!-- 推荐兑换 -->
            <commend></commend>
            <!-- 热门兑换 -->
            <hot-exchange></hot-exchange>
            <!-- 底部常见问题 -->
            <cl-footer></cl-footer>
        </pg-wrapper>
        <pg-footer></pg-footer>
        <pg-yicheng></pg-yicheng>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';

</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>