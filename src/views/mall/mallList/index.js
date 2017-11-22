import ZyList from '../components/list/index.vue' // 商品列表

export default {
	components: {
		ZyList
	},
    data() {
        return {
            total: 80,
            query: {
                pageSize: 15,
            },
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
    },
    methods: {
        //分页相关
        changePage(page) {
            this.query.page = page
            //this.getList()
        },
        stepChange() {
            this.stepActive++
            if (this.stepActive > 2)
                this.stepActive = -1
        },
    }
}