<template>
	<div class="advertise clearfix">
		<ul>
			<li class="left" v-for="n in 5">
				<a href="javascript:void(0)">
					<img src="../../../../../assets/images/mall_advertise_list.png" height="140" width="230" alt="">
				</a>
			</li>
		</ul>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .advertise {
    	margin-top: 30px;
    	li {
    		margin-right: 10px;
    		&:nth-of-type(5n) {
    			margin-right: 0;
    		}
    		a {
    			display: block;
    			width: 230px;
    			height: 140px;
    			img {
    				width: 230px;
    				height: 140px;
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