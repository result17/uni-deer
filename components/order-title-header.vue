<template>
	<view class="order_title_header_wrapper" @mousewheel.stop.prevent>
		<span class="order_title">订单</span>
		<u-icon class="search_icon" name="search" color="#eeeeee" size="36" @click="onSearchIconClick"></u-icon>
		<search-popup :placeholder="placeholder" v-model="showPopUp"></search-popup>
	</view>
</template>

<script>
	import searchPopup from './search-popup.vue'
	
	// 滚动发生在search-popup组件的父元素从而冒泡到页面根元素，产生滚动，使得遮罩层下的元素滚动了
	export default {
		name: 'order-title-header',
		components: {
			searchPopup
		},
		data() {
			return {
				showPopUp: false,
				placeholder: '时间关键字查询'
			};
		},
		methods: {
			onSearchIconClick() {
				if (!this.showPopUp) {
					this.showPopUp = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.order_title_header_wrapper {
	width: 100%;
	height: 50px;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: flex-start;
	background-image: linear-gradient(-225deg, #5758FA 0%, #5793FA 100%);
}
.order_title {
	display: inline-block;
	margin: auto;
	color: #FFFFFF;
	font-size: 18px;
}
.search_icon {
	position: absolute;
	right: 16px;
	top: 12px;
}
</style>
