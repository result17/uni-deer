<template>
	<view class="goods_info_wrapper">
		<view class="goods_info_left_wrapper">
			<span class="prices">￥{{prices}}</span>
			<span class="goods_count">
				共{{goodsCount}}件商品
			</span>
		</view>
		<view class="goods_info_right_wrapper">
			<detail-time class="detail_time" :timeStamp="orderDate"></detail-time>
		</view>
	</view>
</template>

<script>
	import detailTime from './detail-time.vue'
	
	export default {
		name: 'goods-info',
		components: {
			detailTime
		},
		data() {
			return {
				
			};
		},
		props: {
			prices: Number,
			goodsCount: Number,
			orderDate: Number,
		}
	}
</script>

<style lang="scss" scoped>
	.goods_info_wrapper {
		overflow: hidden;
		margin-top: 8px;
	}
	.goods_info_left_wrapper {
		float: left;
	}
	.goods_info_right_wrapper {
		float: right;
	}
	.detail_time {
		color: #333333;
		font-size: 12px;
	}
	.prices {
		@extend .detail_time;
		margin-right: 8px;
	}
	.goods_count {
		color: #999999;
		font-size: 10px;
	}
</style>
