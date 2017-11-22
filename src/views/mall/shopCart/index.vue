<template>
    <pg-layout>
        <pg-header></pg-header>
    	<pg-wrapper class="shopCart">
    		<div class="top">全部商品 6</div>
            <div class="content clearfix">
                <table>
                    <thead class="table_header">
                        <th class="detail detail_title">商品信息</th>
                        <th>单位（元）</th>
                        <th>数量</th>
                        <th>小计（元）</th>
                        <th>操作</th>
                    </thead>
                    <tbody>
                        <tr v-for="n in 4">
                            <td  class="detail clearfix">
                                <input type="checkbox" class="left checkbox">
                                <a href="javascript:void(0)" class="clearfix">
                                <div class="img_box left">
                                    <img src="../../../assets/images/goodsdetail_small_img.png" height="80" width="80" alt="">
                                </div>
                                <div class="desc left">
                                    <div class="title">[西湖龙井] 品牌标题品牌 品牌标题品牌标题 品牌标题</div>
                                    <div class="size">
                                        <span>规格：300*300</span>
                                    </div>
                                </div>
                                </a>
                            </td>
                            <td class="lineheight_80">799</td>
                            <td>
                                <pg-input-number @change="changeInputNumber"></pg-input-number>
                            </td>
                            <td class="lineheight_80 red">799</td>
                            <td>
                                <a href="javascript:void(0)" class="lineheight_80 del">删除</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="bottom clearfix">
                <div class="left">
                    <span class="select">
                        <input type="checkbox" id='selectall'>
                        <label for="selectall">全选</label>
                    </span>
                    <!-- <a href="javascript:void(0)">继续购物</a> -->
                    <router-link :to="{ path : '/mall'}">继续购物</router-link>
                    <a href="javascript:void(0)">清空选中宝贝</a>
                    <a href="javascript:void(0)">已选商品<span class="red"> 6 </span>件</a>
                </div>
                <div class="right">
                    <span>合计（不含配送安装费）：</span>
                    <span class="red">¥ <span>799.00</span></span>
                    <!-- <a href="javascript:void(0)">去结算</a> -->
                    <router-link :to="{ path : '/accountCart'}">去结算</router-link>
                </div>
            </div>
    	</pg-wrapper>
        <pg-footer></pg-footer>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .shopCart {
    	padding: 100px 0;
        font-size: 12px;
        color: @text-color;
        .top {
            font-size: 18px;
            color: @primary-color;
        }
        .content {
            margin: 20px 0;
            table {
                border-collapse:collapse;
                th,td {
                    width: 210px;
                    text-align: center;
                }
                .detail {
                    width: 360px;
                    text-align: left;
                    padding-left: 20px;
                }
                .detail_title {
                    padding-left: 50px;
                }
                .table_header {
                    background-color: #f2f2f2;
                    height: 40px;
                }
                thead {
                    height: 40px;
                    th {
                        height: 40px;
                        font-weight: 100;
                    }
                }
                tbody {
                    background-color: @white-color;
                    tr {
                        border-bottom: 1px dashed #e6e6e6;
                        td {
                            padding: 20px 0;
                            .checkbox {
                                margin-top: 35px;
                                margin-right: 20px;
                            }
                            .img_box {
                                width: 80px;
                                height: 80px;
                                margin-right: 10px;
                                img {
                                    width: 100%;
                                }
                            }
                            .desc {
                                line-height: 2;
                                width: 220px;
                                color: @text-color;
                                .title {
                                    color: @title-color;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bottom {
            margin-top: 20px;
            height: 50px;
            padding: 0 20px;
            background-color: @white-color;
            .right {
                .red {
                    font-size: 14px;
                    span {
                        font-size: 24px;
                    }
                }
                a {
                    display: inline-block;
                    width: 110px;
                    height: 50px;
                    text-align: center;
                    background-color: @primary-color;
                    color: @white-color;
                    font-size: 18px;
                    margin-left: 20px;
                    margin-right: -20px;
                }
            }
            .select {
                input {
                    margin-right: 20px;
                    vertical-align: middle;
                }
            }
            a {
                display: inline-block;
                line-height: 50px;
                padding: 0 25px;
                color: @text-color;
            }
        }
    }
    .lineheight_80 {
        line-height: 80px;
    }
    .red {
        color: @danger-color;
    }
    .del {
        color: @title-color;
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>