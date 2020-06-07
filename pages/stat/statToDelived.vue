<template>
	<view class="stat_to_delived_wrapper">
		<view class="stat_to_delived_title_wrapper">
			待配货
		</view>
		<view class="stat_to_delived_date_wrapper">
			<span class="year_wrapper">
				{{year}}年
			</span>
			<u-line direction="col"></u-line>
			<span class="month_wrapper">
				{{month}}月
			</span>
			<u-line direction="col"></u-line>
			<span class="day_wrapper">
				{{day}}日
			</span>
			<u-line direction="col"></u-line>
		</view>
		<view class="ring_chart_wrapper">
			<my-ring-chart></my-ring-chart>
		</view>
		<view class="goods_rank_wrapper">
			<view class="goods_rank_title_wrappr">
				热销商品排行
			</view>
			<view class="goods_rank_content_wrapper">
				<goods-rank-item
					v-for="(item, index) of goodsList"
					:key="Number(index)"
					:index="index"
					:color="item.color"
					:bg-color="item.bgColor"
					:img-url="item.imgUrl"
					:name="item.name"
					:sub="item.sub"
					:not-pay-num="item.notPayNum"
					:pay-num="item.notPayNum"
				></goods-rank-item>
			</view>
		</view>
	</view>
</template>

<script>
	import myRingChart from '@/components/my-ring-chart.vue'
	import goodsRankItem from '@/components/goods-rank-item.vue'
	 
	export default {
		components: {
			myRingChart,
			goodsRankItem
		},
		data() {
			return {
				date: new Date(),
				goodsList: [{
					color: '#FFFFFF',
					bgColor: '#FFD147',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 400,
				}, {
					color: '#FFFFFF',
					bgColor: '#CEE6F2',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 100,
					payNum: 400,
				}, {
					color: '#FFFFFF',
					bgColor: '#FFAA80',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}, {
					color: '#FFFFFF',
					bgColor: '#7087FA',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}, {
					color: '#FFFFFF',
					bgColor: '#A0E65C',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}, {
					color: '#FFFFFF',
					bgColor: '#5CE6A1',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}, {
					color: '#FFFFFF',
					bgColor: '#A364FA',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}, {
					color: '#FFFFFF',
					bgColor: '#DA61F2',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}, {
					color: '#FFFFFF',
					bgColor: '#FA64AE',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}, {
					color: '#FFFFFF',
					bgColor: '#FF7F00',
					imgUrl: '/static/imgs/order/icon_goods.png',
					name: '那鲁多饮料',
					sub: '250ml',
					notPayNum: 200,
					payNum: 200,
				}]
			};
		},
		computed: {
			year() {
				return this.date.getFullYear()
			},
			month() {
				return this.date.getMonth() + 1
			},
			day() {
				return this.date.getDate()
			}
		}
	}
</script>

<style lang="scss" scoped>
.stat_to_delived_wrapper {
	padding: 16px;
	.stat_to_delived_title_wrapper {
		color: #333333;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 32px;
	}
	.stat_to_delived_date_wrapper {
		width: 100%;
		height: 24px;
		color: #666666;
		font-size: 16px;
		margin-bottom: 32px;
		.year_wrapper {
			margin-right: 28px;
		}
		.month_wrapper {
			margin: 0 28px;
		}
		.day_wrapper {
			margin-left: 28px;
		}
	}
	.goods_rank_wrapper {
		margin-top: 36px;
		.goods_rank_title_wrappr {
			color: #333333;
			font-size: 18px;
			font-weight: 600;
			margin-bottom: 16px;
		}
	}
}
</style>
