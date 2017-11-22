<template>
    <pg-wrapper>
        <div class="login box clearfix register">
            <div class="login_left">
                 <img src="../../../assets/images/register-left.png" alt=""> 
            </div>
            <!-- 直接在线注册页面开始 -->
            <div class="register_right">
                <div class="right-title">用户在线登录</div>
                <div class="right-content">
                    <input type="text" v-model.trim="form.userName" placeholder='请输入用户名/手机号' >
                    <input type="password" v-model.trim="form.password" v-on:keyup.enter="login" placeholder='请输入密码' >
                    <div class="agreement">
                        <input type="checkbox" v-model="checked" id="agree_agreement">
                        <label for="agree_agreement">下次自动登录</label>                 
                        <router-link class="instantly_login btn_bottom" :to="{name: 'forgetpassword'}">忘记密码</router-link>  
                    </div>              
                    <a class="instantly_register" href="javascript:void(0)" @click="login">立即登录</a>
                    <router-link class="instantly_login btn_bottom" :to="{name: 'register'}">现在就去注册一个>></router-link>  
                </div>
            </div>
        </div>
        <div class="login box clearfix register" v-if="0">
            <div class="success-img">
                <img src="../../../assets/images/register-success.png">
            </div>
            <div class="success-content"><span>恭喜你，注册成功</span></div>
        </div>
    </pg-wrapper>  

    
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
        background-color: #f1eeea;
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
        background-image: url('../../../assets/images/login-small-bg.png');
        //height: 425px;
        //border: 1px solid ;
        margin-left: 10px;
        text-align: center;
        .right-title{
            text-shadow: 0px 0px 5px #fef9f1;
            font-size: 21px;
            text-align: left;
            text-indent: 45px;
            color: #ffedd1;
            height: 40px;
            line-height: 35px;
            width: 361px;
            background: url(../../../assets/images/register-title.png);
            
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
                margin-bottom:15px;
                text-indent: 1em;
                opacity: 0.8;
                background-color: transparent;
            }
            .agreement{
                text-align: left;
                vertical-align: middle;
                input{
                    width: 11px;
                    height: 11px;
                    vertical-align: middle;
                    border: 1px solid #e6e6e6;
                    margin-bottom: 0;
                    color: @text-color;
                }
                label{
                    font-size: 12px;
                    color: #b2b2b2;
                }
                a{
                    font-size: 12px;
                    color: #4f82e9;
                    float: right;
                    margin-top: 3px;
                }
            }
            .instantly_register{
                display: block;
                height: 40px;
                //background-color: @primary-color;
                background-image: url('../../../assets/images/infomation-bread-bg.png');
                line-height: 40px;
                color: #ffedd1;
                //color: @primary-title-color;
                border-radius: 5px;
                margin: 15px 0;
                text-align: center;
                text-indent: 3em;
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
                color: #4f82e9;

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