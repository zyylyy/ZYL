<template>
    <div class="breadcrumd">
        <slot></slot>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//面包屑
.breadcrumd {
    height: 45px;
    line-height: 45px;
    color: @title-color;
    font-size: 14px;
    text-indent: 2em;
    //background: url('../../assets/images/infomation-bread-bg.png') repeat-x;
    span, a {
        color: @title-color;
        font-size: 12px;
    }
    a:hover {
        color: @primary-color;
    }
}
</style>
<script type="text/babel">
    import breadcrumd from './breadcrumd'
    export default {
        ...breadcrumd
    }
</script>