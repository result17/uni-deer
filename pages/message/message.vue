<template>
	<view class="message_page">
		<message-item 
			v-for="(item, index) of msgList"
			:key="index"
			:time-stamp="item.timeStamp"
			:title="item.title"
			:has-read="item.hasRead"
			:text="item.text"
		></message-item>
	</view>
</template>

<script>
	import messageItem from '@/components/message-item.vue'
	
	export default {
		components:{
			messageItem
		},
		data() {
			return {
				msgList: [{
					timeStamp: new Date('2019/07/01 10:00:10').getTime(),
					title: '系统通知',
					text: '供货商由于[商品缺货]原因，取消了采购订单',
					hasRead: false
				}, {
					timeStamp: new Date('2019/07/01 10:00:10').getTime(),
					title: '系统通知',
					text: '供货商由于[商品缺货]原因，取消了采购订单',
					hasRead: false
				}, {
					timeStamp: new Date('2019/07/01 10:00:10').getTime(),
					title: '系统通知',
					text: '供货商由于[商品缺货]原因，取消了采购订单',
					hasRead: false
				}, {
					timeStamp: new Date('2019/07/01 10:00:10').getTime(),
					title: '系统通知',
					text: '供货商由于[商品缺货]原因，取消了采购订单',
					hasRead: true
				}, {
					timeStamp: new Date('2019/08/03 10:00:10').getTime(),
					title: '系统通知',
					text: '供货商由于[商品缺货]原因，取消了采购订单',
					hasRead: false
				}, {
					timeStamp: new Date('2019/09/03 10:00:10').getTime(),
					title: '系统通知',
					text: '供货商由于[商品缺货]原因，取消了采购订单',
					hasRead: true
				}, {
					timeStamp: new Date('2019/09/03 10:00:10').getTime(),
					title: '系统通知',
					text: '供货商由于[商品缺货]原因，取消了采购订单',
					hasRead: true
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
.message_page {
	padding: 16px;
}
</style>
