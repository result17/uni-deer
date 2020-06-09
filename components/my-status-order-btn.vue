<template>
	<view>
		<u-button
			shape="square" 
			size="mini"
			v-for="(item, index) of statusBtn[status]"
			:custom-style="item.type === 'default' ? customDefaultStyle : customPrimaryStyle"
			@click="onClick(index)"
			:key="index"
			:style="{'margin-right': (statusBtn[status].length > 1 && index !== statusBtn[status].length - 1 ? '8px': '0')}"
			:type="item.type">{{item.context}}</u-button>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	
	export default {
		name: 'my-status-order-btn',
		props: {
			status: String
		},
		data() {
			return {
				customDefaultStyle: {
					backgroundColor: '#F6F6F6',
					borderRadius: '4px',
					color: '#333333',
					fontSize: '12px',
				},
				customPrimaryStyle: {
					backgroundColor: '#4688FA',
					fontSize: '12px',
					borderRadius: '4px'
				},
				statusBtn: {
					newOrder: [{
						type: 'default',
						context: '拒单',
						onClick: this.onUseLessClick
					},
					{
						type: 'primary',
						context: '接单',
						onClick: this.onUseLessClick
					}],
					toDelivered: [{
						type: 'default',
						context: '拒单',
						onClick: this.onUseLessClick
					}, {
						type: 'primary',
						context: '开始配送',
						onClick: this.onUseLessClick
					}],
					toComplete: [{
						type: 'default',
						context: '订单跟踪',
						onClick: this.onOrderTrackBtnClick
					}, {
						type: 'primary',
						context: '完成配送',
						onClick: this.onPayMethodsBtnClick
					}],
					completed: [{
						type: 'default',
						context: '订单跟踪',
						onClick: this.onOrderTrackBtnClick
					}],
					canceled: [{
						type: 'default',
						context: '订单跟踪',
						onClick: this.onOrderTrackBtnClick
					}]
				}
			};
		},
		methods: {
			...mapMutations(['changeShowPayMethodsList']),
			onUseLessClick() {
				console.log('useless')
			},
			onPayMethodsBtnClick() {
				this.changeShowPayMethodsList()
			},
			onOrderTrackBtnClick() {
				uni.navigateTo({
					url: '/pages/orderTrack/orderTrack'
				})
			},
			onClick(idx) {
				this.statusBtn[this.status][idx].onClick()
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
