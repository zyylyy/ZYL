
import NewAddress from './components/index.vue'
export default {
    data() {
        return {
            isLogin:true,//是否登陆
            checkAddress:'',//选中的地址
            modalShow: false,
            addressList:[
                {
                    name:"王小二",
                    moble:'123456789',
                    address:'广东省广州市开浦大道274号'
                },
                {
                    name:"王小",
                    moble:'123456789',
                    address:'广东省广州市开浦大道274号'
                },
                {
                    name:"王小1二",
                    moble:'123456789',
                    address:'广东省广州市开浦大道274号'
                },
                {
                    name:"王小3二",
                    moble:'123456789',
                    address:'广东省广州市开浦大道274号'
                },
                {
                    name:"王小6二",
                    moble:'123456789',
                    address:'广东省广州市开浦大道274号'
                },
                {
                    name:"王小5二",
                    moble:'123456789',
                    address:'广东省广州市开浦大道274号'
                },
            ],//已经有的地址
            tableList:[
                {
                    goodImg:"./test.png",
                    info:"[龙井]西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶",
                    color:"白色",
                    size:'110*110',
                },
                {
                    goodImg:"./test.png",
                    info:"[龙井]西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶",
                    color:"",
                    size:'110*110',
                },
                {
                    goodImg:"./test.png",
                    info:"[龙井]西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶",
                    color:"白色",
                    size:'',
                },
                {
                    goodImg:"./test.png",
                    info:"[龙井]西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶西湖龙井茶龙井茶",
                    color:"白色",
                    size:'110*110',
                },
            ],//购物车商品
        }
    },
    mounted() {
    },
    methods: {
        check(name) {
            this.checkAddress = name;
        },
        showBox() {
			this.modalShow = !this.modalShow
        },
    },
    components: {
		NewAddress
	},
}