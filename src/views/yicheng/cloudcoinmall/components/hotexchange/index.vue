<template>
    <div class="hotexchange">
        <div class="hotexchange_top">
            <div class="hotexchange_title">热门兑换</div>
        </div>
        <ul class="hotexchange_list">
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                <img src="../../../../../assets/images/commend_product3.png">
                    <div class="describe_box">
                        <p>商务皮质笔记本</p>
                        <p>2000云币</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    p {
        margin: 0;
    }
    .hotexchange {
        background-color: #fff;
        text-align: center;
        color: #333;
        .hotexchange_top {
            height: 100px;
            padding-top: 65px;
            .hotexchange_title {
                height: 46px;
                line-height: 46px;
                font-size: 30px;
                width: 250px;
                margin: 0 auto;
                background: url("../../../../../assets/images/commend_title-bg.png") 0 0 no-repeat;
            }
        }
        .hotexchange_list {
            width: 100%;
            height: 600px;
            border-left: 1px solid #f0f0f0;
            overflow: hidden;
            padding-bottom: 50px;
            li {
                height: 270px;
                width: 20%;
                float: left;
                padding: 0 10px;
                border: 1px solid #f0f0f0;
                border-left: none;
                box-sizing: border-box;
                margin-bottom: 30px;
                a {
                    width: 100%;
                    height: 100%;
                    display: block;
                    img {
                        width: 100%;
                        height: 195px;
                    }
                    p {
                        &:first-of-type {
                            height: 30px;
                            line-height: 30px;
                            text-align: left;
                            font-size: 14px;
                            font-weight: bolder;
                            color: #333;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        &:last-of-type {
                            height: 38px;
                            line-height: 38px;
                            text-align: left;
                            font-size: 18px;
                            font-weight: bolder;
                            color: #80338f;
                        }
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