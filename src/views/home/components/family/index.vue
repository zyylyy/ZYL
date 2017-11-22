<template>
	<pg-wrapper class="family">
		<!-- <img src="../../../../assets/images/home-zyljz.png" height="479" width="1191" alt=""> -->
		<router-link class="family_title" :to="{path : '/family'}"></router-link>
		<ul class="nav clearfix">
			<li class="left" v-for="n in 8">
				<a href="javascript:void(0)"></a>
			</li>
		</ul>
		<div class="content">
			<div class="content_all">
	      		<swiper :options="swiperOption">
	      		  <swiper-slide v-for="n in 8">
	      		  	<img src="../../../../assets/images/home-family-hu.png" height="215" width="195" alt="">
					<div class="text">红木家具{{n}}</div>
	      		  </swiper-slide>
	      		</swiper> 
<!-- 	      		  <div class="swiper-button-prev" slot="button-prev"></div>
	      		  <div class="swiper-button-next" slot="button-next"></div> -->
			</div>	
	      			<div class="zyl_prev swiper-button-prev" slot="button-prev">
	      				<pg-icon name="zuo"></pg-icon>
	      			</div>
	      			<div class="zyl_next swiper-button-next" slot="button-next">
	      				<pg-icon name="you"></pg-icon>
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
    	height: 30px;
    	line-height: 30px;
    	color:#fff;
    	text-align: center;
    	font-size: 14px;
    	border-radius: 100%;
    }
    .zyl_next {
    	right: 14px;
    	width: 30px;
    	height: 30px;
    	line-height: 30px;
    	color:#fff;
    	text-align: center;
    	font-size: 14px;
    	border-radius: 100%;

    }
	.family {
		margin: 15px 0;
		margin-top: -270px;
		height: 500px;
		background: url('../../../../assets/images/home-zyljz.png') no-repeat;
		position: relative;
		.family_title {
			display: block;
			width: 200px;
			height: 60px;
			margin: 0 auto;
		}
		.nav {
			opacity: 0.5;
			position: absolute;
			width: 1154px;
			height: 80px;
			left: 20px;
			top: 77px;
			li {
				width: 144px;
				height: 80px;
				a {
					display: inline-block;
					width: 144px;
					height: 80px;
				}
			}
		}
		.content {
			width: 1144px;
			height: 298px;
			position: absolute;
			top: 157px;
			left: 23px;
			box-sizing: border-box;
			padding:25px 120px;
			background: url('../../../../assets/images/home-family-bg.png');
			.content_all {
				//padding: 43px 90px;
				.swiper-slide {
					img {
						width: 195px;
						height: 215px;
					}
					.text {
						font-size: 20px;
						color: @primary-color;
						text-align: center;
						width: 195px;
						height: 25px;
						line-height: 25px;
						margin: 0 auto;
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
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>