import ZyMedia from './components/media/index.vue' // 新闻和直播
import ZyCity from './components/city/index.vue' // 懿城
//import ZyTea from './components/tea/index.vue' // 国际茶都
import ZyFamily from './components/family/index.vue' // 紫云来家族
import ZyIntroduction from './components/introduction/index.vue' // 下部介绍及所有东西
import ZyMall from './components/mall/index.vue' // 下部商城
import ZyBanner from './components/banner/index.vue' // banner图
import { article as ajax, adPosition} from 'services'
//import { adposition as ajax } from 'services'

export default {
    components: {
        ZyMedia,
        ZyCity,
        //ZyTea,
        ZyFamily,
        ZyIntroduction,
        ZyBanner,
        ZyMall,
    },
	data() {
		return {
            query: {
              condition: {
                  articleCategoryID: '', //文章分类ID，全部传null ,
                  name: '',
                  articleType: 101 //文章类型，全部 传-1
              },
              pageSize: 8,
              page: 1
            },
            newsList: [],//获取新闻文章列表
            sildeList: [], //首页轮播图
		}
  	},
    mounted() {
        console.log(this.util.isLogin()) //判读用户是否登录
        this.getSlideList()
        this.getNewsList()
    },
    methods: {
        //获取新闻文章列表
        getNewsList() {
            ajax.getPageList(this.query).then((result) => {
                this.newsList = result.data
            })
        },
        //首页轮播广告位12
        getSlideList() {
            adPosition.getSlideShowList(11).then((result) => {
                this.sildeList = result
            })
        },
    }
}
