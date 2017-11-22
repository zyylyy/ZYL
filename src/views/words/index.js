import { msgBoard as ajax } from 'services'

export default{
	data() {
		return {
			reveal: true,
			form: {
				content:'',
				phone:''
			}
		}
	},
	methods: {
		submit(){
			 //判断内容为空
            if(this.util.isEmpty(this.form.content)||!this.form.content.trim()) {
                this.util.msg.error('请填写内容')
                return
            }
            //判断手机号码
            if(this.util.isEmpty(this.form.phone) || !this.util.isMobile(this.form.phone)) {
                this.util.msg.error('手机号码有误')
                return
            }

            ajax.saveMsgBoard(this.form).then((result) => {
            	this.reveal = !this.reveal
            })
		}
	}
}