<template>
	<view class="mini_cal_wrapper">
		<view class="mini_cal_context">
			<view class="mini_cal_left_wrapper">
				<image style="width: 14px; height: 14px;" mode="aspectFit" :src="imgSource"></image>
				<span class="date_wrapper">{{year}}年{{month}}月{{day}}日</span>
			</view>
			<view class="mini_cal_right_wrapper">{{count}}单</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'mini-calendar',
		data() {
			return {
				imgSource: '/static/imgs/order/icon_calendar.png'
			};
		},
		props: {
			year: {
				type: Number
			},
			month: {
				type: Number
			},
			day: {
				type: Number
			},
			count: {
				type: Number
			}
		}
	}
</script>

<style lang="scss" scoped>
.mini_cal_wrapper {
	display: flex;
	overflow: hidden;
	padding: 0 16px;
	height: 34px;
	background-color: #FFFFFF;
	box-shadow: 0 2px 4px 0 rgba(220, 231, 250, .7);
}
.mini_cal_context {
	width: 100%;
	margin: auto 0;
}
.mini_cal_left_wrapper {
	float: left;
}
.mini_cal_right_wrapper {
	float: right;
}
.date_wrapper {
	margin-left: 8px;
}
</style>
