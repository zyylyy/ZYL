const Framework = resolve => require(['views/framework/index.vue'], resolve) // framework


export default [
    {
        path: '/framework',
        name: 'framework',
        component: Framework,
        meta: {
            title: '机构介绍'
        }
    }
]