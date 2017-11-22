/**
 * 客服
 */
import ajax from '../fetch'
export default {
	/**
	 * 回复消息
	 * @param  {[type]} data [请求数据]
	 * @param  {[type]} auth [令牌]
	 * @return {[type]}      [description]
	 */
	SendMessage(data, auth) {
		return ajax({
			url: '/CustomerService/SendMessage',
			method: 'post',
			body: data,
			auth
		})
	},

	/**
     * 获取当天聊天记录
     * @param  {string} session [用户id]
     * @return {[type]}        [description]
     */
    getCurrentDateLog(session, auth) {
        return ajax({
            url: '/CustomerService/GetCurrentDateLog?session=' + session,
            method: 'get',
            auth
        })
    }
}