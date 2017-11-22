import { article as ajax } from 'services'

export default {
	data() {
      	return {
      	    total: 0,
            query: {
              condition: {
                  articleCategoryID: '', //文章分类ID，全部传null ,
                  name: '',
                  articleType: -1 //文章类型，全部传-1
              },
              pageSize: 15,
              page: 1
            },
            list: [], //文章列表
            navList: [], //导航列表
            firstActive: -1,//一级导航点击事件
            secondActive: -1,//2级导航点击事件
            secondNavList: [],//二级导航列表
      	}
  	},
    mounted() {
        this.queryClassifyTreeList()
        this.getList()
    },
  	methods: {
        //分页相关
        changePage(page) {
            this.query.page = page
            this.getList()
        },
        stepChange() {
            this.stepActive++
            if (this.stepActive > 2)
                this.stepActive = -1
        },
        //获取文章列表
        getList() {
            ajax.getPageList(this.query).then((result) => {
                this.list = result.data
                this.total = result.totalCount
            })
        },
        //获取文章分类树列表
        queryClassifyTreeList() {
            ajax.getClassifyTreeList().then((result) => {
                this.navList = result
            })
        },
        //一级导航点击事件
        navFirst(item,index) {
          this.secondActive = 0
            this.secondNavList = []
            this.firstActive = index
            this.secondNavList.push(item.subArticleCategory)
            this.query.condition.articleCategoryID = item.articleCategoryID
            this.getList()
        },
        //2级导航点击事件
        navSecond(item, index) {
            this.secondActive = index
            this.query.condition.articleCategoryID = item.articleCategoryID
            this.getList()
        }
  	}
}