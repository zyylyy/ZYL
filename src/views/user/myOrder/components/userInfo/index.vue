<template>
    <div class="userInfo">
        <div class="userInfo__hd"><div class="userInfo__avatar"></div></div>
        <div class="userInfo__bd">
            <div class="userInfo__name">用户名称</div>
            <div class="userInfo__desc">
                <p>我是云币：765 <a href="">兑换记录</a></p>
                <p>注册时间：2016-12-24</p>
            </div>
        </div> 
        <div class="userInfo__ft">
            <div class="userInfo__bind">
                <i class="iconfont"></i>
                <span>手机号码绑定<br>已绑定 <a href="">修改</a></span>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .userInfo {
        padding: 20px;
    	height: 60px; 
        background-color: #ffffff;
        margin-bottom: 20px; 
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        p{
            margin: 0;
        }
        &__bd {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
        }
        &__avatar{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 20px;
            overflow: hidden;
        }
        &__name,&__desc{
            line-height: 20px;
        }
        &__bind{
            i,span{
                display: inline-block;
                vertical-align: middle;
                line-height: 20px;
            }
            i{
                width: 20px;
                height: 20px;
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