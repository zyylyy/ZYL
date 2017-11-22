<template>
	<pg-wrapper>
		<div class="wordsContainer clearfix" v-if="reveal">
			<div class="wordsTitle">
				在线留言
				<span>online message</span>
			</div>
			<div class="wordsMain">
				<div class="mainTop">
					<div class="messageTip leftBox left">留言内容</div>
					<textarea class="messageArea left" placeholder="我们非常重视您的建议，请在这里填写告诉我们" v-model="form.content"></textarea>
				</div>
				<div class="mainBottom">
					<div class="messageTel leftBox left">联系电话</div>
					<input type="text" class="telphone left" placeholder="请填写您的手机号码" v-model="form.phone" @keyup.enter="submit">
					<div class="telphoneTel right">（我们将对您的联系方式严格保密）</div>
				</div>
			</div>
			<input type="button" class="submitBtn right" value="提 交" @click="submit">
		</div>
		<div class="submitSuccess" v-else>
			<pg-icon name="zhengquetishi1" class="icon"></pg-icon>
			<p>感谢你的留言</p>
			<p>我们会竭尽所能做到更好，感谢你的信任与支持...</p>
		</div>
	</pg-wrapper>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .wordsContainer {
    	width: 660px;
    	margin: 70px auto 186px;
    	.wordsTitle {
    		height: 60px;
    		line-height: 60px;
    		font-size: 20px;
    		color: @primary-color;
    		span {
    			font-size: 14px;
    		}
    	}
    	.wordsMain {
    		height: 230px;
    		font-size: 14px;
    		border: 1px solid @primary-color;
    		.mainTop {
    			height: 170px;
    			border-bottom: 1px solid @primary-color;
    			line-height: 170px;
    			text-align: center;
    			color: @primary-color;
    			.messageTip {
    				height: 170px;
    			}
    			.messageArea {
    				width: 450px;
    				height: 125px;
    				margin: 20px;
    				border: none;
    				outline: none;
    				resize:none;
                    background-color: #f8f6f5;
    			}
    		}
    		.mainBottom {
    			height: 60px;
    			.messageTel {
    				height: 60px;
    				line-height: 60px;
    				text-align: center;
    				color: @primary-color;
    			}
    			.telphone {
                    width: 140px;
                    height: 28px;
                    margin: 15px 20px;
                    border: none;
                    background-color: #f8f6f5;
    			}
    			.telphoneTel {
					height: 60px;
					line-height: 60px;
					color: #a9a9a9;
    			}
    		}
    	}
    	.submitBtn {
    		width: 120px;
    		height: 36px;
    		color: #ffeed3;
    		font-size: 16px;
    		border: none;
    		border-radius: 5px;
    		margin-top: 40px;
            cursor: pointer;
    		background: url("../../assets/images/words-button-bg.png") center center no-repeat;
            &:hover {
                font-size: 18px;
                box-shadow: 0 0 10px 0 @primary-color;
            }
    	}
    	.leftBox {
    		width: 160px;
    		border-right: 1px solid @primary-color;
    	}
    }
    .submitSuccess {
    	width: 350px;
    	height: 180px;
    	margin: 125px auto;
    	text-align: center;
    	.icon {
    		margin: 0 auto;
    		font-size: 70px;
    		color: @primary-color;
    	}
    	p {
    		text-align: center;
    		margin: 0;
    	}
    	p:first-of-type {
    		font-size: 24px;
    		height: 70px;
    		line-height: 84px;
    		color: @primary-color;
    	}
    	p:last-of-type {
    		height: 50px;
    		font-size: 12px;
    		line-height: 50px;
    		color: #9c9c9c;
    	}
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>