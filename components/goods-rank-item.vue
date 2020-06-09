<template>
	<view class="goods_rank_item_wrapper">
		<u-row class="row">
			<u-col span="2">
				<view class="col_wrapper">
					<view :style="{background: bgColor, color: color}" class="rank_num center">{{index + 1}}</view>	
				</view>
			</u-col>
			<u-col span="2">
				<view class="col_wrapper">
					<image class="center" style="width: 36px; height: 36px;" :src="imgUrl" mode="aspectFill"></image>
				</view>
			</u-col>
			<u-col span="4">
				<view class="col_wrapper">
					<view class="center">
						<view class="name_wrapper">
							{{name}}
						</view>
						<view class="sub_wrapper">
							{{sub}}
						</view>
					</view>
				</view>
			</u-col>
			<u-col span="2">
				<view class="col_wrapper">
					<view class="center">
						<view class="up_content grey_font">
							{{notPayNum}}件
						</view>
						<view class="grey_font">
							未支付
						</view>
					</view>
				</view>
			</u-col>
			<u-col span="2">
				<view class="col_wrapper">
					<view class="center">
						<view class="up_content grey_font">
							{{payNum}}件
						</view>
						<view class="grey_font">
							已支付
						</view>
					</view>
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		name: 'goods-rank-item',
		data() {
			return {
				
			};
		},
		props: {
			color: String,
			bgColor: String,
			imgUrl: String,
			name: String,
			sub: String,
			notPayNum: Number,
			payNum: Number,
			index: Number
		}
	}
</script>

<style lang="scss" scoped>
.goods_rank_item_wrapper {
	background-color: #FFFFFF;
	box-shadow: 0 2px 8px 0 rgba(220,231,250,0.50);
	.col_wrapper {
		position: relative;
		height: 68px;
	}
}
.center {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.rank_num {
	width: 18px;
	height: 18px;
	border-radius: 999px;
	text-align: center;
}
.name_wrapper {
	color: #333333;
	font-size: 12px;
	white-space: nowrap;
	margin-bottom: 8px;
	font-weight: 600;
}
.sub_wrapper, .grey_font {
	color: #999999;
	font-size: 12px;
	white-space: nowrap;
}
.up_content {
	margin-bottom: 8px;
}
</style>
