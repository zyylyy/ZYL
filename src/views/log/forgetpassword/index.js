import { account as ajax,common } from 'services'

export default {
	data() {
		return {
			show: true,//判断是否验证成功
			imgCode: {},//图片验证码
			imgCodeInput: '',//输入框里地图片验证码
			//发送手机验证码
			phoneCode: {
				mobile: '', //13416240104
				type: 2,//2重置密码验证码，3，普通验证码
			},
			//重置密码表单
			form: {
				phone: '',
				key: '', //密匙
				pwd: '',
				pwdAgain: '',
			},

			//验证手机验证码
			checkForm: {
				mobile: '',
				code: ''
			},
			isSendSMS: true, //发送验证码按钮显示
			endTime: 90,//下次发送验证码时间
			stepActive: 0,//步骤条控制
		}
	},
	mounted() {
		this.getImgCode()
	},
	methods: {
		//下一步
		next() {
			this.checkCode()
			//this.show = false
		},
		//上一步
		preBtn() {
			this.show = true
		},
		submit() {
			this.form.phone = this.phoneCode.mobile
			if(this.form.pwd == this.form.pwdAgain) {
				ajax.resetPwd(this.form).then((result) => {
					this.stepActive = 2
					this.util.msg.success("提交成功")
					this.$router.go('-2')
				})
			}else {
				this.util.msg.error("两次密码不一致，请重新输入")
			}
		},
		//获取图片验证码
		getImgCode() {
			common.queryVerifyCode().then((result) => {
				console.log(result)
				this.imgCode = result
			})
		},
		//更换图片验证码
		changeImgCode() {
			this.getImgCode()
		},
		//发送手机验证码
		sendCode() {
			if(this.imgCode.code.toLocaleLowerCase()  == this.imgCodeInput.toLocaleLowerCase() ) {
				console.log(this.imgCode.code.toLocaleLowerCase())
				common.sendSMSCode(this.phoneCode).then((result) => {
					console.log(result)
					this.util.msg.success("验证码发送成功")
					this.overTime()

				})
			}else {
				 this.util.msg.error("请输入正确的图片验证码")
			}
		},
		//校验获取重置密码密匙
		checkCode() {
			this.checkForm.mobile = this.phoneCode.mobile
            if(!this.util.isMobile(this.phoneCode.mobile)) {
                this.util.msg.success("手机号码格式错误")
                return
            }
			if(this.util.isEmpty(this.imgCodeInput)) {
                this.util.msg.success("请输入正确的图片验证码")
                return
			}
			if(this.util.isEmpty(this.checkForm.code)) {
                this.util.msg.success("请输入手机验证码")
                return
			}
			ajax.getResetPwdKey(this.checkForm).then(result =>{
				this.form.key = result
				this.show = false
				this.stepActive = 1
			})
		},
		//发送短信验证码倒计时
        //倒计时发验证码
        overTime() {
            this.isSendSMS = false;
            let time = setInterval(() => {
                if (this.endTime > 0) {
                    this.endTime --;
                } else {
                    clearInterval(time);
                    this.isSendSMS = true;
                    this.endTime = 90;
                }
            }, 1000);
        },

		
	}
}