<template>
    <div class="banner_box">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in bannerList">
                <a :href="item.url">
                    <!-- <pg-img :src="item.imageUrl"></pg-img> -->
                    <img :src="item.imageUrl">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .banner_box {
        width: 100%;
        height: 450px;
        overflow: hidden;
        a,img {
            display: inline-block;
            width: 100%;
            height: 450px;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>