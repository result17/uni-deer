<template>
	<view class="goods_spec_edit_wrapper">
		<view class="goods_name_edit_wrapper">
			<p class="goods_name">
				{{goodsName}}
			</p>
			<p class="goods_name_edit_tips" @click="onEditWrapperClick">
				先对名称进行
				<span class="edit_fonts">编辑</span>
			</p>
		</view>
		<view class="goods_swiper_edit_wrapper">
			<goods-edit-item
				v-for="(item, index) of goodsList"
				:key="index"
				:imgUrl="item.imgUrl"
				:name="item.name"
				:min-buy-num="item.minBuyNum"
				:cost="item.cost"
				:money="item.money"
				:tags="item.tags"
				:amount="item.amount"
			></goods-edit-item>
		</view>
		<u-modal v-model="showModal" :title="modelTitle" :content-slot="true" :mask-close-able="true" :content-style="modalContentStyle" :show-cancel-button="true">
			<view class="modal_content">
				<input v-model="newGoodsName" type="text" placeholder="输入文字" />
			</view>
		</u-modal>
	</view>
</template>

<script>
	import data from '../../static/data/goodsEdit.js'
	import goodsEditItem from '../../components/goods-edit-item.vue'
	
	export default {
		components: {
			goodsEditItem
		},
		data() {
			return {
				goodsName: '商品规格名称',
				showModal: false,
				modelTitle: '规格名称',
				newGoodsName: '',
				modalContentStyle: {
					margin: '16px'
				},
				goodsList: []
			};
		},
		methods: {
			onEditWrapperClick() {
				this.showModal = true
			}
		},
		mounted() {
			for (const goods of data.goods) {
				this.goodsList.push(goods)
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods_spec_edit_wrapper {
	padding: 20px 16px;
	.goods_name_edit_wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		.goods_name {
			color: #333333;
			font-size: 24px;
			font-weight: 600;
			margin-bottom: 8px;
		}
		.goods_name_edit_tips {
			color: #999999;
			font-size: 14px;
			.edit_fonts {
				color: $deer-main-theme;
			}
		}
	}
	.goods_swiper_edit_wrapper {
		// 
	}
}
.modal_content {
	margin: 16px 36px;
}
</style>
