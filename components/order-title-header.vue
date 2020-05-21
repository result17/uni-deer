<template>
	<view class="order_title_header_wrapper">
		<span class="order_title">订单</span>
		<u-icon class="search_icon" name="search" color="#eeeeee" size="36"></u-icon>
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
			
		}
	}
</script>

<style lang="scss" scoped>
.order_title_header_wrapper {
	width: 100%;
	height: 50px;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: flex-start;
	background-image: linear-gradient(-225deg, #5758FA 0%, #5793FA 100%);
}
.order_title {
	display: inline-block;
	margin: auto;
	color: #FFFFFF;
	font-size: 18px;
}
.search_icon {
	position: absolute;
	right: 16px;
	top: 12px;
}
</style>
