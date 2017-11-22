<template>
	<div class="list">
		<ul class="clearfix">
			<li class="left" v-for="item in list">
                <router-link :to="{path : '/ycgoodsDetail'}">
                    <div class="img_box">
                       <img src="../../../../../assets/images/mall_goods_list.png">
                    </div>
                    <p class="title">{{item.title}}</p>
                    <p class="name">{{item.name}}</p>
                    <p class="price">￥{{item.price}}</p>                   
                </router-link>
<!-- 				<a href="javascript:void(0)">
                    <div class="img_box">
					   <img src="../../../../assets/images/mall_goods_list.png">
                    </div>
                    <p class="title">{{item.title}}</p>
                    <p class="name">{{item.name}}</p>
                    <p class="price">￥{{item.price}}</p>
				</a> -->
			</li>
		</ul>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .list {
    	ul {
    		li {
                margin-right: 10px;
               //margin-bottom: 15px;
                margin-top: 15px;
                &:nth-of-type(5n) {
                    margin-right: 0;
                }
                &:last-of-type {
                    margin-bottom: 15px;
                }
                a {
                    display: block;
                    width: 228px;
                    height: 340px;
                    background-color: @white-color;
                    border: 1px solid #fff;
                    font-size: 14px;
                    color: @second-color;
                    //margin-right: 8px;
                    line-height: 1.5;
                    //margin-bottom: 15px;
                    p {
                        margin: 5px 10px;
                    }
                    .price {
                        font-size: 16px;
                        color: @ycprimary-color;
                    }
                    .name {
                        color: @gray-color;
                    }
                    // &:nth-of-type(5n) {
                    //     margin-right: 0;
                    // }
                    &:hover {
                        border: 1px solid @ycprimary-color;
                    }
                    .img_box {
                        width: 228px;
                        height: 228px;
                        overflow: hidden;
                        img {
                            width: 228px;
                            height: 228px;
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