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
		<view class="ring_chart_wrappre">
			<my-ring-chart></my-ring-chart>
		</view>
	</view>
</template>

<script>
	import myRingChart from '@/components/my-ring-chart.vue'
	export default {
		components: {
			myRingChart
		},
		data() {
			return {
				date: new Date()
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
}
</style>
