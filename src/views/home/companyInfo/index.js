import { demo as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default{
	data() {
		return {
			isInfo:true,//判断是否是公司信息
		}
	},
	methods:{
		showContent(type) {
			this.isInfo = type == 1?true:false
		},
	}

}