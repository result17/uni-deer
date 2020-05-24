<template>
	<view>
		<view class="order_detail_title_wrapper">
			<span class="order_detail_title">暂未接单</span>
		</view>
		<view class="order_detail_client_wrapper">
			<view class="client_title_wrapper">
				<span class="client_title">客户信息</span>
			</view>
			<view class="client_context_wrapper"></view>
		</view>
		<view class="order_goods_info_wrapper">
			<view class="goods_info_title_wrapper">
				<span class="goods_info_title">商品信息</span>
				<view class="goods_info_list_wrapper"></view>
				<view class="goods_info_context_wrapper"></view>
			</view>
			<view class="order_info_wrapper">
				<view class="order_info_title_wrapper"></view>
				<view class="order_info_context_wrapper"></view>
			</view>
			<view class="order_info_btn_wrapper">
				<u-button type="default">拒单</u-button>
				<u-button type="primary">接单</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
