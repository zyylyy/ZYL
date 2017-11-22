<template>
	<pg-layout>
        <pg-header></pg-header>
		<!-- 咨询详情 -->
		<div class="information clearfix">
			<div class="banner">
				<pg-wrapper class="">
					<!-- <img src="../../../assets/images/information-list-banner.png" height="400" width="1190" alt=""> -->
				</pg-wrapper>		
			</div>
			<pg-wrapper class="mains clearfix">
				<div class="article left">
					<div class="breads">
						<router-link :to="{ path : '/home'}">紫云来</router-link>
						<span>></span>
						<router-link :to="{ path : '/information'}">{{detail.categoryName}}</router-link>
						<span>></span>
						<a href="javascript:void(0)">{{detail.name}}</a>
					</div>
					<div class="content">
						<div class="title">{{detail.name}}</div>
						<div class="time">{{detail.editTime}}</div>
						<div class="main" v-html="detail.content">
						</div>
					</div>
				</div>
				<div class="advertise right">
					<a href="javascript:void(0)" v-for="n in 2">
						<img src="../../../assets/images/information-list-ad.png" alt="">
					</a>
				</div>
			</pg-wrapper>
		</div>
        <pg-footer></pg-footer>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
	.information {
		.banner {
			height: 400px;
			background: url('../../../assets/images/information-list-bg.png');
			background-position: center;
		}
		.mains {
			margin-top: 60px;
			background-color: #efece8;
			.article {
				//background-color: #fff;
				background: url('../../../assets/images/infomation-bread-bg.png') repeat-x;
				width: 880px;
				padding-bottom: 150px;
				.breads {
					height: 45px;
					padding-left: 25px;
					a {
						display: inline-block;
						height: 45px;
						line-height: 45px;
						color: #ffedd9;
						font-size: 14px;
					}
					span {
						color: #ffedd9;
						font-size: 14px;
					}
				}
				
				.content {
					font-size:14px;
					padding: 25px;
					background-color: #fff;
					line-height: 1.5;
					.title {
						font-size: 18px;
						color: @title-color;
						line-height: 2;
					}
					.time {
						color: #ccc;
					}
					.main {
						width: 830px;
						overflow: hidden;
						color: @text-color;
						margin-top: 10px;
						text-indent: 2em;
						img {
							margin: 0 auto;
							display: block;
						}
					}
				}

			}
			.advertise {
				width: 285px;
				a {
					margin-bottom: 10px;
					display: block;
					img {
						width: 285px;
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