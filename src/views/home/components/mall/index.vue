<template>
	<pg-wrapper class="introduction clearfix">
		<div class="intro_left">
			<!-- 商城 -->
			<div class="mall clearfix">
				<div class="title">
					<!-- <a href="javascript:void(0)" class="path_right right"></a> -->
					<router-link  class="path_right right" :to="{ path : '/mall'}"></router-link>
				</div>
				<div class="content">
					<div class="content_all">
	      				<swiper :options="swiperOption">
	      				  <swiper-slide v-for="n in 10">
	      				  	<img src="../../../../assets/images/home-yizi.png" alt="">
							<div class="text">红木家具{{n}}</div>
	      				  </swiper-slide>
	      				</swiper> 
<!-- 	      				  <div class="swiper-button-prev" slot="button-prev"></div> -->
	      				  <!-- <div class="swiper-button-next" slot="button-next"></div> -->
					</div>
	      			<div class="zyl_prev swiper-button-prev" slot="button-prev">
	      				<pg-icon name="zuo"></pg-icon>
	      			</div>
	      			<div class="zyl_next swiper-button-next" slot="button-next">
	      				<pg-icon name="you"></pg-icon>
	      			</div>
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
    	left: 16px;
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
			.mall {
				.title {
					height: 39px;
					background: url("../../../../assets/images/home-mall-title2.png");
	        		.path_right {
	        		    display: block;
	        		    height: 40px;
	        		    width: 120px;
	        		}
				}
				.content {
					height: 410px;
					background: url('../../../../assets/images/home-mall-diwen2.png');
					//swiper样式
					.content_all {
						padding: 90px 150px;
						//background: url('../../../../assets/images/home-mall-diwen.png');
						.swiper-slide {
							width: 150px;
							img {
								width: 150px;
								height: 190px;
							}
							.text {
								font-size: 16px;
								color: #fef1e2;
								text-align: center;
								width: 100px;
								height: 25px;
								line-height: 25px;
								background-color: @primary-color;
								margin-left: 25px;
								margin-top: 10px;
							}

						}
   						 .swiper-button-prev {
							left:30px;
   						 }
   						 .swiper-button-next {
   						 	right:30px;
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