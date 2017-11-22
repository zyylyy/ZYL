import ajax from '../fetch' //广告位

export default {
	/**
	 * 轮播图列表 pageType 首页12
	 * @return {[type]} [description]
	 */
	getSlideShowList(data, isShowFullLoading = true) {
		return ajax({
			url: '/ADPosition/GetSlideShowList?pageType=' + data,
			method: 'get',
			isShowFullLoading
		})
	}
}

