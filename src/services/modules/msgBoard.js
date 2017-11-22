import ajax from '../fetch'

// 在线留言
export default {
    /**
     * 在线留言
     * @param  {[type]}  data              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    saveMsgBoard(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/MsgBoard/Add',
            method: 'post',
            isShowFullLoading,
            auth,
            body: data
        })
    }
}