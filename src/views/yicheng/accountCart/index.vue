<template>
    <pg-wrapper>
        <div  v-if="isLogin" class="addressDiv">
            <div class="headDiv">
                <span>收货地址</span>
                <a>管理收货地址</a>
            </div>
            <div style="clear:both;"></div>
            <div class="addAddress" style="display:none">
                <ul class="addressLists">
                    <li class="">
                        
                    </li>
                </ul>
            </div>
            <ul v-if="addressList.length==0" class="addressLists">
                <li  class="address" v-for="one in addressList" :class="{active: checkAddress == one.name}" @click="check(one.name)">
                    <div class="user">
                        <span class="name">{{one.name}}</span>
                        <span class="">{{one.moble}}</span>
                    </div>
                    <div class="driver">
                        {{one.address}}
                    </div>
                </li>
            </ul>
            <ul v-else class="addressLists">
                <li  class="addAddress" @click="showBox">
                        
                </li>
            </ul>
            <div style="clear:both;"></div>
        </div>
        <div class="goods">
            <div class="headDiv">
                <span>确认订单信息</span>
                <!-- <a>返回购物车修改</a> -->
                <router-link :to="{ path : '/shopCart'}">返回购物车修改</router-link>
            </div>
            <div style="clear:both;"></div>
            <table class="goodsList">
                <thead>
                    <th class="goodsInfo">商品信息</th>
                    <th>单位（元）</th>
                    <th>数量</th>
                    <th>小计（元）</th>
                </thead>
                <tbody>
                    <tr v-for="goods in tableList">
                        <td class="goodsInfo">
                            <img src="./test.png">
                            <div class="goodsDetail">
                                <span class="name" id="name">{{goods.info}}</span>
                                <div>
                                    <label for="color" v-if="goods.color !=''">颜色 ：</label>
                                    <span style="margin-right:20px;"  v-if="goods.color !=''" class="goodColor" id="color">{{goods.color}}</span>
                                    <label v-if="goods.size !=''" for="size">规格 ：</label>
                                    <span v-if="goods.size !=''" class="goodSize" id="size">{{goods.size}}</span>
                                </div>
                            </div>
                        </td>
                        <td class="price">799</td>
                        <td>1</td>
                        <td class="account">799云币</td>
                    </tr>
                </tbody>
            </table>
            <div class="goodsNoteInfo">
                <div class="inputInof">
                    <input value="" placeholder="若需要延迟发货请备注具体日期">
                </div>
                <div class="detail">
                    <ul>
                        <li>
                        <span style="color:red">1</span>件商品,
                        <label for="color" >商品总额 ：</label>
                        <span class="number" id="color">1000</span>
                        </li>
                        <li>
                        <label  for="size">运费 ：</label>
                        <span class="number" id="size">10</span>
                        </li>
                        <li>
                        <label  for="size">优惠活动 ：</label>
                        <span class="number" id="size">10</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="judge">
            <div>
                <label>应付金额 ：</label>
                <span>7999</span>
                <a>去结算</a>
            </div>
            
        </div>
        <new-address :show="modalShow" @closeModal="showBox"></new-address>
    </pg-wrapper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .addressDiv{
        .headDiv{
            width:100%;
            margin-top:65px; 
           
            span{
                font-size: 19px;
                font-weight: 400;
                float: left;
            }
            a{
                float: right;
                color: #5485e9;
            }
            clear:both;
        }
        .addressLists{
            width: 100%;
             margin-top: 10px;
            
            .address{
                width: 242px;
                height: 98px;
                margin-right: 18px;
                float: left;
                background:url(../../../assets/images/shopCart_address.png);
                margin-bottom: 18px;
                padding: 21px;
                .user{
                    padding-bottom: 14px;
                    display: flex;
                    span{
                        flex: 1;
                        font-size: 16px;
                        font-weight: 400;
                    }
                    
                    border-bottom: solid 1px #eaeaea;
                }
                .driver{
                    margin-top: 14px;
                    font-size: 14px;
                }
            }
            .addAddress{
                width: 242px;
                height: 98px;
                margin-right: 18px;
                float: left;
                margin-bottom: 18px;
                padding: 21px;
                background: white;
                border-radius: 4px;
            }
            .active{
                background:url(../../../assets/images/shopCart_address_check.png);
            }
            .address:nth-last-of-type(3){
                margin-right: 0px;
            }
        }
    }
    .goods{
        width: 100%;
        .headDiv{
            width:100%;
            margin-top:52px; 
           
            span{
                font-size: 19px;
                font-weight: 400;
                float: left;
            }
            a{
                float: right;
                color: #5485e9;
            }
            clear:both;
        }
        .goodsList{
            width: 100%;
            border-spacing: 0px;
            thead{
                background-color: #f2f2f2;
                height: 38px;
                th{
                    padding: 0px;
                    font-size: 12px;
                    line-height: 38px;
                }
                .goodsInfo{
                    width: 433px;
                }
            }
            tbody{
                background: white;
                tr{
                    text-align: center;
                    td{
                        padding: 20px 30px;
                    }
                    .goodsInfo{
                        display: flex;
                        text-align:-webkit-auto;
                        .goodsDetail{
                            flex: 1;
                            margin-left: 10px;
                            font-size: 12px;
                            #name{
                                font-weight: 800;
                            }
                            div{
                                margin-top: 15px;
                                color:#999;
                            }
                        }
                    }
                    .price{
                        font-size: 10px;
                        font-weight: 800;
                    }
                    .account{
                        font-size: 10px;
                        font-weight: 800;
                        color: red;
                    }
                    
                }
            }

        }
        .goodsNoteInfo{
            background:#fafafa;
            color:#999;
            display: flex;
            height: 154px;
            .inputInof{
                flex: 1;
                input{
                    height:20px;
                    background: white;
                    line-height: 20px;
                    width: 483px;
                    padding: 5px 10px;
                    margin: 30px 0  0 32px;
                }
            }
            .detail{
                flex: 1;
                text-align: right;
                font-size: 12px;
                ul{
                    margin: 38px 15px 0 0;
                    li{
                        margin-bottom: 19px;
                        .number{
                            width: 162px;
                            display: inline-block;
                        }
                    }
                }
                
            }
        }
    }
    .judge{
        height: 135px;
        div{
            float: right;
            margin-top: 27px;
            label{
                font-size: 16px;
            }
            span{
                font-size: 20px;
                font-weight: 800;
                color: red;
            }
            a{
                font-size: 20px;
                text-align: center;
                line-height: 50px;
                display: inline-block;
                width: 160px;
                height: 50px;
                background: @primary-color;
                color: white;
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