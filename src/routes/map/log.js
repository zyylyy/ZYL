const Register = resolve => require(['views/log/register/index.vue'], resolve) // demo
const Login = resolve => require(['views/log/login/index.vue'], resolve) // 登录
const Forgetpassword = resolve => require(['views/log/forgetpassword/index.vue'], resolve) // 忘记密码


export default [
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: '注册'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/forgetpassword',
        name: 'forgetpassword',
        component: Forgetpassword,
        meta: {
            title: '登录'
        }
    },
]