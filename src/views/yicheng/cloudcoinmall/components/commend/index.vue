<template>
	<div class="commend">
		<div class="commend_top">
			<div class="commend_title">推荐兑换</div>
		</div>
		<div class="commend_center">
			<div class="commend_center_item">
				<a href="javascript:;" class="commend_img_container left">
					<img src="../../../../../assets/images/commend_product1.png">
				</a>
				<div class="commend_goods_describe">
					<div class="commend_goods_describe_title">
						<p>云币兑换活动名称</p>
						<p>有效期：2017.06.01-2017.06.02</p>
					</div>
					<div class="commend_goods_cloudcoinmall">
						<div class="cloudcoinmall_price">1000云币</div>
						<div class="exchange_figures">2110已兑</div>
					</div>
					<i class="top_left_icon"></i>
				</div>
			</div>
			<div class="commend_center_item">
				<a href="javascript:;" class="commend_img_container left">
					<img src="../../../../../assets/images/commend_product1.png">
				</a>
				<div class="commend_goods_describe">
					<div class="commend_goods_describe_title">
						<p>云币兑换活动名称</p>
						<p>有效期：2017.06.01-2017.06.02</p>
					</div>
					<div class="commend_goods_cloudcoinmall">
						<div class="cloudcoinmall_price">1000云币</div>
						<div class="exchange_figures">2110已兑</div>
					</div>
					<i class="top_left_icon"></i>
				</div>
			</div>
		</div>
		<div class="commend_bottom">
			<div class="commend_product_left left">
				<a href="javascript:;"><img src="../../../../../assets/images/commend_product_2.png"></a>
				<p>【7折限量】高档和田玉吊坠</p>
				<p>2000云币</p>
			</div>
			<ul class="commend_product_right right">
				<li>
					<a href="javascript:;">
						<img src="../../../../../assets/images/commend_product3.png">
						<div class="describe_box right">
							<p>商务皮质笔记本</p>
							<p>2000云币</p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../../../../../assets/images/commend_product3.png">
						<div class="describe_box right">
							<p>商务皮质笔记本</p>
							<p>2000云币</p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../../../../../assets/images/commend_product3.png">
						<div class="describe_box right">
							<p>商务皮质笔记本</p>
							<p>2000云币</p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../../../../../assets/images/commend_product3.png">
						<div class="describe_box right">
							<p>商务皮质笔记本</p>
							<p>2000云币</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    p {
    	margin: 0;
    }
    .commend {
    	margin-top: 15px;
    	background-color: #fff;
    	text-align: center;
    	color: #333;
    	.commend_top {
    		height: 90px;
    		padding-top: 35px;
    		.commend_title {
    			height: 46px;
    			line-height: 46px;
    			font-size: 30px;
    			width: 250px;
    			margin: 0 auto;
    			background: url("../../../../../assets/images/commend_title-bg.png") 0 0 no-repeat;
    		}
    	}
    	.commend_center {
    		height: 200px;
    		margin-bottom: 10px;
    		.commend_center_item {
    			width: 590px;
    			height: 200px;
    			margin-right: 10px;
    			float: left;
    			padding: 20px;
    			box-sizing: border-box;
    			position: relative;
	    		.commend_img_container {
	    			width: 330px;
	    			height: 160px;
	    			display: block;
	    			line-height: 160px;
	    			margin-right: 20px;
	    			img {
	    				vertical-align: middle;
	    				height: 100%;
	    				max-width: 100%;
	    			}
	    		}
	    		.commend_goods_describe {
	    			width: 200px;
	    			height: 200px;
	    			position: absolute;
	    			top: -15px;
	    			right: 20px;
	    			background-color: #80338f;
	    			.commend_goods_describe_title {
	    				height: 60px;
	    				padding: 20px 0;
	    				color: #fff;
	    				text-align: center;
	    				p:first-of-type {
	    					height: 28px;
	    					line-height: 28px;
	    					font-size: 18px;
	    				}
	    				p:last-of-type {
	    					height: 32px;
	    					line-height: 32px;
	    					font-size: 12px;
	    				}
	    			}
	    			.commend_goods_cloudcoinmall {
	    				width: 200px;
	    				height: 80px;
	    				padding-top: 20px;
	    				background-color: #fff;
	    				.cloudcoinmall_price {
	    					width: 160px;
	    					height: 40px;
	    					line-height: 40px;
	    					background-color: #80338f;
	    					color: #fff;
	    					font-size: 16px;
	    					border-radius: 10px;
	    					margin: 0 auto;
	    				}
	    				.exchange_figures {
	    					height: 38px;
	    					line-height: 38px;
	    					font-size: 14px;
	    					color: #999;
	    				}
	    			}
	    			.top_left_icon {
	    				width: 7px;
	    				height: 15px;
	    				position: absolute;
	    				left: -7px;
	    				top: 0;
	    				background: url("../../../../../assets/images/cloudcoin_icon_bg.png") 0 0 no-repeat;
	    			}
	    		}
    		}
    		.commend_center_item:nth-child(1) {
    			background-color: #d5d5d5;
    		}
    		.commend_center_item:nth-child(2) {
		    	margin: 0;
    			background-color: #bca99d;
    		}
    	}
    	.commend_bottom {
    		height: 420px;
    		.commend_product_left {
    			height: 420px;
    			width: 400px;
    			padding: 10px 35px 0;
    			border: 1px solid #f0f0f0;
    			box-sizing: border-box;
    			a {
    				display: block;
    				width: 100%;
    				height: 320px;
    				line-height: 320px;
    				img {
    					vertical-align: middle;
    					max-width: 100%;
    					max-height: 100%;
    				}
    			}
    			p {
    				&:first-of-type {
	    				height: 34px;
	    				line-height: 34px;
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
    		.commend_product_right {
    			width: 790px;
    			height: 420px;
    			box-sizing: border-box;
    			border-top: 1px solid #f0f0f0;
    			overflow: hidden;
    			li {
    				width: 50%;
    				height: 50%;
    				border-right: 1px solid #f0f0f0;
    				border-bottom: 1px solid #f0f0f0;
    				float: left;
    				box-sizing: border-box;
    				a {
    					width: 100%;
    					height: 100%;
    					display: block;
    					img {
    						width: 250px;
    						height: 100%;
    						float: left;
    					}
    					.describe_box {
    						width: 140px;
    						height: 100%;
    					}
    					p {
		    				&:first-of-type {
			    				height: 150px;
			    				line-height: 264px;
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
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>