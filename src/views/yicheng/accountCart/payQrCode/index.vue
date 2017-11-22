<template>
    <pg-wrapper>
        <div class="head">
            <a>
                < 选择其它支付方式
            </a>
        </div>
        <div class="middle">
            <div class="content">
                <div class="msg">
                    <div class="money">
                        <span class="number">
                            ￥799
                        </span>
                        <span>
                            应付金额
                        </span>
                    </div>
                    <div class="detail">
                        <div>
                            <label>
                                创建时间：
                            </label>
                            <span>
                                2016-07-09 16:00:00 
                            </span>
                        </div>
                        <div class="phone">
                            <label>
                                热线电话：
                            </label>
                            <span>
                                4054526465
                            </span>
                        </div>
                    </div>
                </div>
                <div class="code">
                    <img src="">
                    <a>
                       <span>请使用微信扫一扫扫描二维码支付</span> 
                    </a>
                </div>
            </div>
        </div>
    </pg-wrapper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
        .clear{
            clear: both;
        }
        .head{
            width: 100%;
            margin-top: 50px;
            a{
                color:#4f82e9;
            }
        }
        .middle{
            width: 760px;
            height: 320px;
            background: white;
            margin: 55px auto;
            padding: 100px 120px;
            .content{
                display: flex;
                .msg{
                    height: 331px;
                    text-align: center;
                    .money{
                        width: 292px;
                        font-size: 14px;
                        border-bottom: 1px dashed #e6e6e6;
                        margin-top: 45px;
                        span{
                            display: block;
                            margin-bottom: 26px;
                        }
                        .number{
                            color: red;
                            font-size: 30px;
                        }
                    }
                    .detail{
                        font-size: 14px;
                        div{
                            margin-top: 50px;
                        }
                        .phone{
                            span{
                                font-size: 18px;
                                font-weight: 700;
                            }
                        }
                    }
                }
                .code{
                    margin-left: 98px;
                    img{
                        width: 261px;
                        height: 261px;
                        display: block;
                    }
                    a{
                        color: white;
                        width: 260px;
                        height: 60px;
                        display: block;
                        margin-top: 10px;
                        background: url("../../../../assets/images/zhifu_payQrCode.png") no-repeat;
                        padding-top: 4px;
                        span{
                            display: block;
                            margin:10px 100px;
                            width: 118px;
                            font-size: 14px;
                        }
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