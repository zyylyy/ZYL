<template>
	<div class="orderTab">
        <div class="orderTab__hd"><div class="orderTab__title">采购订单：</div></div>
        <div class="orderTab__bd">
            <ul class="orderTab__list clearfix">
                <li v-for="(item,index) in list" :key="item.value" :class="{active: activeIndex == index}" @click="click(item,index)">{{item.text}}</li>
            </ul>
        </div>
        <div class="orderTab__ft">
            <select>
                <option value="0">全部商城</option>
            </select>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .orderTab{ 
        height: 40px;  
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        &__bd{
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
        }
        &__ft{
            select{
                height: 30px;
            }
        }
        &__title{
            padding: 0 20px;
        }
        &__list{
            li{
                float: left;
                position: relative;
                padding: 0 20px;
                line-height: 40px;
                //font-size: 18px;
                cursor: pointer;
            }
            .active{
                color: red;
                &:after{
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: red;
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