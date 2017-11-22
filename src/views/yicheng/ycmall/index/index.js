import ZyBanner from '../components/mainBanner/index.vue' // 大banner
import ZyNav from '../components/nav/index.vue' // 大banner
import ZyAdvertise from '../components/advertise/index.vue' // 大banner
import ZyTitle from '../components/title/index.vue' // 楼层标题
import ZyList from '../components/list/index.vue' // 商品列表
import { adPosition as ajax } from 'services'


export default {
    components: {
        ZyBanner,
        ZyNav,
    	ZyAdvertise,
        ZyTitle,
        ZyList,
    },
    data() {
        return {
            sildeList: [],//广告位
            list: [
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },
                {
                    imgurl: '1',
                    title: '西湖龙井 2017明前茶 绿茶清香型 一级 醉清芯 500g',
                    name: '鲜香而味醇 回甘足',
                    price: '1000'

                },

            ]
        }
    },
    mounted() {
        this.getSlideList()
    },
    methods: {
        //首页轮播广告位12
        getSlideList() {
            ajax.getSlideShowList(31).then((result) => {
                this.sildeList = result
                console.log(result)
            })
        },
    }
}