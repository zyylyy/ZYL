<template>
    <pg-layout>
        <yc-header></yc-header>
        <pg-wrapper class="mallList">
            <pg-breadcrumd class="bread">
                <pg-breadcrumd-item href="/yicheng">懿城首页</pg-breadcrumd-item>
                <pg-breadcrumd-item href="/ycmall">商城</pg-breadcrumd-item>
                <pg-breadcrumd-item >分类名称</pg-breadcrumd-item>
            </pg-breadcrumd>
            <div class="sort">
            	<div class="title">排序：</div>
            	<a href="javascript:void(0)" class="active">
            		<span>默认排序</span>
            	</a>
            	<a href="javascript:void(0)">
            		<span>销量</span>
            		<pg-icon name="fanhuidingbu"></pg-icon>
            	</a>
            	<a href="javascript:void(0)">
            		<span>价格</span>
            		<pg-icon name="fanhuidingbu"></pg-icon>
            	</a>
            </div>
            <zy-list :list="list"></zy-list>
            <pg-page :total="total" :pageSize="query.pageSize" @on-change="changePage"></pg-page>
            <!-- 右侧导航 -->
            <pg-navbar></pg-navbar>
        </pg-wrapper>
        <pg-footer></pg-footer>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .mallList {
    	.sort {
			font-size: 14px;
			color:@text-color;
			height: 30px;
			padding: 15px 20px;
			background-color: @white-color;
			.title {
				display: inline-block;
				margin-right: 30px;
			}
			a {
				display:inline-block;
				width: 80px;
				text-align: center;
				line-height: 30px;
				height: 30px;
				border: 1px solid #d7d7d7;
				color: @text-color;
				margin-right: 12px;
				&.active {
					color: @primary-color;
				}
			}
    	}
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>