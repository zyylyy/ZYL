<template>
		<pg-wrapper class="yi_city">
                <div class="title">
                    <router-link class="path_center" :to="{ path : '/login'}"></router-link>
                </div>
                <div class="article clearfix">
                    <div class="article_top">
                        <p>茶是世界三大饮料之一，世界上许多饮茶国家都与茶文化有着千丝万缕的联系。全球性的文化交流，使茶文化传播世界，同各国人民的生活方式、风土人情，以至宗教意识相融合，呈现出五彩缤纷的世界各民族饮茶习俗。</p>
                        <p>当今世界各国、各民族的饮茶风俗，都因本民族的传统、地域民情和生活方式的不同而各有所异，然而“客来敬茶”却是古今中外的共同礼俗。</p>
                    </div>
                    <div class="article_bg">
                        <img src="../../../../assets/images/home-yi-city.png" height="235" width="1190" alt="">
                    </div>
                </div>
                <div class="intro">
                    <ul>
                        <li>
<!--                             <img src="../../../../assets/images/home-city-way.png" height="165" width="221" alt="">
                            <div class="li_border"></div>
                            <div class="text">茶马古道</div> -->
                            <img src="../../../../assets/images/home-city-way.png" height="120" width="270" alt="">
                        </li>
                        <li>
                            <img src="../../../../assets/images/home-city-culture.png" height="120" width="270" alt="">
                        </li>
                        <li>
                            <img src="../../../../assets/images/home-city-try.png" height="120" width="270" alt="">
                        </li>
                        <li>
                            <img src="../../../../assets/images/home-city-foods.png" height="120" width="270" alt="">
                        </li>
<!--                         <li>
                            <img src="../../../../assets/images/home-city_03.png" height="165" width="221" alt="">
                            <div class="li_border"></div>
                            <div class="text">文化体验街</div>
                        </li>
                        <li>
                            <img src="../../../../assets/images/home-city_05.png" height="165" width="221" alt="">
                            <div class="li_border"></div>
                            <div class="text text_third">传统文化博物馆</div>
                        </li>
                        <li>
                            <img src="../../../../assets/images/home-city_07.png" height="165" width="221" alt="">
                            <div class="li_border"></div>
                            <div class="text text_four">美食美居之旅</div>
                        </li> -->
                    </ul>
<!--                     <div class="hua_left">
                        <img src="../../../../assets/images/home-hua-left.png" height="34" width="64" alt="">
                    </div>
                    <div class="hua_right">
                        <img src="../../../../assets/images/home-hua-right.png" height="34" width="64" alt="">
                    </div>
                    <div class="hua_big">
                        <img src="../../../../assets/images/home-hua-big.png" height="72" width="143" alt="">
                    </div> -->
                </div>
		</pg-wrapper>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';

    //懿城
    .yi_city {
            background:-moz-linear-gradient(top, from(#f8ede4), to(#c6aab6)); 
            background:-o-linear-gradient(top, from(#f8ede4), to(#c6aab6)); 
            background:-webkit-gradient(linear, 0 0, 0 bottom, from(#fbefe0), to(#f5f1ed)); 
        .title {
            background: url('../../../../assets/images/home-yicheng-title.png');
            height: 41px;
            .path_center {
                display: block;
                height: 41px;
                width: 120px;
                margin: 0 auto;
            }
        }
        .article {
            //padding: 50px 0px 10px 0;
            font-size: 14px;
            color: #363636;
            position: relative;

            .article_top {
                padding: 45px 25px 0 25px;
            }
            .article_bg {
                height: 235px;
            }
            p {
                text-indent: 2em;
                line-height: 1.5;
            }
            .left {
                width: 280px;
            }
            .right {
                width: 280px;
            }
        }
        .intro {
            padding: 15px 30px 15px 30px;
            // .hua_left {
            //     position: absolute;
            //     top:100px;
            //     left: -80px;
            // }
            // .hua_right {
            //     position: absolute;
            //     top:100px;
            //     right: 0px;
            // }
            // .hua_big {
            //     position: absolute;
            //     top: 175px;
            //     left: -30px;
            // }
           ul {
                display: flex;
                justify-content: space-between;
                //position: relative;
                li {
                    
                    float: left;
                    width: 270px;
                    height: 120px;
                    box-sizing: border-box;
                    //padding: 10px;
                    position: relative;
                    // .li_border {
                    //   background: url('../../../../assets/images/home-border-small.png');
                    //   position: absolute;  
                    //   z-index: 1;
                    //   top:0;
                    //   left: 0;
                    //   right:0;
                    //   bottom: 0;
                    // }
                    // .text {
                    //     width:50px;
                    //     height: 165px;
                    //     position: absolute;
                    //     top: 10px;
                    //     left:30px;
                    //     background-color: @primary-color;
                    //     opacity: 0.8;
                    //     font-size: 16px;
                    //     color: #fff;
                    //     box-sizing: border-box;
                    //     padding: 40px 20px;
                    //     word-wrap: break-word;
                    // }
                    // .text_third {
                    //     padding: 15px 20px;
                    // }
                    // .text_four {
                    //     padding: 25px 20px;
                    // }
                    img {
                        display: block;
                        width: 270px;
                        height: 120px;
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