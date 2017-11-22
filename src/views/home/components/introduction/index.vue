<template>
	<pg-wrapper class="introduction clearfix">
		<div class="intro_left left">
			<!-- 国际茶都 -->
			<div class="tea_city">
				<div class="tea_title">
				</div>
				<div class="tea_content">
					<div class="tea_text">茶艺，萌芽于唐，发扬于宋，改革于明，极盛于清，可谓有相当的历史渊源，自成一系统.茶是世界三大饮料之一，世界上许多饮茶国家都与茶文化有着千丝万缕的联系。全球性的文化交流，使茶文化传播世界，同各国人民的生活方式、风土人情，以至宗教意识相融合，呈现出五彩缤纷的世界各民族饮茶习俗。</div>
				</div>
			</div>
			<!-- 机构介绍 -->
			<div class="organization">
				<div class="title">
					<router-link class="path_right path_left left" :to="{ path : '/framework'}"></router-link>
					<router-link class="path_right right" :to="{ path : '/framework'}"></router-link>
				</div>
				<div class="content clearfix">
					<div class="left">
						<img src="../../../../assets/images/home-intr-logo.png" alt="">
					</div>
					<div class="right">
						<p>" 紫云来"--充盈着中国文化的祥瑞之气。红木家具，彰显出历代传承的古典高贵。"紫云来"出品的 所有红木家具均以传统工艺手工制造，将艺术性、美观性与实用性巧妙结合，受到各界名仕的追捧 、收藏。紫云来公司从事红木家具生产 年，拥有一批宝贵的木器手工艺及家具设计人才，厂房占地 平方米，实力雄厚，贵重木材存量充足。</p>
					</div>
				</div>
				<div class="organization_bottom">
					<ul class="clearfix">
						<li class="left">
							<img src="../../../../assets/images/home-bowuguan.png" height="116" width="422" alt="">
						</li>
						<li class="right">
							<img src="../../../../assets/images/home-yanjiuzhongxin.png" height="116" width="418" alt="">
						</li>
						<li class="left">
							<img src="../../../../assets/images/home-yanjiuhui.png" height="116" width="422" alt="">
						</li>
						<li class="right">
							<img src="../../../../assets/images/home-yixingchachang.png" height="116" width="418" alt="">
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="intro_right right">
			<div class="title">
				<img src="../../../../assets/images/home-haiguanshui.png">
			</div>
			<div class="content clearfix">
				<img src="../../../../assets/images/home-shui-all.png" height="375" width="294" alt="">
<!-- 				<div class="left">
					<img src="../../../../assets/images/home-wenhuashui.png" height="309" width="147" alt="">
				</div>
				<div class="right">
					<img src="../../../../assets/images/home-chayeshui.png" height="308" width="140" alt="">
				</div> -->
			</div>
			<div class="title">
				<img src="../../../../assets/images/home-phone.png">
			</div>
			<div class="intro">
				<div class="item clearfix">
					<div class="cir left">
						<pg-icon name="dianhua"></pg-icon>
					</div>
					<span class="left phone">0532-82682333</span>
				</div>
				<div class="item clearfix">
					<div class="cir left">
						<pg-icon name="youjian"></pg-icon>
					</div>
					<span class="left">ziyunlai@163.com/<br>qdmqcd@163.com</span>
				</div>
				<div class="item clearfix">
					<div class="cir left">
						<pg-icon name="dizhi"></pg-icon>
					</div>
					<span class="left">青岛市市南区贵州路 40号瀚海华庭104室</span>
				</div>
			</div>
		</div>
	</pg-wrapper>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .swiper-button-prev,.swiper-button-next{
       	background-image: none;
    	background-color: red;	
    	background-color: @primary-color;
    }
    .zyl_prev {
    	left: 17px;
    	width: 30px;
    	height: 35px;
    	line-height: 35px;
    	color:#fff;
    	text-align: center;
    	font-size: 14px;
    }
    .zyl_next {
    	right: 14px;
    	width: 30px;
    	height: 35px;
    	line-height: 35px;
    	color:#fff;
    	text-align: center;
    	font-size: 14px;

    }
	.introduction {
		padding-bottom: 20px;
		//border-bottom: 1px solid #612942;
		.intro_left {
			width: 885px;
			.tea_city {
				.tea_title {
					height: 40px;
					background-image: url('../../../../assets/images/home-tea-title2.png');
				}
				.tea_content {
					height: 360px;
					margin-bottom: 15px;
					background-image: url('../../../../assets/images/home-tea-bg.png');
					.tea_text {
						padding: 270px 25px 25px 25px;
						font-size: 14px;
						text-indent: 2em;
						line-height: 1.5;
						color: @text-color;
					}
				}
			}
			.organization {
				background-color: #fff6eb;
				.title {
					height: 52px;
					background: url("../../../../assets/images/home-intr-title.png");
	        		.path_right {
	        		    display: block;
	        		    height: 52px;
	        		    width: 120px;
	        		}
	        		.path_left {
	        			width: 180px;
	        		}
				}
				.content {
					padding: 15px;
					
					.left {
						width: 65px;
						height: 65px;
						padding: 0 10px;
						img {
							width: 100%;
						}
					}
					.right {
						width: 755px;
						font-size: 14px;
						text-indent: 2em;
						line-height: 1.5;
						color: @text-color;

					}
				}
				.organization_bottom {
					ul {
						padding:15px;
						//background-color: #fef0dd;
						li {
							width: 425px;
							height: 115px;
							margin-bottom: 15px;
							img {
								width: 425px;
								height: 115px;
							}
						}
					}
				}
			}

		}
		.intro_right {
			width: 295px;
			.content {
				margin-bottom: 15px;
				//background-color: #f8f6f4;
			}
			.intro {
				padding: 60px 50px;
				//background: #fdf1e1;
				background:-moz-linear-gradient(top, from(#f8ede4), to(#c6aab6)); 
				background:-o-linear-gradient(top, from(#f8ede4), to(#c6aab6)); 
				background:-webkit-gradient(linear, 0 0, 0 bottom, from(#f8ede4), to(#c6aab6)); 
				font-size: 14px;
				color: @text-color;
				.item {
					margin:10px 0;
					.cir {
						width: 50px;
						height: 50px;
						//display: inline-block;
						background-color: @primary-color;
						border-radius: 100%;
						text-align: center;
						.iconfont {
							font-size: 28px;
							line-height: 50px;
							text-align: center;
							color:#fff;
						}
					}
					span {
						display: block;
						margin-left: 15px;
						width: 130px;
						line-height: 1.5;
					}
					.phone {
						line-height: 50px;
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