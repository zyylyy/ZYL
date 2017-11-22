import PgTab from './components/orderTab/index.vue'
import PgTable from './components/table/index.vue'
import PgInfo from './components/userInfo/index.vue'

export default {
	components: {
        PgTab,
        PgTable,
        PgInfo
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    	clickTab(item) {
    		console.log(item)
    	}
    }
}