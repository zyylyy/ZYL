<template>
	<pg-layout class="bg">
        <yc-header></yc-header>
		<pg-wrapper class="yicheng">
			<div class="nav_img">
				<img src="../../../assets/images/yicheng-home-line.png" height="175" width="1190" alt="">
			</div>
			<div class="content clearfix">
				<div class="left content_left">
				 	<!-- 预定 -->
					<div class="yuding clearfix">
                        <div class="left yuding_left">
                            <div class="top_img">
                                <img src="../../../assets/images/yicheng-home-yuyue-bigimg.png" height="375" width="470" alt="">
                            </div>
                            <div class="text clearfix">
                                <div class="left">紫云来景区全套套票（包含亲子乐园＋文化体验）</div>
                                <div class="right">¥1708起</div>
                            </div>
                        </div>
                        <div class="right yuding_right">
                            <div class="yuding_nav">
                                <a href="javascript:void(0)" :class="[showActive == 1 ? 'active' : '']" @click="navClick(1)">门票预定</a>
                                <a href="javascript:void(0)" :class="[showActive == 2 ? 'active' : '']" @click="navClick(2)">酒店预定</a>
                                <a href="javascript:void(0)" :class="[showActive == 3 ? 'active' : '']" @click="navClick(3)">预定服务</a>
                            </div>
                            <div class="small_all" v-for="n in 2">
                                <div class="top_img small_top_img">
                                    <img src="../../../assets/images/yicheng-home-yuyue-smallimg.png" height="140" width="265" alt="">
                                </div>
                                <div class="text clearfix">
                                    <div class="left">紫云来景区门票 ( 含农家体验 )</div>
                                    <div class="right">¥1708起</div>
                                </div>
                            </div>
                        </div>
					</div>
                    <!-- 驿站介绍 -->
                    <div class="introduction clearfix">
                        <div class="left introduction_left">
                            <div class="big_img">
                                <img src="../../../assets/images/yicheng-home-yuyue-bigimg.png" alt="">
                            </div>
                        </div>
                        <div class="right introduction_right">
                            <div class="text">传承古法、恪守古训、纯手工打造的红木家具、红木木雕。红木、木雕博物馆、茶文化博物馆、玉雕博物馆、古生博物馆、宜兴紫砂承载着历史与文化，紫砂名家名作，紫云来紫砂窑体验紫玉文化深入中国人点骨髓，融入到每个人到生命。</div>
                            <div class="imgs">
                                <div class="img" v-for="n in 4">
                                    <img src="../../../assets/images/yicheng-home-introduction-img.png" height="115" width="170" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 招商入驻 -->
                    <div class="enter left">
                        <div class="item">
                            <span class="num">1</span>
                            <span>提交入驻申请</span>
                        </div>
                        <div class="item">
                            <span class="num">2</span>
                            <span>商务联系沟通</span>
                        </div>
                        <div class="item">
                            <span class="num">3</span>
                            <span>提交入驻申请</span>
                        </div>
                        <div class="item">
                            <span class="num">4</span>
                            <span>提交入驻申请</span>
                        </div>
                    </div>
                    <!-- 联系方式 -->
                    <div class="contact left">
                        <div class="item">
                            <pg-icon name="bofang"></pg-icon>
                            <span>0532-82681333</span>
                        </div>
                        <div class="item">
                            <pg-icon name="bofang"></pg-icon>
                            <span>ziyunlai@163.com</span>
                        </div>
                        <div class="item">
                            <pg-icon name="bofang"></pg-icon>
                            <span>青岛市市南区贵州路40号瀚海华庭104室</span>
                        </div>
                    </div>
				</div>
				<div class="right content_right">
                    <!-- 懿城动态 -->
                    <div class="news margin_bottom_5">
                        <a class="item" v-for="item in newsList">
                            <pg-icon name="bofang"></pg-icon>
                            <span>{{item.name}}</span>
                        </a>
                    </div>
                    <!-- 懿城介绍 -->
                    <div class="yicheng_introduction margin_bottom_5">
                        <div class="title">有德之城，美好之城，传承华夏文明懿明、 懿盛、懿伟。</div>
                        <div class="content">紫云来•懿城以传统徽派建筑为主建筑群，建筑面积超过30万平米。懿城是以传统文化为核心，以文化艺术、生产经营以及游客三者相互结合的新兴文化旅游产业基地。懿城集针对广大游客的需求，彰显中国传统文化“遵道贵德”，使游客在懿城内身临其境的感受中国传统文化。懿城给广大游客，创造一个集文化体验与修身养性于一体的文化生态体验城。</div>
                    </div>
                    <!-- 海关税 -->
                    <div class="shui margin_bottom_5">
                        <img src="../../../assets/images/yicheng-home-yunmall-img.png" height="172" width="305" alt="">
                    </div>
                    <!-- 云币商城 -->
                    <div class="yun_mall shui">
                        <img src="../../../assets/images/yicheng-home-yunmall-img.png" height="172" width="305" alt="">
                    </div>
                </div>
			</div>
		</pg-wrapper>
        <pg-yicheng></pg-yicheng>
        <pg-footer></pg-footer>
	</pg-layout>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .bg {
    	background-image: url('../../../assets/images/yicheng-big-bg.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    	.yicheng {
            padding-top: 42%;
            padding-bottom: 80px;
            .nav_img {
                margin-bottom: 40px;
            }
            .content {
    			.content_left {
    				width: 860px;
    				.yuding {
                        box-sizing: border-box;
    					height: 525px;
                        background-image: url(../../../assets/images/yicheng-home-yuyue-border.png);
                        background-repeat: no-repeat;
                        padding: 75px 44px;
                        font-size: 14px;
                        color: #000;
                        .yuding_left {
                            width: 480px;
                        }
                        .yuding_right {
                            width: 280px;
                            .yuding_nav {
                                margin-bottom: 16px;
                                font-size: 0;
                                a  {
                                    font-size: 14px;
                                    display: inline-block;
                                    width: 86px;
                                    height: 27px;
                                    text-align: center;
                                    line-height: 27px;
                                    color: #000;
                                    margin-right: 10px;
                                    &:nth-of-type(3n) {
                                        margin-right: 0;
                                    }
                                    background-image: url(../../../assets/images/yicheng-home-yuyue-smallborder.png);
                                    &.active {
                                        background-image: url(../../../assets/images/yicheng-home-yuyue-smallborder-active.png);
                                        color: @white-color;
                                    }
                                }
                            }
                            .small_all {
                                .small_top_img {
                                    background-image: url(../../../assets/images/yicheng-home-yuyue-small-border.png);
                                    background-repeat: no-repeat;
                                    width: 266px;
                                    height: 136px;
                                    padding: 7px;
                                    img {
                                        width: 266px;
                                        height: 136px;
                                    }
                                }
                            }
                        }
                        .text {
                            margin: 15px 0;
                            .right {
                                color: @primary-color;
                            }
                        }

    				}
                    .introduction {
                        margin:5px 0;
                        height: 480px;
                        background-image: url(../../../assets/images/yicheng-home-jieshao-border.png);
                        background-repeat: no-repeat;
                        padding: 55px 35px 40px 45px;
                        box-sizing: border-box;
                        font-size: 14px;
                        .introduction_left {
                            padding-top: 18px;
                            .big_img {
                                width: 360px;
                                height: 365px;
                                img {
                                    width: 360px;
                                    height: 365px;
                                }
                            }
                        }
                        .introduction_right {
                            width: 390px;
                            .text {
                                color: #1c2428;
                                line-height: 1.5;

                            }
                            .imgs {
                                width: 390px;
                                display: flex;
                                justify-content: space-between;
                                flex-wrap: wrap;
                                .img {
                                    margin-top: 20px;
                                    background: url(../../../assets/images/yicheng-home-introduction-img-border.png) no-repeat;
                                    padding: 7px;
                                    width: 171px;
                                    height: 116px;
                                    img {
                                        width: 170px;
                                        height: 115px;
                                    }
                                }
                                
                            }
                        }
                    }
                    .enter {
                        display: inline-block;
                        height: 100px;
                        width: 340px;
                        background-image: url(../../../assets/images/yicheng-home-ruzhu-border.png);
                        background-repeat: no-repeat;
                        padding: 50px 45px 0 45px;
                        .item {
                            width: 150px;
                            display: inline-block;
                            margin: 10px 0;
                            margin-right: 20px;
                            &:nth-of-type(2n) {
                                margin-right: 0;
                            }
                            .num {
                                display: inline-block;
                                width: 18px;
                                height: 18px;
                                line-height: 18px;
                                text-align: center;
                                background-color: #3a4146;
                                color: @white-color;
                                border-radius: 50%;
                                margin-right: 8px;
                            }
                        }
                    }
                    .contact {
                        display: inline-block;
                        height: 100px;
                        width: 385px;
                        padding: 50px 0px 0 45px;
                        background-image: url(../../../assets/images/yicheng-home-contact-border.png);
                        background-repeat: no-repeat;
                        font-size: 14px;
                        color: #1c2428;
                        .item {
                            display: inline-block;
                            margin: 10px 30px 0px 0;
                            .iconfont {
                            vertical-align: middle;
                                font-size: 24px;
                                margin-top: 5px;
                            }
                        }
                    }
    			}
    			.content_right {
                    .margin_bottom_5 {
                        margin-bottom: 9px;
                    }
    				width: 320px;
                    //懿城动态
                    .news {
                        background-image: url(../../../assets/images/yicheng-home-right_01.png);
                        background-repeat: no-repeat;
                        width: 230px;
                        height: 233px;
                        padding: 55px 45px 20px 45px;
                        .item {
                            display: inline-block;
                            width: 245px;
                            font-size: 14px;
                            color: #1c2428;
                            position: relative;
                            line-height: 43px;
                            .iconfont {
                                position: absolute;
                                top:0 ;
                                left: -18px;
                            }
                            span {
                                .lineClamp(1)
                            }
                        }
                    }
                    //懿城介绍
                    .yicheng_introduction {
                        background-image: url(../../../assets/images/yicheng-home-right_02.png);
                        width: 270px;
                        height: 310px;
                        background-repeat: no-repeat;
                        padding: 55px 25px 25px 25px;
                        font-size: 14px;
                        color: #1c2428;
                        line-height: 1.5;
                        .title {
                            font-weight: bold;
                            border-bottom: 1px dashed #ccd2d4;
                            padding-bottom: 10px;
                            line-height: 2;
                        }
                        .content {
                            padding-top: 10px;
                            line-height: 1.8;
                        }
                    }
                    //海关税
                    .shui {
                        background-image: url(../../../assets/images/yicheng-home-right_03.png);
                        background-repeat: no-repeat;
                        width: 312px;
                        height: 178px;
                        padding-top: 42px;
                        padding-left: 8px;
                    }
                    //云币商城
                    .yun_mall {
                        background-image: url(../../../assets/images/yicheng-home-right_04.png);
                        background-repeat: no-repeat;
                        width: 312px;
                        height: 178px;
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