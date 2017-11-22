export default {
    name: 'PgToolbar',
    data() {
        return {
            isShowCustomer: false
        }
    },
    methods: {
        // 显示 隐藏客服
        showCustomer() {
            this.isShowCustomer = !this.isShowCustomer
        },
        // 返回TOP
        scrollTop() {
            document.body.scrollTop = 0
        }
    }
}