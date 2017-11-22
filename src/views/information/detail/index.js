import { article as ajax } from 'services'

export default {
	data() {
		return {
			detail: {},
		}
	},
	mounted() {
		console.log(this.$route.query)
		this.queryDetail()
	},
	methods: {
		//查询咨询详情
		queryDetail() {
			ajax.getDetail(this.$route.query.id).then((result) => {
				this.detail = result
			})
		}
	}
}