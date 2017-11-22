<template>
    <div class="banner">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in list">
                <a :href="item.url">
                    <!-- <img src="../../../../assets/images/mall_big_banner.png" height="400" width="1920"> -->
                    <pg-img :src="item.imgUrl"></pg-img>
                </a>
            </swiper-slide>
<!--             <swiper-slide>
                <a href="#">
                    <img src="../../../../assets/images/home_big_banner.png">
                </a>
            </swiper-slide> -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .banner {
        height: 400px;
    }
    img {
        height: 400px;
        width: 100%;
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>