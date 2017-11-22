<template>
    <pg-layout>
        <pg-header></pg-header>
        <pg-wrapper>
            <div class=" clearfix">
                <div class="title">
                    列表渲染
                </div>
                <pg-demo :title="title" :list="demoList"></pg-demo>
                <div class="title">
                    Icon
                </div>
                <div>
                    <pg-icon name="zhengquetishi"></pg-icon>
                </div>
                <div class="title">
                    hud
                </div>
                <div>
                    <a href="javascript:void(0)" @click="hud('loading')">加载中</a>
                    <a href="javascript:void(0)" @click="hud('success')">成功</a>
                    <a href="javascript:void(0)" @click="hud('error')">错误</a>
                </div>
                <div class="title">
                        分页组件
                </div>
                    <pg-page :total="total" @on-change="changePage"></pg-page>
                <div class="title">
                        面包屑
                </div>
                    <pg-breadcrumd>
                        <pg-breadcrumd-item href="/demo">Home</pg-breadcrumd-item>
                        <pg-breadcrumd-item href="/home">Page</pg-breadcrumd-item>
                        <pg-breadcrumd-item href="/login">Breadcrumd</pg-breadcrumd-item>
                    </pg-breadcrumd>
                <div class="title">
                        数量加减
                </div> 
                    <pg-input-number @change="changeInputNumber"></pg-input-number>
                <div class="title">
                        步骤条
                </div>
                    <pg-steps :active="stepActive">
                        <pg-step title="步骤一" description="这是文字介绍1"></pg-step>
                        <pg-step title="步骤二" description="这是文字介绍2"></pg-step>
                        <pg-step title="步骤三" description="这是文字介绍3"></pg-step>
                    </pg-steps>
                    <a href="javascript:void(0)" @click="stepChange">下一步</a>
                    <div class="title">
                        图片
                    </div>
                    <h2>接口返回的数据有img地址的img标签都替换为pg-img标签</h2>
            </div>
        </pg-wrapper>
        <pg-footer></pg-footer>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .title {
        font-size: 30px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
