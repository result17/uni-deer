<template>
	<view>
		<view class="flow_item_content_wrapper">
			<view class="left">
				<view class="flow_item_name">
					{{name}}
				</view>
				<view class="flow_item_time">
					{{time}}
				</view>
			</view>
			<view class="right">
				<view :style="{color: money > 0 ? '#FF4759' : '#333333'}" class="flow_item_money">
					{{money > 0 ? `+${money}.00` : `${money}.00`}}
				</view>
				<view class="flow_item_remain">
					余额：{{remain}}.00
				</view>
			</view>
		</view>
		<view :style="{ fontSize: 0}">
			<u-line></u-line>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'flow-item',
		data() {
			return {
				
			};
		},
		props: {
			name: String,
			time: String,
			money: Number,
			remain: Number
		}
	}
</script>

<style lang="scss" scoped>
.flow_item_content_wrapper {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 72px;
	padding: 16px;
	.left {
		.flow_item_name {
			color: #333333;
			font-size: 14px;
			margin-bottom: 8px;
		}
		.flow_item_time {
			color: #999999;
			font-size: 12px;
		}
	}
	.right {
		.flow_item_money {
			text-align: right;
			margin-bottom: 8px;
		}
		.flow_item_remain {
			color: #999999;
			font-size: 12px;
		}
	}
}
</style>
