<template>
	<view class="goods_wrapper">
		<span class="goods_item">{{goodsName}}</span>
		<span class="goodsCount">x{{goodsCount}}</span>
	</view>
</template>

<script>
	export default {
		name: 'goods-item',
		props: {
			goodsName: String,
			goodsCount: Number
		},
	}
</script>

<style lang="scss">
.goods_wrapper {
	margin-top: 8px;
}
.goods_item {
	margin-right: 8px;
	font-size: 12px;
	color: #333333;
}
.goods_count {
	color: #999999;
	font-size: 12px;
}
</style>
