import ajax from '../fetch'

export default {
    /**
     * 登录获取token
     * @param  {object} data 登录信息
     * @return {[type]}      [description]
     */
    login(data, isShowFullLoading = true) {
        return ajax({
            url: '/Account/Login',
            method: 'post',
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 刷新登录token
     * @param  {[type]} token [description]
     * @return {[type]}       [description]
     */
    refreshToken(token) {
        return ajax({
            url: '/Account/RefreshToken?token=' + token,
            method: 'post'
        })
    },
    /**
     * 用户注册
     * @param  {[type]}  data              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    register(data, isShowFullLoading = true) {
        return ajax({
            url: '/Account/Register',
            method: 'post',
            isShowFullLoading,
            body: data
        })
    },
    /**
     * api获取重置密码密匙 
     */
    getResetPwdKey(data) {
        return ajax({
            url: '/Account/GetResetPwdKey',
            method: 'post',
            body: data
        })
    },
    /**
     * 重置密码
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    resetPwd(data) {
        return ajax({
            url: '/Account/ResetPwd',
            method: 'post',
            body: data
        })
    }, 
}