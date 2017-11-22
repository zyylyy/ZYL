<template>
    <div class="forget">
            <pg-steps :active="stepActive">
                <pg-step title="验证身份" ></pg-step>
                <pg-step title="修改登录密码" ></pg-step>
                <pg-step title="完成" ></pg-step>
            </pg-steps>
        <pg-wrapper class="test" v-if="show">
            <div class="item">
                <span>已验证手机：</span>
                <input type="text" v-model="phoneCode.mobile" placeholder="请输入手机号">
            </div>
            <div class="item img_code">
                <span>图片验证码：</span>
                <input type="text" v-model.trim="imgCodeInput" placeholder="图片验证码">
                <span class="code">
                    <img :src="imgCode.imgData"  alt="">
                </span>
                <a href="javascript:void(0)" @click="changeImgCode">看不清,换一张</a>
            </div>
            <div class="item phone_code">
                <span>手机验证码：</span>
                <input type="text" v-model.trim="checkForm.code" placeholder="请输入手机验证码">
                <a href="javascript:void(0)" @click="sendCode" v-if="isSendSMS">获取验证码</a>
                <a href="javascript:void(0)" v-else> 剩余{{endTime}}秒</a>
            </div>
            <a href="javascript:void(0)" class="btn" @click="next">下一步</a>
        </pg-wrapper>  
        <pg-wrapper class="reset_password" v-else>
            <div class="item">
                <span>新的密码：</span>
                <input type="password" v-model.trim="form.pwd" placeholder="请输入新密码">
            </div>
            <div class="item">
                <span>再次确认：</span>
                <input type="password" v-model.trim="form.pwdAgain"  placeholder="请再次输入新密码">
            </div>
            <a href="javascript:void(0)" class="btn" @click="preBtn">上一步</a>
            <a href="javascript:void(0)" class="btn submit" @click="submit">提交</a>
        </pg-wrapper> 
    </div>

</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .forget {
        .test, .reset_password {
            width: 465px; //580
            height: 300px;
            padding: 60px 0 0 115px;
            font-size: 12px;
            color: @title-color;
            .btn {
                display: inline-block;
                width: 260px;
                height: 40px;
                text-align: center;
                background-color: @primary-color;
                border-radius: 5px;
                font-size: 16px;
                line-height: 40px;
                color: @primary-title-color;
                margin-left: 95px;
                margin-top: 30px;

            }
            .item {
                padding:8px 0;
                span {
                    margin-right: 20px;
                }
                input {
                    width: 256px;
                    height: 34px;
                    line-height: 40px;
                    text-indent: 1em;
                    border: 1px solid #e6e6e6;
                    color: @text-color;
                }
            }
            .img_code {
                input {
                    width: 150px;
                    vertical-align: middle;
                }
                img {
                    width: 100px;
                    height: 40px;
                    vertical-align: middle;
                }
                .code {
                    margin-left: 3px;
                }
                a {
                    display: inline-block;
                    margin-left: -10px;
                    color: #4f82e9;
                    line-height: 40px;
                }
            }
            .phone_code {
                input {
                    width: 150px;
                    vertical-align: middle;
                }
                a {
                    display: inline-block;
                    width: 98px;
                    height: 38px;
                    line-height: 40px;
                    border: 1px solid #e6e6e6;
                    vertical-align: middle;
                    text-align: center;
                    color: @primary-color;
                }
            }

        }
        .reset_password {
            .btn {
                width: 120px;
            }
            .submit {
                margin-left: 20px;
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