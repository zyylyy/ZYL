<template>
	<pg-layout>
    <pg-header></pg-header>
        <!-- banner -->
        <zy-banner :list="sildeList"></zy-banner>
        <pg-wrapper>
            <!-- 紫云来家族 -->
            <zy-family></zy-family>
            <!-- 新闻 -->
            <zy-media :list="newsList"></zy-media>
            <!-- 懿城 -->
            <zy-city></zy-city>
            <!-- 国际茶都 -->
            <!-- <zy-tea></zy-tea> -->
            <!-- 机构介绍 -->
            <zy-introduction></zy-introduction>
            <zy-mall></zy-mall>
        </pg-wrapper>
        <pg-footer></pg-footer>
        <pg-toolbar></pg-toolbar>
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