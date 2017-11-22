<template>
    <div class="page">
        <ul class="clearfix">
            <li :class="prevClasses" @click="prev">
                <a>上一页</a>
            </li>
            <li :class="firstClasses" @click="changePage(1)">
                <a>1</a>
            </li>
            <li v-if="currentPage - 3 > 1" @click="fastPrev">
                <a>...</a>
            </li>
            <li v-if="currentPage - 2 > 1" @click="changePage(currentPage - 2)">
                <a>{{ currentPage - 2 }}</a>
            </li>
            <li v-if="currentPage - 1 > 1" @click="changePage(currentPage - 1)">
                <a>{{ currentPage - 1 }}</a>
            </li>
            <li class="active" v-if="currentPage != 1 && currentPage != allPages">
                <a>{{ currentPage }}</a>
            </li>
            <li v-if="currentPage + 1 < allPages" @click="changePage(currentPage + 1)">
                <a>{{ currentPage + 1 }}</a>
            </li>
            <li v-if="currentPage + 2 < allPages" @click="changePage(currentPage + 2)">
                <a>{{ currentPage + 2 }}</a>
            </li>
            <li v-if="currentPage + 3 < allPages" @click="fastNext">
                <a>...</a>
            </li>
            <li :class="lastClasses" v-if="allPages > 1" @click="changePage(allPages)">
                <a>{{ allPages }}</a>
            </li>
            <li :class="nextClasses" @click="next">
                <a>下一页</a>
            </li>
        </ul>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    //分页
    .page {
        text-align: center;
        margin-bottom: 50px;
        margin-top:50px;
    }
    .page ul {
        display: inline-block;
    }
    .page li {
        cursor: pointer;
        float: left;
        display: inline-block;
        width: 46px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 16px;
        border-left-width: 1px;
        border-right-width: 0;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-style: solid;
        color: @primary-color;
        border-color: @primary-color;
    }

    .page li.active, .page li:hover {
        border-top-color: @primary-color;
        border-bottom-color: @primary-color;
        background: @primary-color;
        color: #fff;
    }

    .page li.disabled {
        cursor: not-allowed;
        a {
            cursor: not-allowed;
        }
    }

    .page li.prev, .page li.next {
        width: 90px;
    }

    .page li:last-child {
        border-right-width: 1px;
    }
</style>
<script type="text/babel">
    import page from './page'
    export default {
        ...page
    }
</script>