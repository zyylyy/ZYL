<template>
	<div class="infobox">
		<pg-wrapper>
			<div class="companyTabDiv">
				<a class="companyTab" @click="showContent(1)">
					公司简介
				</a>
				<a class="companyTab" @click="showContent(2)">
					联系方式
				</a>
			</div>
			<div class="infoContent">
				<div class="companyInfoContentHead"></div>
				<div class="companyInfoContent">
					<span v-if="isInfo">公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介</span>
					<span v-else>
简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
					公司简介公司简介公司简介公司简介公司简介公司简介
					</span>
					
				</div>
				<div class="companyInfoContentFoot"></div>
			</div>
		</pg-wrapper>
		<pg-toolbar></pg-toolbar>
	</div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
	@import '~assets/styles/_variables';
	.infobox{
		min-height: 568px;
		padding-top: 58px;
		.companyTabDiv{
			float: left;
			width: 300px;
			.companyTab{
				display: block;
				margin-bottom: 15px;
				width: 294px;
				height: 74px;
				background: url(../../../assets/images/companyinfo-tab.png);
				text-align: center;
				line-height: 74px;
				color: @primary-color;
				font-size: 19px;
				font-weight: 700;
			}
			
		}
		.infoContent{
			width: 881px;
			margin-left: 9px;
			display: inline-block;
			.companyInfoContentHead{
				height: 25px;
				width: 100%;
				background: url(../../../assets/images/companyinfo-content-head.png);
			}
			.companyInfoContentFoot{
				width: 100%;
				height: 26px;
				background: url(../../../assets/images/companyinfo-content-foot.png);
			}
			.companyInfoContent{
				width: 877px;
				
				font-size: 14px;
				border-left: 2px solid;
				border-right: 2px solid;
				border-color: @primary-color;
				span{
					display: block;
					margin: 0px 18px;
					text-indent: 1em;
					line-height: 2.5em;
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