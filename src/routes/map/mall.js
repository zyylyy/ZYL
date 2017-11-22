const MallIndex = resolve => require(['views/mall/index/index.vue'], resolve) // 商城首页
const MallList = resolve => require(['views/mall/mallList/index.vue'], resolve) // 商城列表
const GoodsDetail = resolve => require(['views/mall/goodsDetail/index.vue'], resolve) // 商品详情
const ShopCart = resolve => require(['views/mall/shopCart/index.vue'], resolve) // 购物车

export default [
    {
        path: '/mall',
        name: 'mall',
        component: MallIndex,
        meta: {
            title: '商城'
        }
    },
    {
        path: '/mallList',
        name: 'mallList',
        component: MallList,
        meta: {
            title: '商城列表'
        }
    },
    {
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: GoodsDetail,
        meta: {
            title: '商品详情'
        }
    },
    {
        path: '/shopCart',
        name: 'shopCart',
        component: ShopCart,
        meta: {
            title: '购物车'
        }
    },

]