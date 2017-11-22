<template>
	<pg-layout>
        <yc-header></yc-header>
        <pg-wrapper>
            <div class="cloudcoinmall_detail">
                <!-- 面包屑 -->
                <pg-breadcrumd class="bread">
                        <pg-breadcrumd-item href="/home">紫云来首页</pg-breadcrumd-item>
                        <pg-breadcrumd-item href="/yicheng">商城</pg-breadcrumd-item>
                        <!-- <pg-breadcrumd-item>{{goodsInfo.name}}</pg-breadcrumd-item> -->
                        <pg-breadcrumd-item>商品名称</pg-breadcrumd-item>
                    </pg-breadcrumd>
                    <!-- 商品详情 -->
                    <div class="detail_box clearfix">
                        <div class="goods_left left">
                            <!-- 原生幻灯片 -->
                            <div class="div_parent">
                                <!-- <img src="currentImgUrl" style="width: 100%;"> -->
                                <img src="../../../../assets/images/clound_detail_01.jpg" style="width: 100%;height: 100%">
                            </div>
                            <div class="div_child clearfix">
                                <ul class="ul_buttom">
                                    <!-- <li v-if="index < 6" v-for="(url, index) in goodsInfo.subImgUrls" :class="{'active-on' : currentImgIndex == index }"  @click="showImg(index)">
                                        <img :src="url">
                                    </li> -->
                                    <li>
                                        <img src="../../../../assets/images/clound_detail_01.jpg" style="width: 100%;height: 100%">
                                    </li>
                                    <li>
                                        <img src="../../../../assets/images/clound_detail_01.jpg" style="width: 100%;height: 100%">
                                    </li>
                                    <li>
                                        <img src="../../../../assets/images/clound_detail_01.jpg" style="width: 100%;height: 100%">
                                    </li>
                                    <li>
                                        <img src="../../../../assets/images/clound_detail_01.jpg" style="width: 100%;height: 100%">
                                    </li>
                                    <li>
                                        <img src="../../../../assets/images/clound_detail_01.jpg" style="width: 100%;height: 100%">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="goods_right left clearfix">
                            <!-- 商品标题 -->
                            <!-- <div class="title clearfix">{{goodsInfo.name}}</div> -->
                            <div class="title clearfix">[西湖龙井] 商品标题商品标题商品标题商品标题 商品 标题商品商品标题 商品标题商品</div>
                            <!-- 颜色选择 -->
                            <div class="color_select clearfix">
                                <div class="left res">颜色</div>
                                <ul class="left clearfix">
                                    <li class="active">
                                        <a href="javascript:void(0)">红色</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">黄色</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">黑色</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- 规格选择 -->
                            <div class="color_select clearfix">
                                <div class="left res">规格</div>
                                <ul class="left clearfix">
                                    <li class="active">
                                        <a href="javascript:void(0)">300*300</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">600*600</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">900*900</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- 数量选择 -->
                            <div class="num">
                                <div class="res left">数量</div>
                                <a href="javascript:;">-</a>
                                <input type="number">
                                <a href="javascript:;">+</a>
                            </div>
                            <!-- 立即购买 -->
                            <div class="shopping">
                                <a href="javascript:;" class="exchange">立即兑换</a>
                            </div>
                            <!-- 活动说明 -->
                            <div class="explain">
                                <div class="explain_title">活动说明:</div>
                                <ul>
                                    <li>1.云币超值兑换 2017纪念版文化衫</li>
                                    <li>2.云币超值兑换 2017纪念版文化衫</li>
                                    <li>3.兑换流程：点击活动页面“立即兑换</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </pg-wrapper>
        <pg-footer></pg-footer>
        <pg-yicheng></pg-yicheng>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
	.cloudcoinmall_detail {
		padding-top: 70px;
		margin-bottom: 300px;
		.bread {
			height: 48px;
			line-height: 48px;
			font-size: 12px;
			color: #666;
			text-indent: 0;
		}
		.detail_box {
			.goods_left {
				margin-right: 40px;
				width: 500px;
				height: 590px;
				.div_parent {
					width: 500px;
					height: 500px;
					box-sizing: border-box;
					border: 1px solid #ccc;
					margin-bottom: 10px;
				}
				.div_child {
					width: 500px;
					.ul_buttom {
						width: 500px;
						height: 80px;
						overflow: hidden;
						li {
							width: 80px;
							height: 80px;
							float: left;
							margin-right: 10px;
							border: 1px solid #ccc;
							box-sizing: border-box;
						}
					}
				}
			}
			.goods_right {
				width: 650px;
				.title {
				    width: 650px;
				    color: #3c3c3c;
				    font-size: 20px;
				    font-weight: 700;
				    line-height: 1.5;
				    margin-bottom: 40px;
				}
				.color_select {
					margin-bottom: 20px;
					ul {
						width: 600px;
						max-height:200px;
						li {
							margin-bottom:10px;
							display: inline-block;
                            margin-right: 10px;
                            padding: 0 10px;
                            height: 32px;
                            border: 2px solid #ccc;
                            line-height: 32px;
                            text-align: center;
                            a {
                                padding: 0 8px;
                                color: #333;
                                font-size: 12px;
                                display: block;
                            }
						}
					}
				}
				.num {
                    height: 32px;
                    font-size: 0;
                    margin-bottom: 25px;
                    a {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        font-size: 26px;
                        color: #666;
                        border: 1px solid #ccc;
                        vertical-align: top;
                        &:nth-of-type(1) {
                            border-right: none;
                        }
                        &:nth-of-type(2) {
                            border-left:none;
                        }
                    }
                    input {
                        box-sizing: border-box;
                        display: inline-block;
                        text-align: center;
                        line-height: 30px;
                        width: 50px;
                        font-size: 14px;
                        color:#3c3c3c;
                        padding: 0;
                        border: 1px solid #ccc;
                        vertical-align: top;
                    }
                }
                .shopping {
                	height: 70px;
                	width: 650px;
                	border-bottom: 1px dashed #e6e6e6;
                	.exchange {
                		width: 160px;
                		height: 50px;
                		line-height: 50px;
                		display: block;
                		border-radius: 10px;
                		text-align: center;
                		color: #fff;
                		font-size: 16px;
                		background-color: #80338f;
                	}
                }
                .explain {
					width: 650px;
					padding-top: 10px;
					.explain_title,li {
						height: 22px;
						line-height: 22px;
						font-size: 12px;
					}
					.explain_title {
						color: #666;
					}
					li {
						color: #999;
					}
                }
			}
		}
		.res {
		    font-size: 12px;
		    margin-right: 20px;
		    line-height: 32px;
		    color:#999;
		}
		.active {
        	border: 2px solid #80338f!important;
        }
	}
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>