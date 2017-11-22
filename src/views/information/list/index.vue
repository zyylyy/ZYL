<template>
	<pg-layout>
        <pg-header></pg-header>
		<!-- 咨询列表 -->
		<div class="information clearfix">
			<div class="banner">		
			</div>
			<pg-wrapper class="mains clearfix">
				<div class="article left">
					<div class="nav">
						<ul class="clearfix">
							<li class="left" v-for="(item, index) in navList" :class="[firstActive == index ? 'active' : '']">
								<a href="javascript:void(0)" @click="navFirst(item,index)">{{item.name}}</a>
							</li>
						</ul>
					</div>
					<div class="content">
						<div class="content_title" v-if="secondNavList.length">
							<ul class="clearfix" v-for="items in secondNavList">
								<li class="left" v-for="(item, index) in items" :class="[secondActive == index ? 'active' : '']">
									<a href="javascript:void(0)" @click="navSecond(item, index)">
									<pg-icon name="zuo" class=""></pg-icon>
										<span>{{item.name}}</span>
									<pg-icon name="you" class=""></pg-icon>
									</a>
								</li>
							</ul>
						</div>
						<div class="content_list">
							<router-link :to="{path : '/informationdetail?id=' + item.articleID}" class="item clearfix" v-for="item in list">
								<div class="img_left left">
									<pg-img :src="item.imgUrl" alt="woshitupian" v-if="item.imgUrl"></pg-img>
									<img v-else src="../.././../assets/images/information-list-good.png" alt="">
								</div>
								<div class="rights right">
									<div class="top clearfix">
										<span class="biaoti left">{{item.name}}</span>
										<span class="time right">{{item.editTime}}</span>
									</div>
									<div class="neirong">{{item.description}}</div>
								</div>
							</router-link>
						</div>
						<pg-page :total="total" :pageSize="query.pageSize" @on-change="changePage"></pg-page>
					</div>
				</div>
				<div class="advertise right">
					<a href="javascript:void(0)" v-for="n in 1">
						<img src="../../../assets/images/information-list-ad.png" alt="">
					</a>
				</div>
			</pg-wrapper>
			<pg-toolbar></pg-toolbar>
		</div>
        <pg-footer></pg-footer>
    </pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
	.information {
		.banner {
			height: 400px;
			background: url('../../../assets/images/information-list-bg.png') no-repeat;
			background-position: center;
			margin-bottom: 60px;
		}
		.mains {
			background-color: #efece8;
			.article {
				background-color: #fff;
				width: 880px;
				.nav {
					ul {
						height: 45px;
						background-color: #461e30;
						border-radius: 5px;
						box-shadow: 0 0 5px;
						overflow: hidden;
						li {
							height: 45px;
							a {
								display: block;
								height: 45px;
								padding: 0 35px;
								line-height: 45px;
								color: @primary-title-color;
								border-radius: 5px;
								font-size: 14px;
							}
							&.active a{
								background-color: #602946;
							}

						}
					} 
				}
				.content  {
					.content_title {
						height: 45px;
						background-color: #fff2e1;
						li {
							height: 45px;
							a {
								display: block;
								//width: 130px;
								height: 45px;
								text-align: center;
								line-height: 45px;
								padding:0 20px;
								color: @title-color;
								font-size: 14px;
								span {
									margin: 0 5px;
								}
								.iconfont {
									display: none;
								}
							}
							&.active a{
								color: @primary-color;
								.iconfont {
									display: inline-block;
								}
							}
						}
					}
					.content_list {
						padding: 0 25px 25px 25px;
						.item {
							padding: 25px 0;
							border-bottom: 1px dashed #ccc;
							img {
								width: 210px;
								height: 150px
							}
							.rights {
								width: 590px;
								color: @text-color;
								font-size: 14px;
								.top {
									line-height: 2;
									.biaoti {
										font-size: 18px;
										//width: 400px;
										//.lineClamp(1);
									}
									.time {
										color: #ccc;
										.lineClamp(1);
									}
								}
								.neirong {
									line-height: 1.5;
								}
							}
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