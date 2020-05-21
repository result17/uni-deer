<template>
	<view class="status_order_item_wrapper">
		<view class="head_wrapper">
			<view class="head_left_wrapper">
				<span class="phone">{{order.phone}}</span>
				<span class="client">{{'(' + order.client + ')'}}</span>
			</view>
			<view class="head_right_wrapper">
				<span :class="[order.isPayed ? payClass : notPayClass]">{{order.payMethod}}</span>
			</view>
			<view class="fulllAdress">
				<span class="area">{{order.area}}</span>
				<span class="adress">{{order.adress}}</span>
			</view>
			<u-line color="#EEEEEE" :hair-line="false"></u-line>
		</view>
		<view class="body_wrapper">
			<goods-item 
				v-for="(item, index) of order.goods" 
				:key="index" 
				:goodsName="item.name"
				:goodsCount="item.count"></goods-item>
		</view>
	</view>
</template>

<script>
	import goodsItem from './goods-item.vue'
	export default {
		name: 'my-status-order-item',
		components: {
			goodsItem
		},
		data() {
			return {
				payClass: 'payed',
				notPayClass: 'notPayed'
			};
		},
		props: {
			order: Object
		}
	}
</script>

<style lang="scss" scoped>
.status_order_item_wrapper {
	width: 100%;
	height: auto;
	background-color: #FFFFFF;
	font-size: 14px;
	padding: 16px 16px 0 16px
}
.head_wrapper {
	overflow: hidden;
}
.head_left_wrapper {
	float: left;
}
.head_right_wrapper {
	float: right;
}
.phone {
	margin-right: 8px
}
.notPayed {
	color: #FF4759;
	font-size: 12px;
}
.payed {
	font-size: 12px;
}
.fulllAdress {
	clear: both;
	font-size: 12px;
	color: #999999;
}
.area {
	margin-right: 8px;
}
</style>
