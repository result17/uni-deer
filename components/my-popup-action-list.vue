<template>
	<u-modal
		title="收款方式"
		class="modal" 
		:content-slot="true" 
		:value="showPayMethodsList" 
		@input="onchangeShowPayMethodsList"
		:show-cancel-button="true">
		<my-action-list :list="payMethodsList"></my-action-list>
	</u-modal>
</template>

<script>
	import myActionList from './my-action-list.vue'
	import { mapState, mapMutations } from 'vuex'

	export default {
		name: 'my-popup-action-list',
		components: {
			myActionList
		},
		computed: {
			...mapState(['showPayMethodsList']),
		},
		data() {
			return {
				payMethodsList: ['未收款', '支付宝', '微信', '现金'],
				titleStyle: {
					fontSize: '18px',
					color: '#333333',
					fontWeight: '700',
					paddingBottom: '8px'
				}
			};
		},
		methods: {
			...mapMutations(['changeShowPayMethodsList']),
			onchangeShowPayMethodsList() {
				this.$store.commit('changeShowPayMethodsList')
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
