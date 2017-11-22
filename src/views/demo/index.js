import { demo as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            title: 'Demo',
            total: 81,
            current: 1,
            stepActive: -1,
        }
    },
    computed: {
        ...mapGetters([
            'demoList'
        ]),
    },
    mounted() {
        this.requestDemo()
    },
    methods: {
        ...mapActions([
            'setDemo'
        ]),
        requestDemo() {
            //网络请求
            // ajax.getDemoData((result) => {
            //     this.setDemo(result)
            // })

            const result = [
                {
                    Name: 'aaa',
                    Age: '20'
                },
                {
                    Name: 'bbb',
                    Age: '21'
                },
                {
                    Name: 'ccc',
                    Age: '22'
                },
                {
                    Name: 'ddd',
                    Age: '23'
                }
            ]

            this.setDemo(result)
        },
        hud(status) {
            if (status == 'loading') {
                this.util.msg.loading()
                setTimeout(() => {
                    this.util.msg.close()
                }, 2000)
            }
            else if (status == 'success') {
                this.util.msg.success('正确')
            }
            else if (status == 'error') {
                this.util.msg.error('错误')
            }
            else {
                this.util.msg.close()
            }
        },
        changePage(page) {
            console.log(page)
        },
        stepChange() {
            this.stepActive++
            if (this.stepActive > 2)
                this.stepActive = -1
        },
        changeInputNumber(val) {
            console.log(val)
        },
    }
}