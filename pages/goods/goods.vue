<template>
	<view class="goods_page_wrapper">
		<view class="top_icons_wrapper">
			<u-icon :style="{marginRight: '24px'}" color="#333333" size="40" name="search" @click="onSearchIconClick"></u-icon>
			<u-icon color="#333333" size="40" name="plus" @click="onPlusIconClick"></u-icon>
			<search-popup :placeholder="placeholder" v-model="showSearchPopup"></search-popup>
		</view>
		<view class="goods_selected_wrapper">
			<view class="selected_category_wrapper">
				<view :style="{ display: 'inline-block' }" @click="onCategoryBtnClick">
					<span class="selected_category">
						{{categoryList[selectedCategoryId].category}}
					</span>
					<u-icon name="arrow-down"></u-icon>
				</view>
			</view>
			<u-popup mode="top" v-model="showCategoryList" :top="124">
				<view class="category_list_wrapper">
					<view 
						class="category_list_item"
						v-for="(item, index) of categoryList"
						:key="index"
						:style="{ color: selectedCategoryId === index ? '#4688FA' : '#333333' }"
						@click="onCategoryClick(index)"
					>
						<view class="category">{{item.category}}</view>
						<view class="categoryId">({{item.id}})</view>
					</view>
				</view>
			</u-popup>
		</view>
		<view class="goods_swiper_wrapper">
			<goods-swiper></goods-swiper>
		</view>
	</view>
</template>

<script>
	import goodsSwiper from '../../components/goods-swiper.vue'
	import searchPopup from '../../components/search-popup.vue'
	
	export default {
		components: {
			goodsSwiper,
			searchPopup
		},
		data() {
			return {
				showCategoryList: false,
				showSearchPopup: false,
				selectedCategoryId: 0,
				placeholder: '请输入商品名称查询',
				categoryList: [{
					category: '全部商品',
					id: 0
				}, {
					category: '个人护理',
					id: 1
				}, {
					category: '饮料',
					id: 2
				}, {
					category: '沐浴洗护',
					id: 3
				}, {
					category: '厨房用具',
					id: 4
				}, {
					category: '休闲食品',
					id: 5
				}, {
					category: '生鲜水果',
					id: 6
				}, {
					category: '酒水',
					id: 7
				}, {
					category: '家庭护理',
					id: 8
				}]
			};
		},
		methods: {
			onCategoryClick(idx) {
				if (this.selectedCategoryId !== idx) {
					this.selectedCategoryId = idx
				}
				this.showCategoryList = false
			},
			onCategoryBtnClick() {
				this.showCategoryList = true
			},
			onSearchIconClick() {
				this.showSearchPopup = true
			},
			onPlusIconClick() {
				uni.navigateTo({
					url: './goodsEdit'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods_page_wrapper {
	padding: 16px;
}
.top_icons_wrapper {
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 28px;
}
.category_list_wrapper {
	padding: 24px 24px 0 24px;
}
.selected_category_wrapper {
	width: 100%;
	height: 36px;
}
.selected_category {
	color: #333333;
	font-size: 24px;
	margin-right: 8px;
}
.category_list_item {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 24px;
}
</style>
