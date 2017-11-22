const Demo = resolve => require(['views/demo/index.vue'], resolve) // demo


export default [
    {
        path: '/demo',
        name: 'demo',
        component: Demo,
        meta: {
            title: 'Demo'
        }
    }
]