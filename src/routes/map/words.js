const Words = resolve => require(['views/words/index.vue'], resolve) // words

export default [
    {
        path: '/words',
        name: 'words',
        component: Words,
        meta: {
            title: '在线留言'
        }
    }
]