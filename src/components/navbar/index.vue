<template>
	<div class="navbar showRight" :class="[showRight ? 'showRight' : 'hideRight']">
		<div class="left left_nav">
			<a href="javascript:void(0)" class="item" @click="openShoppingCar" :class="[showRight ? 'active' : 'hideRight']">
				<pg-icon name="gouwuche"></pg-icon>	
				<span class="center">购物车</span>
				<span class="num">25</span>
			</a>
			<a href="javascript:void(0)" class="item dingdan">
				<pg-icon name="dingdan"></pg-icon>
				<span class="item_left">我的订单</span>	
			</a>
			<a href="javascript:void(0)" class="item shoucang">
				<pg-icon name="shoucang"></pg-icon>	
				<span class="item_left">我的收藏</span>	
			</a>
			<a href="javascript:void(0)" class="item shoucang kefu" @click="showCustomer">
				<pg-icon name="kefu"></pg-icon>	
			</a>
			<a href="javascript:void(0)" class="item shoucang">
				<pg-icon name="erweima"></pg-icon>	
				<span class="item_erweima">
					<img src="../../assets/images/navbar_erweima_all.png" height="195" width="150" alt="">
				</span>	
			</a>
			<a href="javascript:void(0)" class="item shoucang" @click="toTop">
				<pg-icon name="fanhuidingbu"></pg-icon>	
			</a>
		</div>
		<div class="right shopping_car">
			<div class="title">
				<span>购物车</span>
				<pg-icon name="xuanze" @click="closeShoppingCar"></pg-icon>
			</div>
			<div class="content">
				<div class="list clearfix" v-for="n in 4">
					<div class="img_list left">
						<img src="../../assets/images/navbar-shoppingcar-list.png">
					</div>
					<div class="left_list left">
						<div class="price">¥ 799</div>
						<pg-input-number @change="changeInputNumber"></pg-input-number>
					</div>
					<div class="clear right">
						<a href="javascript:void(0)">清除</a>
					</div>
				</div>
			</div>
			<div class="total clearfix">
				<div class="left">
					<span>共 3 件商品</span>
				</div>
				<div class="right">
					<span>合计：<span>¥ 799.00</span></span>
				</div>
			</div>
			<div class="jiesuan">
				<router-link :to="{ path : '/shopCart'}">去结算</router-link>
			</div>
		</div>
        <!-- 在线客服 -->
        <pg-customer :is-show="isShowCustomer" @close="showCustomer"></pg-customer>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    //动画
 	.navbar.showRight {
		animation: fade_in .3s both;
	}
	.navbar.hideRight {
		animation: fade_out .3s both;
	}

	@keyframes fade_in {
		0% {
			right: -300px;
		}
		100% {
			right: 0;
		}
	}
	@keyframes fade_out {
		0% {
			right: 0;
		}
		100% {
			right: -300px;
		}
	}
	.navbar {
		position: fixed;
		right: 0px;
		top:0;
		width: 338px;
		height: 100%;
		z-index:10;
		background-color: @white-color;
		.left_nav {
			width: 38px;
			background-color: #2e2e2e;
			height: 100%;
			padding-top: 200px;
			font-size: 12px;
			//overflow: hidden;
			color: @white-color;
			.item {
				padding:10px 8px;
				box-sizing: border-box;
				display: block;
				word-wrap: break-word;
				color:@white-color ;
				text-align: center;
				line-height: 1.5;
				min-height: 38px;
				margin: 15px 0;
				position: relative;
				&.active {
					background-color: @primary-color;
				}
				&:hover {
					background-color: @primary-color;
					.item_left,.item_erweima {
						display: inline-block;
					}
				}
				&.kefu {
					margin-top: 100px;
				}
				.item_erweima {
					position: absolute;
					display: none;
					bottom: -15px;
					left: -150px;
				}
				.item_left {
					display: none;
					width: 100px;
					position: absolute;
					top:0;
					left:-100px;
					background-color: @primary-color;
					height: 50px;
					line-height: 50px;
					text-align: center;
					font-size: 12px;
					color: @white-color;
				}
				.center {
					margin: 10px 0;
					display: inline-block;
				}
				.iconfont {
					font-size: 20px;
				}
				.num {
					display: inline-block;
					width: 24px;
					height: 24px;
					line-height: 24px;
					border-radius: 50%;
					color: @title-color;
					text-align: center;
					background-color: @white-color;
					font-size: 10px;

				}
			}

		}
		.shopping_car {
			font-size: 16px;
			color: @title-color;
			width: 300px;
			.title {
				height: 55px;
				line-height: 55px;
				text-indent: 20px;
				position: relative;
				.iconfont {
					position: absolute;
					right: 30px;
					font-size: 16px;
				}
			}
			.content {
				border-top: 1px solid #e6e6e6;
				border-bottom: 1px solid #e6e6e6;
				.list {
					padding: 20px;
					border-bottom: 1px dashed #e6e6e6;
					.left_list {
						margin-left: 10px;
						.price {
							font-size: 14px;
							color:#e70013;
							margin-bottom: 10px;
						}
					}
					.clear {
						a {
							line-height: 60px;
							color: #4f82e9;
						}
					}
					&:last-of-type {
						border-bottom: none;
					}
				}
			}
			.total {
				font-size: 12px;
				color: @text-color;
				padding:20px 20px 40px 20px;
				span {
					span {
						color: @danger-color;
						font-size: 14px;
					}
				}
			}
			.jiesuan {
				padding: 0 20px;
				a {
					display: block;
					height: 40px;
					line-height: 40px;
					color:@white-color;
					border-radius: 5px;
					background-color: @primary-color;
					text-align: center;
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