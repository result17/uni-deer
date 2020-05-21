<template>
	<view class="status_order_wrapper">
		<myStatusOrderItem 
			v-for="(item, index) of orderAry" 
			:key="index"
			:status="status"
			:order="orderAry[index]"
			></myStatusOrderItem>
	</view>
</template>

<script>
	import myStatusOrderItem from './my-status-order-item.vue'
	
	export default {
		data() {
			return {
				
			};
		},
		props: {
			status: {
				type: String
			},
			orderAry: {
				type: Array
			}
		},
		components: {
			myStatusOrderItem
		}
	}
</script>

<style lang="scss" scoped>

</style>
