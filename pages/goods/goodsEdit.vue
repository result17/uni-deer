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
						placeholder-style="color: #ccc; font-size: 14px;"
						placeholder="请填写该分类名称"
					>
					</u-field>
					<u-field
						v-model="discountCost"
						label="折后价格"
						placeholder-style="color: #ccc; font-size: 14px;"
						placeholder="请填写该分类折后价格"
					>
					</u-field>
					<u-field
						v-model="numInRepo"
						label="库存数量"
						placeholder-style="color: #ccc; font-size: 14px;"
						placeholder="请填写该分类库存数量"
					>
					</u-field>
					<u-field
						v-model="money"
						label="佣金金额"
						placeholder-style="color: #ccc; font-size: 14px;"
						placeholder="0.00"
					>
					</u-field>
					<u-field
						v-model="minNum"
						label="起购数量"
						placeholder-style="color: #ccc; font-size: 14px;"
						placeholder="0"
					>
					</u-field>		
				</u-cell-group>
			</view>
		</view>
		<view class="discount_info_wrapper">
			<view class="discount_info_title_wrapper">
				<span class="discount_info_title">
					折扣立减
				</span>
			</view>
			<view class="discount_info_field_wrapper">
				<u-cell-group>
					<u-field
						v-model="reduceMoney"
						label="立减金额"
						placeholder-style="color: #ccc; font-size: 14px;"
						placeholder="0.00"
					>
					</u-field>
					<u-field
						v-model="discountMoney"
						label="折扣金额"
						placeholder-style="color: #ccc; font-size: 14px;"
						placeholder="0.00"
					>
					</u-field>
				</u-cell-group>
			</view>
		</view>
		<view class="spec_info_wrapper">
			<view class="spec_info_title_wrapper">
				<span class="spec_info_title">
					类型规格
				</span>
			</view>
			<view class="spec_info_field_wrapper">
				<u-cell-group>
					<u-field
						v-model="goodsType"
						label="商品类型"
						placeholder-style="color: #ccc; font-size: 14px; transform: translateX(50%)"
						placeholder="选择商品类型"
						right-icon="arrow-right"
						:disabled="true"
						@right-icon-click="onGoodsTypeIconClick"
					>
					</u-field>
					<u-field
						v-model="goodsSpec"
						label="商品规格"
						placeholder-style="color: #ccc; font-size: 14px; transform: translateX(50%)"
						placeholder="对规格进行编辑"
						right-icon="arrow-right"
						:disabled="true"
						@right-icon-click="onGoodsSpecIconClick"
					>
					</u-field>
				</u-cell-group>
			</view>
		</view>
		<view class="btn-wrapper">
			<u-button type="primary">提交</u-button>
		</view>
		<u-picker mode="selector" v-model="showPicker" :default-selector="[0]" :range="selectorTypeList" @confirm="onPickerConfirm"></u-picker>
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
				reduceMoney: '',
				discountMoney: '',
				goodsType: '',
				goodsSpec: '',
				showPicker: false,
				selectorTypeList: ['超市便利', '生鲜果蔬', '零食小吃', '美食餐饮', '鲜花烘培', '生活服务', '其他',
				'综合', '美容个护', '家居生活', '服饰箱包', '母婴玩具', '海淘进口', '快递代收', '食品保健', '家居生活',
				'米面杂粮', '水果生鲜', '社区健身', '艺术礼品', '今日特卖', '周边旅游', '家装建材', '虚拟商品',
				'生活用品', '手机数码'],
			}
		},
		methods: {
			onGoodsTypeIconClick() {
				this.showPicker = true
			},
			onGoodsSpecIconClick() {
				uni.navigateTo({
					url: './goodsSpecEdit'
				})
			},
			onPickerConfirm(idx) {
				this.goodsType = this.selectorTypeList[idx]
			}
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
.discount_info_title_wrapper, .spec_info_title_wrapper {
	margin: 32px 0 16px 0;
}
.spec_info_title_wrapper {
	margin-bottom: 16px;
}
.discount_info_title, .spec_info_title {
	color: #333333;
	font-size: 18px;
}
</style>
