<template>
    <div class="toolbar">
        <a class="item ">
            <div class="top">
                <pg-icon name="bofang"></pg-icon>
            </div>
            <div class="text">交通指南</div>
        </a>
        <a class="item">
            <div class="top">
                <pg-icon name="bofang"></pg-icon>
            </div>
            <div class="text">游玩攻略</div>
        </a>
        <a class="item kefu"  @click="showCustomer">
            <div class="top">
                <pg-icon name="kefu"></pg-icon>
            </div>
            <div class="text">咨询客服</div>
        </a>
        <a class="item">
            <div class="top">
                <pg-icon name="liuyan"></pg-icon>
            </div>
            <div class="text">微信</div>
        </a>
        <a class="gotop" @click="scrollTop">
            返回TOP
        </a>
        <!-- 在线客服 -->
        <pg-customer :is-show="isShowCustomer" @close="showCustomer"></pg-customer>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .toolbar {
        z-index: 100;
        right: 20px;
        position: fixed;
        top: 50%;
        width: 85px; //95
        height: 381px; //458
        padding: 70px 5px 7px 5px;
        transform: translateY(-50%);
        background-image: url(../../assets/images/yicheng-toolbar-bg.png);
        font-size: 14px;
        color: #000;
        .item {
            display: block;
            height: 78px;
            //border-bottom: 1px dashed #d5d5d6;
            text-align: center;
            padding-top: 8px;
            &:hover {
                background-color: #000;
                color: @white-color;
            }
            .text {
                margin-top: 7px;
            }
            .iconfont {
                font-size: 36px;
            }
        }
        .kefu {
            border-top: 1px dashed #d5d5d6;
            border-bottom: 1px dashed #d5d5d6;
        }
        .gotop {
            display: block;
            height: 35px;
            background-color: #000;
            color: @white-color;
            line-height: 35px;
            text-align: center;
            font-size: 12px;

        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>