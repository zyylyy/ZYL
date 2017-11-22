import ajax from '../fetch' //文章相关接口

export default {
	/**
	 * 获取文章分页列表
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getPageList(data) {
		return ajax({
			url: '/Article/GetPageList',
			method: 'post',
			body: data
		})
	},
	/**
	 * 获取文章详情{id}
	 * @return {[type]} [description]
	 */
	getDetail(data) {
		return ajax({
			url: '/Article/GetDatail?id='+ data,
			method: 'get',
		})
	},
	/**
	 * 获取文章分类树列表
	 */
	getClassifyTreeList() {
		return ajax({
			url: '/Article/GetClassifyTreeList',
			method: 'get',
		})
	},

}