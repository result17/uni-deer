<template>
	<view class="get_cash_wrapper">
		<account-card
			v-for="(item, index) of cardList"
			:key="index"
			:img-url="item.imgUrl"
			:type="item.type"
			:background="item.background"
			:name="item.name"
			:id="item.id"
		></account-card>
	</view>
</template>

<script>
	import accountCard from '@/components/account-card.vue'
	export default {
		components: {
			accountCard
		},
		data() {
			return {
				cardList: [{
					imgUrl: '../../static/imgs/account/wechat.png',
					type: '微信',
					background: ['#40E6AE', '#2DE062'],
					name: '唯鹿',
					id: ''
				}, {
					imgUrl: '../../static/imgs/account/gongshang.png',
					type: '工商银行',
					background: ['#57C4FA', '#4688FA'],
					name: '李*',
					id: '**** **** **** 2516'
				}, {
					imgUrl: '../../static/imgs/account/jianhang.png',
					type: '建设银行',
					background: ['#57C4FA', '#4688FA'],
					name: '李*',
					id: '**** **** **** 2516'
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
.get_cash_wrapper {
	padding: 16px;
}
</style>
