<template>
	<view>
		<view v-for="(item, index) of orderList" :key="index">
			<mini-calendar :year="getDate(index).year" :month="getDate(index).month" :day="getDate(index).day" :count="getOrderCount(index)"></mini-calendar>
			<my-status-order :status="status" :orderAry="orderList[index].orders"></my-status-order>
		</view>
	</view>
</template>

<script>
	import miniCalendar from './mini-calendar.vue'
	import myStatusOrder from './my-status-order.vue'
	export default {
		name: 'my-order',
		components: {
			miniCalendar,
			myStatusOrder
		},
		props: {
			status: String,
		},
		data() {
			return {
				orderList: [{
					date: new Date('2020-04-27').getTime(),
					orders: Array(3).fill(
						{
							phone: '15503048888',
							client: '郭李',
							isPayed: false,
							payMethod: '货到付款',
							area: '西安雁塔区',
							adress: '鱼化寨街道唐兴路唐兴数码3楼318',
							goods: [
								{
									name: '清凉一度抽纸',
									count: 1
								},
								{
									name: '八月十五中秋团圆月饼',
									count: 1
								},
								{
									name: '百草味团圆大礼包',
									count: 1
								}
							],
							prices: 20,
							orderDate: new Date('2020-04-20').getTime()
						}
					),
				}]
			};
		},
		methods: {
			getDate(index) {
				const date = new Date(this.orderList[index].date)
				return {
					year: date.getFullYear(),
					month: date.getMonth() + 1,
					day: date.getDate()
				}
			},
			getOrderCount(index) {
				return this.orderList[index].orders.length
			}
		}
	}
</script>

<style lang="scss">

</style>
