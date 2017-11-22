<template>
	<pg-wrapper class="media clearfix">
           <!-- 新闻 -->
        <div class="news left clearfix">
               <div class="top clearfix">
                    <!-- <a href="javascript:void(0)" class="path_right right"></a> -->
                    <router-link class="path_right right" :to="{ path : '/information'}"></router-link>
               </div>
               <div class="mains clearfix">
                   <div class="lefts">
                       <div class="big_pic">
                       <pg-img :src="mainImg"></pg-img>
                           <!-- <img v-else src="../../../../assets/images/home-news-big.png" alt=""> -->
                       </div>
                       <div class="small_pic">
                            <a href="javascript:void(0)" class="small" :class="[showActive == index ? 'active' : '']" v-for="(item, index) in fourList" @click="showMainImg(item, index)">
                              <pg-img :src="item.imgUrl" v-if="item.imgUrl" alt="我是小图片"></pg-img>
                                <img v-else src="../../../../assets/images/home-news-small.png"  alt="">
                            </a>
                       </div>
                   </div>
                   <div class="rights">
                       <ul>
<!--                            <li class="active">
                                <a href="javascript:void(0)">
                                   <pg-icon name="bofang" class="left_icon"></pg-icon>
                                   <span class="text">中秋,嫦娥陪你共度佳节佳节佳节....</span>
                                   <span class="add">
                                       <pg-icon name="tishi"></pg-icon>
                                       <span>111</span>
                                       <pg-icon name="tishi"></pg-icon>
                                       <span>222</span>
                                   </span>
                                </a>
                           </li> -->
                           <li v-for="item in list">
                                <router-link :to="{ path : '/informationdetail?id=' + item.articleID}">
                                   <pg-icon name="zuo"  class="left_icon"></pg-icon>
                                   <span class="text" :title="item.name">{{item.name}}</span>
                                   <span class="add">
                                       <pg-icon name="chakan"></pg-icon>
                                       <span>{{item.clickCount}}</span>
                                       <pg-icon name="liuyan"></pg-icon>
                                       <span>{{item.favoritesCount}}+</span>
                                   </span>
                                </router-link>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
           <!-- 直播 -->
           <div class="video right">
               <div class="title">
               </div>
               <div class="middle">
                    <a href="http://www.sdhongrong.com">
                        <img src="../../../../assets/images/home-media-zhibo.png" alt="">
                    </a>
               </div>
               <div class="bottom">
                   <img src="../../../../assets/images/home-hu.png" alt="">
               </div>
           </div>
	</pg-wrapper>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
        //新闻
        .media {
            .news {
                width: 885px;
                padding-bottom: 20px;
                .top {
                    background: url('../../../../assets/images/home-xinwen-title.png');
                    height: 41px;
                    width: 885px;
                    .path_right {
                        display: block;
                        height: 41px;
                        width: 120px;
                    }
                }
                .mains {
                    width: 885px;
                    position: relative;
                    .lefts {
                        background-color: #fbeddc;
                        padding: 15px;
                        width: 570px;
                        .big_pic {
                            width: 570px;
                            height: 250px;
                            img {
                                width: 570px;
                                height: 250px;
                            }
                        }
                        .small_pic {
                            display: flex;
                            justify-content: space-between;
                            padding-top: 10px;
                            .small {
                                width: 130px;
                                height: 80px;
                                opacity: 0.8;
                                img {
                                    display: block;
                                    width: 100%;
                                }
                                &.active {
                                    opacity: 1;
                                }
                            }
                        }
                        
                    }
                    .rights {
                        position: absolute;
                        right:0;
                        top:0;
                        width: 285px;
                        padding-top: 15px;
                        background-color: #fefefe;
                        ul {
                            li {
                                padding:0 20px 0 45px;
                                padding-top: 7px;
                                font-size: 12px;
                                line-height: 16px;
                                color: @primary-color;
                                height: 33px;
                                border-bottom: 2px solid #f6eee6;
                                position: relative;
                                a {
                                   color: @primary-color; 
                                }
                                .left_icon {
                                    position: absolute;
                                    top: 10px;
                                    left: 25px;
                                    font-size: 18px;
                                }
                                .text {
                                    .lineClamp(1);
                                    width: 205px;
                                }
                                .add {
                                    display: none;
                                    font-size: 7px;
                                    position: absolute;
                                    right:25px;
                                    bottom:0px;
                                    .iconfont {
                                        font-size: 7px;
                                    }
                                    span {
                                        color: @text-color;
                                        margin-right: 15px;
                                    }
                                }
                                &:hover {
                                    background-color: #eacdad;
                                    .add {
                                        display: block;
                                    }
                                }
                                // &.active {
                                //     background-color: #eacdad;
                                //     .add {
                                //         display: block;
                                //     }
                                // }
                            }
                        }
                    }
                }
            }
            .video {
                width: 295px;
                .title {
                    height: 41px;
                    background: url('../../../../assets/images/home-zhibo-title.png');
                }
                .middle {
                    width: 295px;
                    height: 280px;
                    margin-bottom: 12px;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
                .bottom {
                    width: 295px;
                    height: 80px;
                    img {
                        display: block;
                        width: 295px;
                        height: 80px;
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