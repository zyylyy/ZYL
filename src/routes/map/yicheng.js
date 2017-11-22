const YiCheng = resolve => require(['views/yicheng/yicheng/index.vue'], resolve) // 懿城首页
const YcMall = resolve => require(['views/yicheng/ycmall/index/index.vue'], resolve) // 懿城商城首页
const YcMalllist = resolve => require(['views/yicheng/ycmall/mallList/index.vue'], resolve) // 懿城商城列表
const YcGoodsDetail = resolve => require(['views/yicheng/ycmall/goodsDetail/index.vue'], resolve) // 懿城商城商品详情
const Cloudcoinmall = resolve => require(['views/yicheng/cloudcoinmall/index.vue'], resolve) // 云币商城首页
const AccountCart = resolve => require(['views/yicheng/accountCart/index.vue'], resolve) // 购物车去结算
const payType = resolve => require(['views/yicheng/accountCart/payType/index.vue'], resolve) // 选择结算支付方式
const qrCode = resolve => require(['views/yicheng/accountCart/payQrCode/index.vue'], resolve) // 选择结算支付方式
const CloudcoinMallDetail = resolve => require(['views/yicheng/cloudcoinmall/cloudcoinmalldetail/index.vue'], resolve) // 云币商城商品详情页

export default [
    {
        path: '/yicheng',
        name: 'yicheng',
        component: YiCheng,
        meta: {
            title: '懿城首页'
        }
    },
    {
        path: '/ycmall',
        name: 'ycmall',
        component: YcMall,
        meta: {
            title: '懿城商城首页'
        }
    },
    {
        path: '/ycmalllist',
        name: 'ycmalllist',
        component: YcMalllist,
        meta: {
            title: '懿城商城列表'
        }
    },
    {
        path: '/ycgoodsdetail',
        name: 'ycgoodsdetail',
        component: YcGoodsDetail,
        meta: {
            title: '懿城商城商品详情'
        }
    },
    {
        path: '/cloudcoinmall',
        name: 'cloudcoinmall',
        component: Cloudcoinmall,
        meta: {
            title: '云币商城'
        }
    },
    {
        path: '/accountCart',
        name: 'accountCart',
        component: AccountCart,
        meta: {
            title: '购物车去结算'
        }
    },
    {
        path: '/payType',
        name: 'payType',
        component: payType,
        meta: {
            title: '选择支付方式'
        }
    },
    {
        path: '/qrCode',
        name: 'qrCode',
        component: qrCode,
        meta: {
            title: '扫码支付'
        }
    },
    {
        path: '/cloudcoinmalldetail',
        name: 'cloudcoinmalldetail',
        component: CloudcoinMallDetail,
        meta: {
            title: '云币商城商品详情'
        }
    },
]