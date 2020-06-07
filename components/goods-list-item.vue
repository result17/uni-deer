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
				<view>
					<view class="goods_type">
						{{type}}
					</view>
				</view>
			</u-col>
		</u-row>
		<u-line></u-line>
		<u-mask :show="show" @click="show = false" :custom-style="{transform: 'scale(1, 1)'}">
			<view class="mask_btns_wrapper">
				<view 
					v-for="(item, index) of options"
					:key="index"
					:style="{background: item.style.bgColor}"
					@click="item.onClick"
					class="mask_btns">
					<view
						:style="{color: item.style.color}"
						class="mask_btns_text">
						{{item.text}}
					</view>
				</view>
			</view>
		</u-mask>
		<u-icon name="list" class="goods_list_item_menu_btn" @click="onBtnClick"></u-icon>
	</view>
</template>

<script>
	export default {
		name: 'goods-list-item',
		data() {
			return {
				options: [
					{
						text: '编辑',
						style: {
							bgColor: '#4688FA',
							color: '#FFFFFF'
						},
						onClick: this.onEditBtnClick
					},
					{
						text: '下架',
						style: {
							bgColor: '#FFFFFF',
							color: '#000000'
						},
						onClick: this.onOffSaleBtnClick
					},
					{
						text: '删除',
						style: {
							bgColor: '#dd524d',
							color: '#FFFFFF'
						},
						onClick: this.onDeleteBtnClick
					}
				],
				show: false,
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
			},
			idx: {
				type: Number
			}
		},
		methods: {
			onBtnClick() {
				this.show = true
			},
			onEditBtnClick() {
				uni.navigateTo({
					url: './goodsEdit',
				})
			},
			onOffSaleBtnClick() {
				console.log('offSale')
			},
			onDeleteBtnClick() {
				this.$emit('delete', this.idx)
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods_list_item_wrapper {
	position: relative;
	padding-top: 16px;
	will-change: transform;
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
.goods_list_item_menu_btn {
	position: absolute;
	top: 20px;
	right: 0;
}
.mask_btns_wrapper {
	display: flex;
	padding: 24px 48px;
	width: 100%;
	height: 100%;
	justify-content: space-around;
}
.mask_btns {
	position: relative;
	border-radius: 50%;
	width: 56px;
	height: 56px;
}
.mask_btns_text {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
</style>
