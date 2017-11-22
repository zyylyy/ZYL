<template>
	<pg-layout>
		<pg-header></pg-header>
		<pg-wrapper>
			<div class="familyContainer">
				<div class="familyHeader">
					<p class="headerTitle">红木家具</p>
					<p>Rosewood furniture</p>
					<p class="introduce"> “紫云来红木家具，蕴涵了成熟与完美，高贵与经典，是中国文化的重要组成部分，历史悠久、自成体系。</p>
					<p class="introduce">她时尚而不失稳重，蕴涵了无限感悟，能让人瞬间感到灵秀和宁静”......这是红木专家对红木家具的一段经典评价。就某种程度而言，</p>
					<p class="introduce">红木家具已经成为中国文化的一种象征和载体。</p>
				</div>
				<div class="familyImgBox">
					<div class="familyImgBoxLeft left">
						<img src="../../assets/images/family-01.png">
					</div>
					<div class="familyImgBoxRight left">
						<ul>
							<li><img src="../../assets/images/family-02.png"></li>
							<li><img src="../../assets/images/family-03.png"></li>
							<li><img src="../../assets/images/family-04.png"></li>
							<li><img src="../../assets/images/family-05.png"></li>
							<li><img src="../../assets/images/family-06.png"></li>
							<li><img src="../../assets/images/family-07.png"></li>
							<li><img src="../../assets/images/family-08.png"></li>
							<li><img src="../../assets/images/family-09.png"></li>
							<li><img src="../../assets/images/family-10.png"></li>
							<li><img src="../../assets/images/family-11.png"></li>
							<li><img src="../../assets/images/family-12.png"></li>
							<li><img src="../../assets/images/family-13.png"></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footerHr"></div>
		</pg-wrapper>
		<pg-footer></pg-footer>
		<pg-toolbar></pg-toolbar>
	</pg-layout>
</template>

<style rel="stylesheet/less" lang="less" scoped>
	@import '~assets/styles/_variables';
	.familyContainer {
		width: 1190px;
		height: 719px;
		margin-top: 58px;
		box-sizing: border-box;
		padding: 20px 25px 40px 35px;
		background: url("../../assets/images/family-container-border-img.png") 0 0 no-repeat;
		.familyHeader {
			p {
				margin: 0;
				text-align: center;
			}
			height: 145px;
			.headerTitle {
				height: 25px;
				line-height: 30px;
				font-size: 22px;
				font-weight: bolder;
				letter-spacing: 10px;
				color: @primary-color;
			}
			p:nth-child(2){
				height: 26px;
				line-height: 16px;
				font-size: 8px;
				color: #9e657b;
			}
			.introduce {
				height: 28px;
				line-height: 28px;
				font-size: 14px;
				color: #3f3e3e;
			}
		}
		.familyImgBox {
			height: 510px;
			.familyImgBoxLeft {
				height: 510px;
				width: 610px;
				margin-right: 10px;
				background-color: pink;
			}
			.familyImgBoxRight {
				height: 510px;
				width: 510px;
				ul {
					height: 510px;
					li {
						width: 160px;
						height: 120px;
						float: left;
						margin-right: 10px;
						margin-bottom: 10px;
					}
				}
			}
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.footerHr {
		height: 1px;
		color: @primary-color;
		margin-top: 30px;
	}
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>