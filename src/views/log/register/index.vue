<template>
	<div>
		<!-- <pg-header></pg-header>  -->
        <pg-wrapper>
		<div class="login box clearfix register" v-if="registering">
			<div class="login_left">
				 <img src="../../../assets/images/register-left.png" alt=""> 
			</div>
			 
			<!-- 直接在线注册页面开始 -->
			<div class="register_right">
				<div class="right-title"><span>用户在线注册</span></div>
                <div class="right-content">
                    <input type="text" placeholder='请输入手机号' v-model="form.login">
                    <input type="password" placeholder='请设置密码' v-model="form.password">
                    <div class="indentifying">                  
                        <input style="float: left"  v-model="formImgList.code" type="text" placeholder='图形验证码'>
                        <a href="javascript:void(0)"  class="get_indentifying border-none">
                            <img class="yanzheimg" :src="imgSrcList.imgData" height="40" width="100" alt="">
                        </a>
                        <p style="text-align: right;" @click="getVerifyCodeImg">看不清，换一张</p>
                    </div>
                    <div class="indentifying">					
                        <input type="text" placeholder='手机验证码' v-model="form.code">
                        <a href="javascript:void(0)" @click="getSendSmsMobile" class="get_indentifying" :class="{'disabled' : isSendSMS}">
                            <div v-if="isSendSMS">
                            剩余{{smsOverTime}}秒</div>
                            <div v-else>获取验证码</div>
                        </a>
                    </div>
                    <div class="agreement">
                        <input type="checkbox" checked="checked" id="agree_agreement">
                        <label for="agree_agreement">我已阅读并接受</label>					
                        <a href="javascript:(0)" @click='showBox'>《用户注册协议》</a>
                    </div>				
                    <a class="instantly_register" href="javascript:void(0)" @click="register">立即注册</a>
                    <router-link class="WeChat_register btn_bottom" :to="{name: 'login'}">微信扫码注册</router-link>  
                    <router-link class="instantly_login btn_bottom" :to="{name: 'login'}">立即登录</router-link>  
                </div>
			</div>
		</div>
        <div class="login box clearfix register" v-else>
            <div class="success-img">
                <img src="../../../assets/images/register-success.png">
            </div>
            <div class="success-content"><span>恭喜你，注册成功</span></div>
        </div>
		<!-- 协议模块 -->
		<!-- <pg-footer></pg-footer> -->
		<!-- <hr-agreement v-bind:show="modalShow" @closeModal="showBox"></hr-agreement> -->
		  <hr-agreement :show="modalShow" @closeModal="showBox"></hr-agreement>
    </pg-wrapper>  
	<pg-toolbar></pg-toolbar>
	</div>

	
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .disabled {
        cursor: not-allowed;
    }
    .login{
        padding-top:100px;
        padding-bottom: 247px;
        height: 350px;
    .login_left{

        float:left;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
}
  //login-register
.register{
    //微信注册暂时隐藏
    .login_right{
        .top{
            font-size: 16px;
            line-height: 1;
            margin-bottom: 54px;
        }
        .middle{}
        
    }
    //立即注册开始
    .register_right{
        box-shadow:4px 4px 3px #e9e7e4,-4px 4px 3px #e9e7e4;
        float: left;
        width: 361px;
        //height: 425px;
        //border: 1px solid ;
        margin-left: 10px;
        text-align: center;
        .right-title{
            text-align: left;
            font-size: 21px;
            color: #fef9f1;
            height: 40px;
            line-height: 40px;
            width: 361px;
            background: url(../../../assets/images/register-title.png);
            span{
                text-shadow: 0px 0px 5px #fef9f1;
                display: block;
                width: 35%;
                margin-left: 50px;
            }
            
        }
        .right-content{
            width: 262px;
            margin: 0 auto;
            margin-top: 30px;
            input {
                width: 261px;
                height: 42px;
                border: 1px solid #ccc;
                font-size: 14px;
                line-height: 38px;
                margin-bottom: 15px;
                text-indent: 16px;
            }
            .indentifying{
                input{
                    width: 150px;
                    height: 38px;
                    display: inline-block;
                }

                a{
                    width: 98px;
                    height: 38px;
                    //border: 1px solid @step-line-color;
                    line-height: 38px;
                    color: @primary-color;
                    display: inline-block;
                    font-size: 12px;
                }
                .border-none {
                    border:none;
                }
                p {
                    text-align: right;
                    font-size: 12px;
                    cursor: pointer;
                }
            }
            .agreement{
                text-align: left;
                input{
                    width: 11px;
                    height: 11px;
                    margin-bottom: 0;
                    vertical-align: middle;
                }
                label{
                    font-size: 12px;
                    color: #b2b2b2;
                }
                a{
                    font-size: 12px;
                    color: #4f82e9;
                }
            }
            .instantly_register{
                display: block;
                height: 40px;
                background-color: @primary-color;
                line-height: 40px;
                color: white;      
                border-radius: 5px;
                font-size: 18px;
                margin: 15px 0;
            }
            .btn_bottom{
                color:@title-color;
                text-align: right;
                display: inline-block;
                //width: 157px;
                font-size: 12px;
            }
            .instantly_login{
                float: right;
                margin-bottom: 20px;

            }
            .WeChat_register{
               float: left; 
            }
            
        }
        
    }
    .success-img{
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }
    .success-content{
        margin-top: 31px;
        font-size: 27px;
        font-weight: 400;
        color: @primary-color;
        text-align: center;
    }
}  
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>