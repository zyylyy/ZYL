// import {mall as ajax} from 'services'
export default {
    data() {
        return {
            bannerList: [
            {
                url: 'javascript:;',
                imageUrl: '/src/assets/images/cloundshops_banner.png'
            }],
            swiperOption: {
                autoplay: 3000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                effect: 'fade'
            }
        }
    },
    mounted() {
        // this.queryAdvertisings()
    },
    methods: {
        // 获取首页轮播图
        // queryAdvertisings() {
        //     ajax.queryAdvertisings(2).then((result) => {
        //         this.bannerList = result
        //     })
        // }
    }
}