<template>
	<div v-if="show" class="register_agreement_box">
		<div class='agreement_showbox'>
			<div class="showbox_header">
				 <a href="javascript:void(0)" class="close_showbox" @click="showBox"><i class="iconfont icon-cha">X</i></a> 
			</div>
			<div class="showbox_main">
				<ul class="main_all">
					<li>
						<h4 class="title">新增用户地址</h4>
						<div class="conten">
							<input class="input" v-model="name" placeholder="请输入姓名">
							<input class="input" v-model="mobel" placeholder="请输入联系方式">
							<input class="input" placeholder="省市区">
							<textarea placeholder="请输入详细地址" v-model="address"></textarea>
							<input type="checkbox" v-model="isDefault" id="agree_agreement">
                        	<label for="agree_agreement">设为默认</label>	
						</div>
					</li>
				</ul>
				
			</div>
			<div class="showbox_footer">
				<a href="">保存</a>
			</div>
		</div>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';

	//登录注册模块协议组件register_agreement_box
	.register_agreement_box{
		
		position: fixed;
		top:0;
		left: 0;
		right:0;
		bottom: 0;
		background-color: rgba(0,0,0,0.6);
		z-index: 102;

		.agreement_showbox{
			border-radius:3px; 
			width:522px;
			height:522px;
			background-color: white;
			position: relative;
			position:absolute;
			top:50%;
			left:50%;
			margin-left: -240px;
			margin-top: -300px;
			.showbox_header{
				width: 100%;
				height:42px;
				color: #fef9f1;
				font-size: 19px;
				line-height: 40px;
				text-align: center;
				font-weight: bold;
				// border-bottom: 1px solid @step-line-color;
				position: absolute;
				top:0;
				left:0;
				a{
					float: right;
					//color: @explain-color;
					i {
						font-size: 24px;
					}
				}

			}
			.showbox_main{
				width: 100%;
				padding: 40px 20px;
				box-sizing: border-box;
				height:488px;
				font-size: 14px;
				//color: @base-color;
				overflow: auto;
				ul{
					li{
						font-size: 14px;
						line-height: 1.5;
						.title{
							font-weight: bold;
							line-height: 2;
							font-size: 16px;

						}
						&:nth-child(1) h4{
							text-align: center;
							font-weight: normal;
						}
						.conten{
							width:80%;
							margin: 0 auto;
							.input{
								display: block;
								margin: 20px auto;
								width: 378px;
								height: 39px;
								line-height: 39px;
								padding-left: 15px;
								border: solid 1px #e6e6e6;
							}
							textarea{
								margin: 10px auto;
								width: 376px;
								height: 76px;
								padding: 15px 0 0 20px;
								border-color:#e6e6e6;
								resize:none;
							}
						}
					}
				}
			}
			.showbox_footer{
				width: 100%;
				//border-top: 1px solid @step-line-color;
				height:70px;
				text-align: center;
				position: absolute;
				bottom:0;
				left: 0;
				a{
					width:200px;
					height: 40px;
					background-color: @primary-color;
					display: block;
					border-radius: 5px;
					font-size: 15px;
					line-height: 40px;
					color: white;
					margin:15px auto;
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