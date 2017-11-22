export default {
	props: {
		list: Array
	},
	data() {
		return {
			showActive: 0,
			mainImg: '',//主图链接
			fourList: [],//缩略图前四条

		}
	},
	watch: {
		list: {
			handler: function (newVal, oldVal) {
				this.getForuList()
			},
			deep: true
		}
	},
	methods: {
		//动态新闻缩略图控制
		showMainImg(item, index) {
			this.showActive = index
			this.mainImg = this.fourList[index].imgUrl
		},
		getForuList() {
			this.fourList = []
			this.list.forEach((item) => {
				if(this.fourList.length < 4) {
					this.fourList.push(item)
				}
			})
			console.log(this.fourList)
			this.mainImg = this.fourList[0].imgUrl
		}

	}
}