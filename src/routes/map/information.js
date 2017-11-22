const Information = resolve => require(['views/information/list/index.vue'], resolve) // 咨询列表
const Informationdetail = resolve => require(['views/information/detail/index.vue'], resolve) // 咨询详情


export default [
    {
        path: '/information',
        name: 'information',
        component: Information,
        meta: {
            title: '咨询列表'
        }
    },
    {
        path: '/informationdetail',
        name: 'informationdetail',
        component: Informationdetail,
        meta: {
            title: '咨询详情'
        }
    }
]