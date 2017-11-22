export default {
	props: {
		hasSearch: Boolean
	},
    data() {
        return {
        	activeIndex: 0,
        	list: [
        	    {
        	    	value: 0,
        	    	text: '全部'
        	    },
        	    {
        	    	value: 1,
        	    	text: '待付款'
        	    },
        	    {
        	    	value: 2,
        	    	text: '待发货'
        	    },
        	    {
        	    	value: 3,
        	    	text: '待收货'
        	    },
        	    {
        	    	value: 4,
        	    	text: '交易成功'
        	    },
        	    {
        	    	value: 5,
        	    	text: '退款'
        	    }
        	]
        }
    },
    mounted() {
    },
    methods: {
    	click(item,index) {
    		this.activeIndex = index
    		this.$emit('click', item)
    	}
    }
}