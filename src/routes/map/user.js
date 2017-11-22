const UserCenter = resolve => require(['views/user/center/index.vue'], resolve) // 个人中心首页
const MyOrder = resolve => require(['views/user/myOrder/index.vue'], resolve) // 我的订单
const OrderDetail = resolve => require(['views/user/orderDetail/index.vue'], resolve) // 订单详情

export default [
    {
        path: '/usercenter',
        name: 'usercenter',
        component: UserCenter,
        meta: {
            title: '个人中心首页'
        },
        children: [
            {
            	path: '/myOrder',
                name: 'myOrder',
                component: MyOrder,
                meta: {
                    title: '我的订单',
                }
            },
            {
                path: '/orderDetail',
                name: 'orderDetail',
                component: OrderDetail,
                meta: {
                    title: '订单详情',
                }
            },
        ]
    }
]