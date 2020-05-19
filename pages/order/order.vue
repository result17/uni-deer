<template>
	<view>
		<order-title-header :style="{height: titleHeight + 'px'}" :title-font-size="titleFontSize" :title-margin="titleMargin"></order-title-header>
		<scroll-view 
			@touchmove.stop.prevent
			class="order_scroll_wrapper"
			show-scrollbar="false"
			scroll-y="true"
			@scroll="onUpperScroll">
			<view class="order_scroll_inner_wrapper">
				<view class="test">
					测试
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import lodash from 'lodash'
	import orderTitleHeader from '../../components/order-title-header.vue'
	
	export default {
		data() {
			return {
				titleHeight: 98,
				titleFontSize: 24,
				titleMargin: '0 0 0 0',
			};
		},
		components: {
			orderTitleHeader
		},
		computed: mapState(['isLogin']),
		onLoad() {
			if (this.isLogin) {
				uni.reLaunch({
					url: '../login/login'
				})
			}
		},
		methods: {
			onUpperScroll(e) {
				if (this.titleHeight > 50 && !Number.isNaN(e.detail.deltaY) && e.detail.deltaY) {
					let temp = Math.floor(e.detail.deltaY + this.titleHeight)
					const oldHeight = this.titleHeight
					temp = temp > 50 ? temp : 50
					const tempFs = this.handleTitleFontSize(temp)
					const tempMargin = this.handleTitleMargin(temp)
					this.titleFontSize = tempFs
					this.titleHeight = temp
					this.titleMargin = tempMargin
				}
				return
			},
			handleTitleFontSize(height) {
				let tempFs = 18
				if (height > 90 && height <= 98) {
					tempFs = 24
					return tempFs
				} else if (height <= 90 && height > 82) {
					tempFs = 23
					return tempFs
				} else if (height <= 90 && height > 82) {
					tempFs = 22
					return tempFs
				} else if (height <= 82 && height > 74) {
					tempFs = 21
					return tempFs
				} else if (height <= 74 && height > 66) {
					tempFs = 20
					return tempFs
				} else if (height <= 66	&& height > 58) {
					tempFs = 19
					return tempFs
				} else if (height >= 58 && height <= 50) {
					tempFs = 18
					return tempFs
				}
				return tempFs
			},
			handleTitleMargin(height) {
				let tempMargin = 'auto'
				if (height > 90 && height <= 98) {
					tempMargin = '0 0 0 0'
					return tempMargin
				} else if (height <= 90 && height > 82) {
					tempMargin = '0 0 0 8%'
					return tempMargin
				} else if (height <= 90 && height > 82) {
					tempMargin = '0 0 0 16%'
					return tempMargin
				} else if (height <= 82 && height > 74) {
					tempMargin = '0 0 1px 24%'
					return tempMargin
				} else if (height <= 74 && height > 66) {
					tempMargin = '0 0 2px 32%'
					return tempMargin
				} else if (height <= 66	&& height > 58) {
					tempMargin = '0 0 3px 40%'
					return tempMargin
				} else if (height >= 58 && height <= 50) {
					tempFs = 'auto'
					return tempFS
				}
				return tempMargin
			}
		},
	}
</script>

<style lang="scss" scoped>
.test {
	width: 100%;
	// 调整像素为刚好的高度，不再触发事件
	height: 1000px;
	background-color: yellow;
}
.order_scroll_wrapper {
	width: 100%;
	height: calc(100vh);
}
</style>
