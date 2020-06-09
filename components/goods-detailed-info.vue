<template>
	<view class="goods_detailed_info_wrapper">
		<u-row>
			<u-col span="2" class="goods_avatar">
				<image style="width: 56px; height: 56px" :src="imgUrl" mode="aspectFit"></image>
			</u-col>
			<u-col span="7" class="goods_detailed_context">
				<view class="goods_detailed_title">
					{{title}}
				</view>
				<view class="goods_detailed_subtitile">
					{{subTitle}}
				</view>
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
			</u-col>
			<u-col :style="{color: '#555555', fontSize: '12px'}" class="goods_tag" span="1">x{{count}}</u-col>
			<u-col class="goods_tag" span="2">￥{{cost}}</u-col>
		</u-row>
		<u-line></u-line>
	</view>
</template>

<script>
	export default {
		name: 'goods-detailed-info',
		data() {
			return {
				
			};
		},
		props: {
			imgUrl: String,
			title: String,
			subTitle: String,
			count: Number,
			cost: Number,
			tags: Array
		}
	}
</script>

<style lang="scss" scoped>
.goods_detailed_title, .goods_detailed_count {
	color: #333333;
	font-size: 12px;
	font-weight: 600;
}
.goods_detailed_subtitile {
	color: #999999;
	font-size: 10px;
	margin: 4px 0 8px 0;
}
.goods_tags_wrapper {
	margin-bottom: 16px;
}
.goods_tag {
	align-self: baseline;
}
</style>
