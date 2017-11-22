<template>
    <pg-layout class="bg">
        <yc-header></yc-header>
	    <pg-wrapper class="goodsDetail">
	        <pg-breadcrumd class="bread">
	            <pg-breadcrumd-item href="/yicheng">懿城首页</pg-breadcrumd-item>
	            <pg-breadcrumd-item href="/ycmall">商城</pg-breadcrumd-item>
	            <pg-breadcrumd-item>分类名称</pg-breadcrumd-item>
	        </pg-breadcrumd>
	        <div class="content clearfix">
	        	<div class="content_left left">
	        		<div class="main_img">
	        			<img src="../../../../assets/images/goodsdetail_big_img.png" height="500" width="500" alt="">
	        		</div>
	        		<div class="small_img clearfix">
	        			<div class="pic left active" v-for="n in 5">
	        				<img src="../../../../assets/images/goodsdetail_small_img.png" height="80" width="80" alt="">
	        			</div>
	        		</div>
	        	</div>
	        	<div class="content_right right">
	        		<div class="title clearfix">
	        			<div class="left">
	        				[西湖龙井] 商品标题商品标题商品标题商品标题 商品标题商品商品标题 商品标题商品      
						</div>
	        			<div class="right">
	        				<pg-icon name="zhengquetishi"></pg-icon>
	        				<span> 收藏 1234</span>
	        			</div>
	        		</div>
	        		<div class="price">
	        			<span class="red"><span>¥ </span>80.69 </span>
	        			<span class="gray"><span>¥ </span>80.69</span>
	        		</div>
	        		<div class="item clearfix">
	        			<div class="item_left left">颜色</div>
	        			<div class="item_right left">
	        				<a href="javascript:void(0)" class="active">黑色</a>
	        				<a href="javascript:void(0)" v-for="n in 10">黑色</a>
	        			</div>
	        		</div>
	        		<div class="item clearfix">
	        			<div class="item_left left">规格</div>
	        			<div class="item_right left">
	        				<a href="javascript:void(0)" class="active">500*500</a>
	        				<a href="javascript:void(0)" v-for="n in 10">黑色</a>
	        			</div>
	        		</div>
	        		<div class="item clearfix pinpai">
	        			<div class="item_left left ">品牌</div>
	        			<div class="item_right left">
							品牌品牌
	        			</div>
	        		</div>
	        		<div class="item clearfix num">
	        			<div class="item_left left ">数量</div>
	        			<div class="item_right left">
							<pg-input-number @change="changeInputNumber"></pg-input-number>
	        			</div>
	        		</div>
	        		<div class="item clearfix pinpai">
	        			<div class="item_left left "></div>
	        			<div class="btns">
	        				<!-- <a href="javascript:void(0)" class="goumai">立即购买</a> -->
	        				<!-- <a href="javascript:void(0)" class="gocar">加入购物车</a> -->
	        				<router-link :to="{ path : '/accountCart'}"  class="goumai">立即购买</router-link>
	        				<router-link :to="{ path : '/shopCart'}" class="gocar">加入购物车</router-link>
	        			</div>
	        		</div>
	        		<div class="item clearfix server">
	        			<div class="item_left left ">紫云来服务</div>
	        		</div>
	        	</div>
	        </div>
	        <div class="des">
	        	<div class="nav">
	        		<div class="title">商品描述</div>
	        	</div>
	        	<div class="main">商品描11212vddd述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述v商品描11212vddd述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述v商品描11212vddd述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述v商品描11212vddd述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述v</div>
	        </div>
	        <!-- 右侧导航 -->
	        <pg-navbar></pg-navbar>
	    </pg-wrapper>
        <pg-footer></pg-footer>
    </pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
	.goodsDetail {
		.content {
			.content_left {
				width: 500px;
				.main_img {
					width: 500px;
					height: 500px;
					border: 1px solid @gray-color;
					img {
						width: 100%;
					}
				}
				.small_img {
					width: 500px;
					.pic {
						width: 80px;
						height: 80px;
						margin-right: 10px;
						margin-top: 10px;
						border: 1px solid @gray-color;
						overflow: hidden;
						&.active {
							border: 1px solid @ycprimary-color;
						}
						img {
							width: 100%;
						}
					}

				}

			}
			.content_right {
				width: 660px;
				.title {
					.left {
						width: 470px;
						font-size: 20px;
						color: @title-color;
						line-height: 1.5;
					}
					.right {
						border-radius: 15px;
						height: 30px;
						line-height: 30px;
						text-align: center;
						padding: 0 10px;
						font-size: 14px;
						color: #666;
						vertical-align: middle;
						border: 1px solid @gray-color;
					}
				}
				.price {
					background-color: @white-color;
					margin: 25px 0;
					padding: 25px;
					font-size: 14px;
					line-height: 1;
					color: @explain-color;
					.red {
						color: @danger-color;
						font-size: 32px;
						span {
							font-size: 18px;
						}
					}
					.gray {
						text-decoration:line-through;
					}

				}
				.item {
					font-size: 12px;
					color:  @explain-color;
					margin: 20px 0;
					.item_left {
						width: 45px;
						line-height: 3;
						min-height: 10px;
					}
					&.pinpai {
						margin: 30px 0;
						.item_left {
							line-height: 1;
						}
					}
					&.server {
						.item_left {
							width: 200px;
						}
					}
					&.num {
						line-height: 1.5;
					}
					.item_right {
						width: 600px;
						font-weight: bold;
						a {
							display: inline-block;
							color: @second-color;
							padding: 10px 25px;
							font-size: 12px;
							border: 1px solid @explain-color;
							margin-right: 10px;
							margin-bottom: 5px;
							font-weight: bold;
							&.active {
								border: 1px solid @ycprimary-color;
							}
						}
					}
					.btns {
						a {
							display: inline-block;
							width: 160px;
							height:50px;
							text-align: center;
							line-height: 50px;
							margin-right: 20px;
							border-radius: 5px;
							font-size: 18px;
							color: @white-color;
						}
						.goumai {
							background-color: @ycprimary-color;
							border: 1px solid #e4393c;
						}
						.gocar {
							color: #3c3c3c;
							border: 1px solid #3c3c3c;
						}
					}
				}

			}
		}
		.des {
			margin-top: 60px;
			.nav {
				height: 45px;
				background-color: #f2f2f2;
				border: 1px solid @gray-color;
				.title {
					background-color: @white-color;
					border-top: 1px solid @ycprimary-color;
					line-height: 43px;
					width: 130px;
					text-align: center;
					color: @ycprimary-color;
					border-right: 1px solid @gray-color;
				}
			}
			.main {
				background-color: @white-color;
				margin-bottom: 20px;
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