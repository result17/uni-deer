<template>
	<view>
		<u-button
			shape="square" 
			size="mini"
			:custom-style="item.type === 'default' ? customDefaultStyle : customPrimaryStyle"
			v-for="(item, index) of statusBtn[status]"
			:key="index"
			:style="{'margin-right': (statusBtn[status].length > 1 && index !== statusBtn[status].length - 1 ? '8px': '0')}"
			:type="item.type">{{item.context}}</u-button>
	</view>
</template>

<script>
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
						context: '拒单'
					},
					{
						type: 'primary',
						context: '接单'
					}],
					toDelivered: [{
						type: 'default',
						context: '拒单'
					}, {
						type: 'primary',
						context: '开始配送'
					}],
					toComplete: [{
						type: 'default',
						context: '订单跟踪'
					}, {
						type: 'primary',
						context: '完成配送'
					}],
					completed: [{
						type: 'default',
						context: '订单跟踪'
					}],
					canceled: [{
						type: 'default',
						context: '订单跟踪'
					}]
				}
			};
		}
	}
</script>

<style lang="scss" scoped>

</style>
