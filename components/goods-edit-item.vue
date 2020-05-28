<template>
	<view class="goods_edit_item_wrapper">
		<u-row>
			<u-col span="3">
				<image style="width: 72px; height: 72px;" :src="imgUrl" mode="aspectFill"></image>
			</u-col>
			<u-col span="4" class="goods_edit_content_wrapper">
				<view class="goods_name">{{name}}</view>
				<view class="goods_tags_wrapper">
					<u-tag
						:style="{marginRight: '6px'}"
						v-for="(item, index) of tags"
						type="info"
						:key="index" 
						:text="item.text"
						mode="dark"
						size="mini"
						:color="item.color"
						:bg-color="item.bgColor"></u-tag>
				</view>
				<view class="goods_cost">
					￥{{cost}}
				</view>
			</u-col>
			<u-col class="money_wrapper" span="3">
				<view class="money">
				佣金	{{money}}元
				</view>
			</u-col>
			<u-col class="amount_wrapper" span="2">
				<view class="amount">库存：{{amount}}件</view>
				<view class="minBuyNum">起购{{minBuyNum}}件</view>
			</u-col>
		</u-row>
		<u-line class="divder"></u-line>
	</view>
</template>

<script>
	export default {
		name: 'goods-edit-item',
		data() {
			return {
				
			};
		},
		props: {
			name: String,
			cost: Number,
			imgUrl: String,
			minBuyNum: Number,
			amount: Number,
			money: Number,
			tags: Array
		}
	}
</script>

<style lang="scss" scoped>
.goods_edit_item_wrapper {
	margin-top: 16px;
}
.goods_tags_wrapper {
	margin-bottom: 18px;
}
.money_wrapper {
	align-self: flex-end;
	.money {
		color: #333333;
		font-size: 12px;
	}
}
.amount_wrapper {
	.amount, .minBuyNum {
		color: #333333;
		font-size: 12px;
	}
	.minBuyNum {
		margin-top: 40px;
	}
}
.divder {
	margin-top: 16px;
}
</style>
