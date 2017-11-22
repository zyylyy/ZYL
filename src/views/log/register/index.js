import HrAgreement from './components/agreement/index.vue'
import { account as ajax,common } from 'services'
export default {
	components: {
		HrAgreement
	},
	data() {
		return {
			registering: true,
			isShow: true,
		    modalShow: false,
		    form: {
			   	login: '',
			    password: '',
			    code: ''
		    },
		    formImgList:{
				code:''
		    },
	  		sendSmsAct:{
				mobile:'',
				type:3,
			},
			imgSrcList:{},
			smsOverTime: 90,
            isSendSMS: false,
            overTimer: null
	    }
	},
	mounted(){
		this.getVerifyCodeImg()
	},
	  methods: {
	  	overTime() {
            this.isSendSMS = true
            if (!this.overTimer) {
                this.overTimer = setInterval(() => {
                    if (this.smsOverTime > 0) {
                        this.smsOverTime--
                    }
                    else {
                        clearInterval(this.overTimer)
                        this.isSendSMS = false
                        this.smsOverTime = 90
                    }
                }, 1000)
            }
        },
		/**
		 * [register 注册]
		 * @return {[type]} [description]
		 */
		register() {
			if(this.util.isEmpty(this.form.login)) {
                this.util.msg.success("请输入手机号码")
                return
            }
            if(!this.util.isMobile(this.form.login)) {
                this.util.msg.success("手机号码格式错误")
                return
            }
            if(this.util.isEmpty(this.form.password)) {
                this.util.msg.success("请输入密码")
                return
            }
            if(!this.formImgList.code){
                this.util.msg.error('请输入图形验证码')
                return
            }
            if(this.imgSrcList.code.toLocaleLowerCase() != this.formImgList.code.toLocaleLowerCase()) {
                this.util.msg.error('图形验证码错误')
                return
            }
            
			if(this.util.isEmpty(this.form.code)) {
                this.util.msg.success("请输入手机验证码")
                return
			}
			ajax.register(this.form).then(() => {
					this.registering = false
					// setTimeout(() => {
					// 	this.$router.push('/login')
					// }, 1000)
			})
			
		},
		showLi() {
			this.isShow = !this.isShow
		},
		showBox() {
			this.modalShow = !this.modalShow
		},

    	/*
    	 *获取图片验证码 
    	*/
    	getVerifyCodeImg() {
    		common.queryVerifyCode().then(result=> {
				console.info(111);
    			this.imgSrcList = result
    		})
    	},
		/*
		 * 获取验证码
		 */
		getSendSmsMobile() {
			//console.log(this.sendSmsAct)
            if(!this.formImgList.code){
                this.util.msg.error('请先填写图形验证码')
                return false
            }
            if(this.imgSrcList.code.toLocaleLowerCase() != this.formImgList.code.toLocaleLowerCase()) {
                this.util.msg.error('图形验证码输入不正确')
                return false
            }
			if(this.util.isEmpty(this.form.login)) {
                this.util.msg.success("请输入手机号码")
                return false
            }
            if(!this.util.isMobile(this.form.login)) {
                this.util.msg.success("手机号码格式错误")
                return false
            }
			this.sendSmsAct.mobile = this.form.login
			common.sendSMSCode(this.sendSmsAct).then((result) => {
				this.util.msg.success("验证码已发送至手机，请注意查收")
				this.overTime()
			})

		},  
	},
	beforeDestroy() {
        if (this.overTimer) {
            clearInterval(this.overTimer)
            this.overTimer = null
        }
    }
}