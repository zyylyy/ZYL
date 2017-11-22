<template>
	<div>
		<img src="../../../../assets/images/home-banner1.png" height="630" width="1919" alt="">
	</div>
<!--     <swiper class="banner" :options="swiperOption">
        <swiper-slide v-for="item in list">
            <a :href="item.url">
                <img :src="item.imgUrl">
                <span>{{item.url}}</span>
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .banner {
    	height: 630px;
        z-index: 0;
    }
	img {
		width: 100%;
		//height: 630px;
	}
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>