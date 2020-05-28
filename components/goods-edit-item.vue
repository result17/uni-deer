<template>
	<view class="goods_edit_item_wrapper">
		<u-swipe-action :show="show" :options="options" @click="onSwipeActionDelBtnClick" @open="onOpen" @close="onClose">
			<u-row class="row_wrapper">
				<u-col class="goods_img_wrapper" span="3">
					<image style="width: 72px; height: 72px;" :src="imgUrl" mode="aspectFill"></image>
				</u-col>
				<u-col span="5" class="goods_edit_content_wrapper">
					<view class="goods_name">{{name}}</view>
					<view class="goods_tags_wrapper">
						<u-tag
							v-for="(item, index) of tags"
							:style="{marginRight: index === tags.length - 1 ? '0' : '6px', fontSize: '10px'}"
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
				<u-col class="goods_money_wrapper" span="2">
					<view class="money">
					佣金{{money}}元
					</view>
				</u-col>
				<u-col class="goods_amount_wrapper" span="2">
					<view class="amount">库存：{{amount}}件</view>
					<view class="minBuyNum">起购{{minBuyNum}}件</view>
				</u-col>
			</u-row>
			<u-line class="divder"></u-line>
		</u-swipe-action>
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
			tags: Array,
			show: Boolean,
			options: Array,
			index: Number
		},
		methods: {
			onSwipeActionDelBtnClick() {
				this.$emit('delete', this.index)
			},
			onOpen() {
				this.$emit('open', this.index)
			},
			onClose() {
				this.$emit('close', this.index)
			}
		}
	}
</script>

<style lang="scss" scoped>
// 设置统一子元素高度
.row_wrapper > * {
	height: 72px;
}
.goods_edit_content_wrapper {
	position: relative;
	font-size: 14px;
	color: #333333;
	.goods_cost {
		position: absolute;
		left: 0;
		bottom: 0;
	}
}
.goods_money_wrapper {
	position: relative;
	font-size: 12px;
	color: #333333;
	.money {
		position: absolute;
		left: 0;
		bottom: 0;
	}
}
.goods_amount_wrapper {
	position: relative;
	font-size: 12px;
	color: #333333;
	.amount {
		position: absolute;
		left: 0;
		top: 0;
	}
	.minBuyNum {
		position: absolute;
		left: 0;
		bottom: 0;
	}
}
</style>
