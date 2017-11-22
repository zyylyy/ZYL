import ajax from '../fetch'

//公共接口文件
export default{
    //获取图片验证码
    queryVerifyCode() {
        return ajax({
            url: '/Common/GetVerifyCode',
            method: 'get',
        })
    },
    //发送验证码
    sendSMSCode(data, isShowFullLoading = true) {
        return ajax({
            url: '/Common/SendSmsCode',
            method: 'post',
            body:data,
            isShowFullLoading
        })
    },
    //验证手机验证码
    validateCode(data, isShowFullLoading = true) {
        return ajax({
            url: '/Common/ValidateCode',
            method: 'post',
            body:data,
            isShowFullLoading
        })
    }
}