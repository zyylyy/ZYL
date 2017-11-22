export default {
    name: 'PgNavbar',
    data() {
        return{
            showRight: false,//打开购物车
            isShowCustomer: false, //// 显示 隐藏客服
        }
    },
    methods: {
    	changeInputNumber(val) {
    		
    	},
        //返回顶部
        toTop() {
            document.body.scrollTop = 0
        },
        //打开购物车
        openShoppingCar() {
            this.showRight = !this.showRight
        },
        //关闭购物车
        closeShoppingCar() {
            this.showRight = false
        },
        // 显示 隐藏客服
        showCustomer() {
            this.isShowCustomer = !this.isShowCustomer
        },
    }
}    
   