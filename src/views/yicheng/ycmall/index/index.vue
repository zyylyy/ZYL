<template>
    <pg-layout>
        <yc-header></yc-header>
        <!-- 大banner -->
        <zy-banner :list="sildeList"></zy-banner>
        <!-- 导航 -->
        <zy-nav></zy-nav>
        <!-- xiao广告位 -->
        <pg-wrapper>
            <zy-advertise></zy-advertise>
        </pg-wrapper>
        <pg-wrapper v-for='n in 5'>
            <zy-title>主力推荐</zy-title>
            <zy-list :list="list"></zy-list>
        </pg-wrapper>
        <pg-footer></pg-footer>
        <!-- <pg-toolbar></pg-toolbar> -->
        <pg-navbar></pg-navbar>
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