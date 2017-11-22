import { article as ajax} from 'services'

export default {
    data() {
        return {
        	showActive: 1,//导航点击状态
            query: {
              condition: {
                  articleCategoryID: '', //文章分类ID，全部传null ,
                  name: '',
                  articleType: 111//文章类型111，全部 传-1
              },
              pageSize: 7,
              page: 1
            },
            newsList: [], //懿城动态接口
        }
    },
    mounted() {
        this.getNewsList()
    },
    methods: {
    	//导航点击状态
    	navClick(val) {
    		this.showActive = val
    	},
        //获取新闻文章列表
        getNewsList() {
            ajax.getPageList(this.query).then((result) => {
                this.newsList = result.data
                console.log(result)
            })
        },
    }
}