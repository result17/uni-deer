<template>
	<view>
		<view class="stat_header_wrapper">
			<view class="stat_header">
				统计
			</view>
		</view>
		<view class="stat_info_wrapper">
			<view class="stat_info">
				<view class="neworder_wrapper">
					<view class="stat_info_content_wrapper">
						<image :style="{width: '40px', height: '40px', marginLeft: '10px'}" src="../../static/imgs/statistic/xdd.png" mode="aspectFit"></image>
						<view class="stat_info_title">
							新订单(单)
						</view>
						<view class="stat_info_amount">
							80
						</view>
					</view>
				</view>
				<view class="todeliver_wrapper">
					<view class="stat_info_content_wrapper">
						<image :style="{width: '40px', height: '40px', marginLeft: '10px'}" src="../../static/imgs/statistic/dps.png" mode="aspectFit"></image>
						<view class="stat_info_title">
							待配送(单)
						</view>
						<view class="stat_info_amount">
							80
						</view>
					</view>
				</view>
				<view class="today_total_amount_wrapper">
					<view class="stat_info_content_wrapper">
						<image :style="{width: '40px', height: '40px', marginLeft: '20px'}" src="../../static/imgs/statistic/jrjye.png" mode="aspectFit"></image>
						<view class="stat_info_title">
							今日交易额(元)
						</view>
						<view class="stat_info_amount">
							8,000.00
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="stat_charts_wrapper">
			<view class="stat_charts_title_wrapper">
				数据走势
			</view>
			<view class="stat_charts_content_wrapper" @click="onChartClick">
				<my-chart
					v-for="(item, index) of charts"
					:key="index"
					:title="item.title"
					:chart-url="item.chartUrl"
				></my-chart>
			</view>
		</view>
	</view>
</template>

<script>
	import myChart from '../../components/my-chart.vue'
	
	export default {
		components: {
			myChart
		},
		data() {
			return {
				charts: [{
					title: '订单统计',
					chartUrl: '../../static/imgs/statistic/sjzs.png'
				}, {
					title: '交易额统计',
					chartUrl: '../../static/imgs/statistic/jyetj.png'
				}, {
					title: '商品统计',
					chartUrl: '../../static/imgs/statistic/sptj.png'
				}]
			};
		},
		methods: {
			onChartClick() {
				uni.navigateTo({
					url: './statToDelived'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.stat_header_wrapper {
	position: relative;
	width: 100%;
	height: 72px;
	background-image: url(../../static/imgs/statistic/statistic_bg.png);
	background-size: cover;
	background-position: bottom;
	.stat_header {
		position: absolute;
		left: 16px;
		bottom: 16px;
		color: #FFFFFF;
		font-size: 26px;
	}
}
.stat_info_wrapper {
	width: 100%;
	height: 120px;
	padding: 0 16px;
	background-image: url(../../static/imgs/statistic/statistic_bg1.png);
	background-size: contain;
	.stat_info {
		display: flex;
		wdith: 100%;
		height: 120px;
		background: #FFFFFF;
		border-radius: 8px;
		box-shadow: 0 2px 8px 0 rgba(220,231,250,0.50);
	}
}
.stat_info > * {
	position: relative;
	flex: 1;
	height: 120px;
}
.stat_info_content_wrapper {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.stat_info_title {
	color: #999999;
	font-size: 12px;
	margin-bottom: 16px;
	white-space: nowrap;
}
.stat_info_amount {
	color: #333333;
	font-size: 18px;
	text-align: center;
}
.stat_charts_wrapper {
	padding: 0 16px;
	.stat_charts_title_wrapper {
		margin: 32px 0 16px 0;
		color: #333333;
		font-size: 18px;
		font-weight: 600;
	}
}
</style>
