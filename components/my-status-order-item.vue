<template>
	<view class="status_order_item_wrapper" @click="onOrderItemClick">
		<view class="head_wrapper">
			<view class="head_left_wrapper">
				<span class="phone">{{order.phone}}</span>
				<span class="client">{{'(' + order.client + ')'}}</span>
			</view>
			<view class="head_right_wrapper">
				<span :class="[order.isPayed ? payClass : notPayClass]">{{order.payMethod}}</span>
			</view>
			<view class="fullAdress">
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
				:goodsCount="item.count">
			</goods-item>
			<goods-info :prices="order.prices" :goodsCount="order.goods.length" :orderDate="order.orderTime"></goods-info>
			<u-line color="#EEEEEE" :hair-line="false"></u-line>
		</view>
		<view class="footer_wrapper">
			<view class="footer_left_wrapper">
				<u-button :custom-style="customDefaultStyle" shape="square" size="mini">联系客户</u-button>
			</view>
			<view class="footer_right_wrapper">
				<my-status-order-btn :status="status"></my-status-order-btn>
			</view>
		</view>
	</view>
</template>

<script>
	import goodsItem from './goods-item.vue'
	import myStatusOrderBtn from './my-status-order-btn.vue'
	import goodsInfo from './goods-info.vue'
	// import myPopupActionList from './my-popup-action-list.vue'
	
	export default {
		name: 'my-status-order-item',
		components: {
			goodsItem,
			myStatusOrderBtn,
			goodsInfo,
			// myPopupActionList
		},
		data() {
			return {
				actionListShow: false,
				payClass: 'payed',
				notPayClass: 'notPayed',
				customDefaultStyle: {
					backgroundColor: '#F6F6F6',
					borderRadius: '4px',
					color: '#333333',
					fontSize: '12px',
				}
			};
		},
		props: {
			order: Object,
			status: String,
		},
		methods: {
			onOrderItemClick() {
				uni.navigateTo({
					url: '/pages/orderDetail/orderDetail',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_order_item_wrapper {
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
		font-size: 14px;
		padding: 16px;
		box-shadow: 0 2px 8px 0 rgba(220, 231, 250, .7);
		border-radius: 8px;
		margin-top: 8px;
	}
	.head_wrapper, .footer_wrapper {
		overflow: hidden;
	}
	.footer_left_wrapper {
		float: left;
	}
	.head_left_wrapper {
		@extend .footer_left_wrapper;
		margin-bottom: 8px;
	}
	.head_right_wrapper, .footer_right_wrapper {
		float: right;
	}
	.phone {
		margin-right: 8px;
	}
	.notPayed {
		color: #FF4759;
		font-size: 12px;
	}
	.payed {
		font-size: 12px;
	}
	.fullAdress {
		clear: both;
		font-size: 12px;
		color: #999999;
	}
	.area {
		margin-right: 8px;
	}
</style>
