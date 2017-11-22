<template>
<pg-layout>
    <pg-header></pg-header>
    <pg-wrapper class="clearfix">
	    <pg-breadcrumd class="bread">
            <pg-breadcrumd-item href="/home">紫云来首页</pg-breadcrumd-item>
            <pg-breadcrumd-item>{{ $route.meta.title }}</pg-breadcrumd-item>
        </pg-breadcrumd>
        <div class="sideNav">
        	<div class="sideNav__title">个人中心首页</div>
        	<ul class="sideNav__list">
        		<li><router-link :to="{path: '/myOrder'}"><i class="iconfont"></i>我的订单</router-link></li>
                <li><router-link :to="{path: '/orderDetail'}"><i class="iconfont"></i>订单详情</router-link></li>
        	</ul>
        </div>
        <div class="container">
        	<transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </pg-wrapper> 
    <pg-footer></pg-footer>
</pg-layout>    
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    @import '~assets/styles/_extend';
    .sideNav{
    	float: left;
    	width: 200px;
    	background-color: #ffffff;
        &__title{
            .hl(32px);
            text-align: center;
        }
        &__list{
            a{
                display: block;
                .hl(24px);
                text-align: center;
            }
        }
    }
    .container{
    	float: right;
    	width: 900px;
    	min-height: 400px;
    }
    .fade-enter-active {
        animation: fade-in .5s
    }
    .fade-leave-active {
        opacity: 0
    }
    @keyframes fade-in {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>