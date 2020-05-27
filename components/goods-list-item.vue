<template>
	<view class="goods_list_item_wrapper">
		<u-row>
			<u-col span="3">
				<image style="width: 72px; height: 72px;" :src="imgUrl" mode="aspectFill"></image>
			</u-col>
			<u-col span="7">
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
			<u-col class="goods_type_wrapper" span="2">
				<view class="goods_type">
					{{type}}
				</view>
			</u-col>
		</u-row>
		<u-line></u-line>
	</view>
</template>

<script>
	export default {
		name: 'goods-list-item',
		data() {
			return {
				
			};
		},
		props: {
			imgUrl: {
				type: String
			},
			cost: {
				type: Number
			},
			name: {
				type: String
			},
			tags: {
				type: Array
			},
			type: {
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods_list_item_wrapper {
	padding-top: 16px;
}
.goods_tags_wrapper {
	margin-bottom: 18px;
}
.goods_type_wrapper {
	align-self: flex-end;
}
.goods_type {
	color: #999999;
	font-size: 12px;
}
</style>
