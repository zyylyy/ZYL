<template>
    <pg-wrapper>
        <div class="content">
            <div class="msg">
                订单提交成功，您的订单将于<span class="time">111111</span>后取消，请尽快完成支付
            </div>
            <div class="payMoney">
                应付金额：<span>￥7999</span>
            </div>
        </div>
        <div class="typeDiv">
            <div class="title">
                支付方式
            </div>
            <div class="head">
                <span>支付平台</span>
            </div>
            <ul class="payType">
                <li>
                    <input type="radio" name="paytype" value="1" id="zhifubao" pay="zhifubao">
                    <label class="zhifubao" for="zhifubao"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                 <!-- <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>
                <li>
                    <input type="radio" name="paytype" value="2" id="wechat" pay="wechat">
                    <label class="wechat" for="wechat"></label>
                </li>  -->
            </ul>
            <div class="clear"></div>
            <div class="footer">
                <span>
                    去结算
                </span>
            </div>
        </div>
    </pg-wrapper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
        .clear{
            clear: both;
        }
        .content{
            width: 100%;
            height: 63px;
            background: white;
            margin-top: 62px;
            font-size: 15px;
            padding: 20px 0;
            .msg{
                float: left;
                width:40%;
                margin-left: 50px;
                line-height: 63px;
                height: 63px;
                .time{
                    color: red;
                }
            }
            .payMoney{
                float: right;
                width:20%;
                margin-right: 50px;
                line-height: 63px;
                height: 63px;
                span{
                    font-size: 21px;
                    color: red;
                }
            }

        }
        .typeDiv{
            width: 100%;
            margin-top: 60px;
            height: 475px;
            .title{
                font-size: 19px;
            }
            .head{
                margin-top:20px;
                font-size: 13px;
                height: 47px;
                line-height: 47px;
                background-color: #f6f6f6;
                span{
                    display: inline-block;
                    width: 136px;
                    height: 43px;
                    background: white;
                    border-top: solid 2px #80338f;
                    text-align: center;
                }
            }
            .payType{
                background: white;
                padding:40px 0 0 40px;
                min-width: 1150px;
                float: left;
                li{ 
                    margin: 0 51px 42px 0;
                    float: left;
                    input{
                        height: 27px;
                        line-height: 27px;
                    }
                    label{
                        margin-left: 10px;
                        display: inline-block;
                    }
                    .zhifubao{
                        height: 27px;
                        width: 94px;
                        background: url("../../../../assets/images/zhifubao_accountCart.png") no-repeat;
                    }
                    .wechat{
                        height: 27px;
                        width: 94px;
                        background: url("../../../../assets/images/wechat_accountCart.png") no-repeat;
                    }
                }
            }
            .footer{
                margin-top: 18px;
                span{
                    display: block;
                    width: 121px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    font-size: 18px;
                    color: white;
                    background: #80338f;
                    border-radius: 5px;
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