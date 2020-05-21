<template>
	<view>
		<span class="goodsItem">{{goodsName}}</span>
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
.goodsItem {
	margin-right: 8px;
	font-size: 12px;
	color: #333333;
}
.goodsCount {
	color: #999999;
	font-size: 12px;
}
</style>
