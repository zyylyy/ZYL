const Home = resolve => require(['views/home/index.vue'], resolve) // demo
const companyInfo = resolve => require(['views/home/companyInfo/index.vue'], resolve) // 紫云来兮


export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/companyInfo',
        name: 'companyInfo',
        component: companyInfo,
        meta: {
            title: '紫云来兮'
        }
    }
]