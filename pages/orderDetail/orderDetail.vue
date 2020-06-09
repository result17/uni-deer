<template>
	<view>
		<view class="order_detail_title_wrapper">
			<span class="order_detail_title">暂未接单</span>
		</view>
		<view class="order_detail_client_wrapper">
			<view class="client_title_wrapper">
				<span class="client_title">客户信息</span>
			</view>
			<view class="client_context_wrapper">
				<view class="context_left_wrapper">
					<image style="width: 44px; height: 44px;" src="/static/imgs/order/icon_avatar.png" mode="aspectFit"></image>
					<view class="context_info_wrapper">
						<view class="client_name">郭李</view>
						<view class="client_phone">15002158964</view>
					</view>
				</view>
				<view class="context_right_wrapper">
					<u-line :style="{verticalAlign: 'baseline', marginRight: '16px'}" length="24px" direction="col" color="#999999"></u-line>
					<image style="width: 24px; height: 24px;" src="/static/imgs/order/icon_phone.png" mode="aspectFit"></image>
				</view>
				<view class="context_address_wrapper">
					<image style="width: 16px; height: 16px; vertical-align: bottom;" src="../../static/imgs/order/icon_address.png" mode="aspectFit"></image>
					<span class="address_prov">西安市</span>
					<span class="address_dist">雁塔区</span>
					<span class="address_detail">唐兴路唐兴数码3楼318</span>
					<u-icon color="#999999" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="order_goods_info_wrapper">
			<view class="goods_info_title_wrapper">
				<span class="goods_info_title">商品信息</span>
			</view>
			<view class="goods_info_list_wrapper">
				<goods-detailed-info
					v-for="(item, index) of goodsInfo"
					:key="index"
					:imgUrl="item.imgUrl"
					:title="item.title"
					:sub-title="item.subTitle"
					:count="item.count"
					:cost="item.cost"
					:tags="item.tags"
				></goods-detailed-info>
			</view>
			<view class="goods_info_context_wrapper">
				<view class="goods_info_context_item_wrapper">
					<view class="item_info">共{{goodsInfo.length}}件商品</view>
					<view class="item_cost">￥50</view>
				</view>
				<view class="goods_info_context_item_wrapper">
					<view class="item_info">配送费</view>
					<view class="item_cost">￥5</view>
				</view>
				<view class="goods_info_context_item_wrapper">
					<view class="item_info">立减</view>
					<view class="item_discount">-￥2.5</view>
				</view>
				<view class="goods_info_context_item_wrapper">
					<view class="item_info">优惠券</view>
					<view class="item_discount">-￥2.5</view>
				</view>
				<view class="goods_info_context_item_wrapper">
					<view class="item_info">社区币折扣</view>
					<view class="item_discount">-￥2.5</view>
				</view>
				<view class="goods_info_context_item_wrapper">
					<view class="item_info">佣金</view>
					<view class="item_discount">-￥2.5</view>
				</view>
				<u-line></u-line>
				<view class="goods_info_context_item_wrapper">
					<view class="item_info">合计</view>
					<view class="item_count">￥46.5</view>
				</view>
				<u-line></u-line>
			</view>
		</view>
		<view class="order_info_wrapper">
			<view class="order_info_title_wrapper">
				<view class="order_info_title">
					订单信息
				</view>
			</view>
			<view class="order_info_context_wrapper">
				<view class="order_info_context_item">
					<span class="item_label">订单编号：</span>
					<span class="item_context">1256324856942</span>
				</view>
				<view class="order_info_context_item">
					<span class="item_label">下单时间：</span>
					<span class="item_context">2020/07/20 12:20</span>
				</view>
				<view class="order_info_context_item">
					<span class="item_label">支付方式：</span>
					<span class="item_context">在线支付/支付宝</span>
				</view>
				<view class="order_info_context_item">
					<span class="item_label">配送方式：</span>
					<span class="item_context">送货上门</span>
				</view>
				<view class="order_info_context_item">
					<span class="item_label">客户备注：</span>
					<span class="item_context">无</span>
				</view>
			</view>
		</view>
		<view class="order_info_btn_wrapper">
			<u-button :custom-style="{ color: '#5793FA', backgroundColor: '#E1EAFA',fontSize: '18px', width: 'calc(40vw)'}" type="default">拒单</u-button>
			<u-button :custom-style="{ color: '#FFFFFF', backgroundColor: '#4688FA',fontSize: '18px', width: 'calc(40vw)'}" type="primary">接单</u-button>
		</view>
	</view>
</template>

<script>
	import goodsDetailedInfo from '../../components/goods-detailed-info'
	
	export default {
		components: {
			goodsDetailedInfo
		},
		data() {
			return {
				goodsInfo: [
					{
						imgUrl: '/static/imgs/order/icon_goods.png',
						title: '泊泉雅花瓣·浪漫亲肤玫瑰沐浴乳',
						subTitle: '玫瑰香 520ml',
						count: 1,
						cost: 25,
						tags: [{
							text: '立减2.50元',
							bgColor: '#FF4759',
							color: '#FFFFFF'
						}, {
							text: '折扣2.50元',
							bgColor: '#4688FA',
							color: '#FFFFFF'
						}]
					},
					{
						imgUrl: '/static/imgs/order/icon_goods.png',
						title: '日本纳鲁多橙饮',
						subTitle: '125ml',
						count: 1,
						cost: 25,
						tags: [{
							text: '立减2.50元',
							bgColor: '#FF4759',
							color: '#FFFFFF'
						}]
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.order_detail_title_wrapper {
		margin: 0 0 32px 16px;
	}
	.order_detail_title {
		color: #333333;
		font-size: 24px;
		font-weight: 600;
	}
	.order_detail_client_wrapper {
		margin: 0 16px 32px 16px;
	}
	.client_title_wrapper {
		margin-bottom: 16px;
	}
	.client_title, .goods_info_title, .order_info_title {
		color: #333333;
		font-size: 18px;
		font-weight: 600;
	}
	.client_context_wrapper {
		overflow: hidden;
	}
	.context_left_wrapper {
		float: left;
		overflow: hidden;
		margin-bottom: 8px;
	}
	.context_right_wrapper, .context_info_wrapper {
		float: right;
	}
	.context_info_wrapper {
		margin-left: 8px;
		color: #333333;
		font-size: 14px;
	}
	.client_name {
		margin-bottom: 8px;
	}
	.context_address_wrapper {
		clear: both;
	}
	.context_address_wrapper {
		color: #333333;
		font-size: 14px;
	}
	.address_prov {
		margin: 0 8px;
	}
	.address_dist, .address_detail {
		margin-right: 8px;
	}
	.goods_detailed_info_wrapper {
		margin-top: 16px;
	}
	.order_goods_info_wrapper {
		margin: 0 16px;
	}
	.goods_info_context_item_wrapper {
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
	}
	.item_info {
		color: #333333;
		font-size: 14px;
	}
	.item_cost, .item_context {
		@extend .item_info;
		font-weight: 500;
	}
	.item_discount {
		@extend .item_cost;
		color: #FF4759;
	}
	.order_info_wrapper {
		margin: 32px 16px 0 16px;
	}
	.order_info_context_wrapper {
		margin-top: 16px;
	}
	.order_info_context_item {
		margin-bottom: 8px;
	}
	.item_label {
		color: #999999;
		font-size: 14px;
	}
	.order_info_btn_wrapper {
		display: flex;
		margin: 16px 16px 8px 16px;
		justify-content: space-between;
	}
</style>
