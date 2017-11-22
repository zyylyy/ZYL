<template>
	<pg-wrapper class="tea clearfix">
		<div class="title">
			<!-- <img src="../../../../assets/images/home-gjxd-title.png" height="47" width="1191" alt=""> -->
			<router-link class="path_center" :to="{ path : '/login'}"></router-link>
		</div>
		<div class="all_bg">
			
			<div class="banner">
				<img src="../../../../assets/images/home-gjcd-content.png" height="262" width="1191" alt="">
			</div>
			<div class="content clearfix">
				<div class="left">
					<p>茶是世界三大饮料之一，世界上许多饮茶国家都与茶文化有着千丝万缕的联系。全球性的文化交流，使茶文化传播世界，同各国人民的生活方式、风土人情，以至宗教意识相融合，呈现出五彩缤纷的世界各民族饮茶习俗。</p>
					<p>茶艺，萌芽于唐，发扬于宋，改革于明，极盛于清，可谓有相当的历史渊源，自成一系统。</p>
				</div>
				<div class="right">
					<p>就形式而言，茶艺包括：选茗、择水、烹茶技术、茶具艺术、环境的选择创造等一系列内容。品茶、先要择，讲究壶与杯的古朴雅致，或是豪华庄贵。就形式而言，茶艺包括：选茗、择水、烹茶技术、茶具艺术、环境的选择创造等一系列内容。品茶、先要择，讲究壶与杯的古朴雅致，或是豪华庄贵。就形式而言，茶艺包括：选茗、择水、烹茶技术、茶具艺术、环境的选择创造等一系列内容。品茶、先要择，讲究壶与杯的古朴雅致，或是豪华庄贵。</p>
				</div>
			</div>
		</div>
	</pg-wrapper>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
	.tea {
		.title {
			width: 1190px;
			height: 41px;
	        background: url('../../../../assets/images/home-gjxd-title.png');
	        .path_center {
	            display: block;
	            height: 41px;
	            width: 120px;
	            margin: 0 auto;
	        }
		}
		.all_bg {
			background: url('../../../../assets/images/home-map.png') no-repeat;


		}
		.content {
			font-size: 14px;
			color: @text-color;
			text-indent: 2em;
			padding:0 25px;
			line-height: 1.5;
			.left{
				width: 555px;
			}
			.right {
				width: 555px;
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