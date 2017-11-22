<template>
    <div class="toolbar">
        <div class="toolbar_bg">
            <div class="customer" @click="showCustomer">
                <pg-icon name="kefu"></pg-icon>
                <span class="title">咨询客服</span>
            </div>
            <router-link class="words" :to="{path: '/words'}">
                <pg-icon name="zaixianliuyan"></pg-icon>
                <span class="title">在线留言</span>
            </router-link>
            <div class="top">
                <span class="top_btn" @click="scrollTop">返回TOP</span>
            </div>
        </div>
        <div class="toolbar_log_bg clearfix">
            <router-link class="log left" :to="{path: '/login'}">
            </router-link>
            <router-link class="register right" :to="{path: '/register'}">
            </router-link>
        </div>
        <!-- 在线客服 -->
        <pg-customer :is-show="isShowCustomer" @close="showCustomer"></pg-customer>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .toolbar {
        z-index: 99;
        position: fixed;
        right: 20px;
        top: 50%;
        width: 128px;
        transform: translateY(-50%);
        &_bg {
            width: 128px;
            height: 233px;
            background: url(../../assets/images/toolbar_bg.png) no-repeat;
            .customer, .words, .top {
                cursor: pointer;
                display: block;
                width: 100%;
                color: @primary-color;
                text-align: center;
                padding: 0 20px;
                box-sizing: border-box;
                padding-top: 12px;
                i {
                    display: block;
                    font-size: 40px;
                }
                .title {
                    margin: 0 auto;
                    width: 70px;
                    padding-bottom: 6px;
                    display: block;
                    font-size: 14px;
                    font-weight: bold;
                    border-bottom: 2px dashed @primary-color;
                }
            }
            .top_btn {
                display: block;
                height: 34px;
                line-height: 34px;
                font-size: 14px;
                background: @primary-color;
                color: #fff;
            }
        }
        &_log_bg {
            margin: 0 auto;
            width: 119px;
            height: 45px;
            margin-top: 10px;
            background: url(../../assets/images/toolbar_log_bg.png) no-repeat;
            .log, .register {
                width: 58px;
                display: inline-block;
                height: 45px;
            }
        }
    }
</style>

<script type="text/babel">
    import toolbar from './toolbar'
    export default {
        ...toolbar
    }
</script>