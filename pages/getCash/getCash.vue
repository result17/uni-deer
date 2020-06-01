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
