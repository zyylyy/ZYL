const Family = resolve => require(['views/family/index.vue'], resolve) // words


export default [
    {
        path: '/family',
        name: 'family',
        component: Family,
        meta: {
            title: '紫云来家族'
        }
    }
]