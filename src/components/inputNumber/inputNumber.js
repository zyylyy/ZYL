
    export default {
        name: 'PgInputNumber',
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: Infinity
            },
            value: {
                type: Number,
                default: 1
            },
            id: String,
            type: {
                type: String,
                default: 'default'
            }
        },
        data() {
            return {
                number: 1
            }
        },
        watch: {
            value() {
                this.number = this.value
            }
        },
        mounted() {
            this.number = this.value
        },
        methods: {
            // 减
            decrease() {
                this.number--
                if (this.number <= this.min) {
                    this.number = this.min
                }
                this.change()
            },
            // 加
            increase() {
                this.number++
                if (this.number >= this.max) {
                    this.number = this.max
                }
                this.change()
            },
            change() {
                if (this.id) {
                    this.$emit('change', this.number, this.id)
                }
                else {
                    this.$emit('change', this.number)
                }
                
                this.$emit('input', this.number)
            }
        }
    }
