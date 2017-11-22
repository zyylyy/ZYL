<template>
    <div>
        <div class="footer clearfix">
            <div class="qustion left">
                <p>常见问题</p>
                <ul class="clearfix">
                    <li>
                        <a href="javascript:;">什么是云币？</a>
                    </li>
                </ul>
            </div>
            <div class="concern_us right">
                <p>关注我们</p>
                <img src="../../../../../assets/images/concern.png">
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .footer {
        margin-top: 10px;
        padding: 25px;
        background-color: #fff;
        .qustion {
            width: 400px;
            p {
                text-align: left;
            }
            ul {
                margin-top: 14px;
                li {
                    width: 180px;
                    height: 30px;
                    line-height: 30px;
                    margin-right: 20px;
                    float: left;
                    a {
                        width: 100%;
                        display: inline-block;
                        color: #999;
                        font-size: 14px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        .concern_us {
            width: 130px;
            height: 165px;
            img {
                width: 100%;
                height: 131px;
                margin-top: 10px;
            }
        }
        p {
            height: 24px;
            line-height: 24px;
            margin: 0;
            color: #333;
            font-size: 16px;
            font-weight: bolder;
            text-align: center;
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>