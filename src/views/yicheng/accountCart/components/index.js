export default {
	props: {
		show: Boolean
	},
	data(){
		return{
			isDefault:false,
			name:'',
			number:'',
			address:'',
		}
	},
	methods: {
		showBox() {
			this.$emit('closeModal')
		}
	}
}
