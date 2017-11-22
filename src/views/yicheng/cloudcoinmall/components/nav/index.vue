<template>
    <pg-wrapper class="nav">
        <div class="nav_container">
            <div class="nav_container_top">
                <img src="../../../../../assets/images/home_big.jpg">
                <p>登录享受多多权益</p>
                <a href="javascript:;">登录/注册</a>
            </div>
            <div class="nav_container_bottom">
                <a href="javascript:;">签到送100云币</a>
                <p>登录后，您可以：</p>
                <p>查询云币交易记录和余额；</p>
                <p>参与签到、云币兑换、云币抽奖等活动</p>
            </div>
        </div>
        <img src="../../../../../assets/images/clound_money.png" height="344" width="1190">
    </pg-wrapper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .nav {
        margin-top: -450px;
        z-index: 10;
        p {
            margin: 0;
        }
        .nav_container {
            height: 420px;
            width: 300px;
            padding: 15px 0;
            text-align: center;
            .nav_container_top {
                width: 300px;
                height: 240px;
                background-color: #333;
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin: 15px 0;
                }
                p {
                    height: 18px;
                    line-height: 18px;
                    font-size: 14px;
                    color: #999;
                }
                a {
                    width: 160px;
                    height: 40px;
                    display: inline-block;
                    line-height: 40px;
                    margin: 16px auto 0;
                    font-size: 14px;
                    border: 1px solid #fff;
                    box-sizing: border-box;
                    color: #fff;
                    border-radius: 10px;
                }
            }
            .nav_container_bottom {
                width: 300px;
                height: 180px;
                padding-top: 18px;
                box-sizing: border-box;
                background-color: #fff;
                a {
                    width: 240px;
                    height: 50px;
                    display: inline-block;
                    line-height: 50px;
                    margin: 0 auto 10px;
                    background-color: #80338f;
                    font-size: 18px;
                    color: #fff;
                    border-radius: 10px;
                    cursor: pointer;
                }
                p {
                    height: 24px;
                    line-height: 24px;
                    font-size: 14px;
                    color: #333;
                    padding-left: 30px;
                    text-align: left;
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