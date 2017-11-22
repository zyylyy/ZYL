
import { account as ajax } from 'services'
import { saveAuthToken} from 'auth'
import cookie from 'js-cookie'

export default {
    data() {
        return {
            form: {
                userName: '',//13416240104
                password: ''
            },
            checked: true,//记住密码是否被选择
        }
    },
    mounted() {
        // if(cookie.get('userName')) {
        //     this.form.userName = cookie.get('userName')
        //     this.form.password = cookie.get('password')
        //     setTimeout(() => {
        //         this.login()
        //     }, 2000);
        // }
    },
    methods: {
        // 立即登录
        login() {
            if (this.util.isEmpty(this.form.userName)) {
                this.util.msg.error('请填写用户名')
                return
            }
            if (this.util.isEmpty(this.form.password)) {
                this.util.msg.error('请填写密码')
                return
            }
            ajax.login(this.form).then((result) => {
                this.util.msg.success('登录成功')
                // //选了记住密码
                // if(this.checked) {
                //     cookie.set('userName', this.form.userName)
                //     cookie.set('password', this.form.password)
                // }
                // //取消记住密码
                // if(!this.checked) {
                //     //有cookie了就移除cookie
                //     if(cookie.get('userName')) {
                //         cookie.remove('userName', this.form.userName)
                //         cookie.remove('password', this.form.password)                    
                //     }
                // }
                saveAuthToken(result)
                setTimeout(() => {
                    this.$router.push('/home')
                }, 1000);
                
            })
        }
    }
}