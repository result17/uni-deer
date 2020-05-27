<template>
	<view class="goods_edit_wrapper">
		<view class="base_info_wrapper">
			<view class="base_info_title_wrapper">
				<span class="base_info_title">基本信息</span>
			</view>
			<view class="img_picker_wrapper">
				<image :style="{width: '96px', height: '96px'}" src="../../static/imgs/goods/icon_zj.png" mode="aspectFit"></image>
				<p class="img_picker_tips">
					点击添加分类图片
				</p>
			</view>
			<view class="base_info_field_wrapper">
				<u-cell-group>
					<u-field
						v-model="typeName"
						label="分类名称"
						placeholder="请填写该分类名称"
					>
					</u-field>
					<u-field
						v-model="discountCost"
						label="折后价格"
						placeholder="请填写该分类折后价格"
					>
					</u-field>
					<u-field
						v-model="numInRepo"
						label="库存数量"
						placeholder="请填写该分类库存数量"
					>
					</u-field>
					<u-field
						v-model="money"
						label="佣金金额"
						placeholder="0.00"
					>
					</u-field>
					<u-field
						v-model="minNum"
						label="起购数量"
						placeholder="0"
					>
					</u-field>		
				</u-cell-group>
			</view>
		</view>
		<view class="discount_info_wrapper"></view>
		<view class="spec_info_wrapper"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeName: '',
				discountCost: '',
				numInRepo: '',
				money: '',
				minNum: '',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.goods_edit_wrapper {
	padding: 20px 16px;
}
.base_info_title_wrapper {
	color: #333333;
	font-size: 18px;
	margin-bottom: 16px;
}
.img_picker_wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.img_picker_tips {
	margin: 8px 0 16px 0;
	color: #999999;
	font-size: 14px
}
</style>
