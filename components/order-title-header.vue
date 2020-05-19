<template>
	<u-sticky :h5-nav-height="44" :enable="true">
		<view class="order_title_header_wrapper">
			<span class="order_title">订单</span>
			<u-icon class="search_icon" name="search" color="#eeeeee" size="32"></u-icon>
		</view>
	</u-sticky>
</template>

<script>
	export default {
		name: 'order-title-header',
		data() {
			return {
				
			};
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
}
.order_title {
	display: inline-block;
	align-self: flex-end;
	margin-left: 16px;
	color: #FFFFFF;
	font-size: 24px;
}
.search_icon {
	margin-right: 12px;
	margin-top: 12px;
}
</style>
