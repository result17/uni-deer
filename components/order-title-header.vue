<template>
	<view class="order_title_header_wrapper">
		<span :style="{ fontSize: titleFontSize + 'px', margin:  titleMargin}" class="order_title">订单</span>
		<u-icon class="search_icon" name="search" color="#eeeeee" size="32"></u-icon>
	</view>
</template>

<script>
	export default {
		name: 'order-title-header',
		data() {
			return {
				
			};
		},
		props: {
			titleFontSize: {
				type: Number
			},
			titleMargin: {
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
.order_title_header_wrapper {
	width: 100%;
	height: 98px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	background-image: linear-gradient(-225deg, #5758FA 0%, #5793FA 100%);
	padding: 0 16px;
}
.order_title {
	display: inline-block;
	align-self: flex-end;
	color: #FFFFFF;
	transition: all .1s ease-in-out;
}
.search_icon {
	margin-top: 12px;
}
</style>
