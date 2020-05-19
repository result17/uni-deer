<template>
	<view>
		<order-title-header :style="{height: limit + 'px'}"></order-title-header>
		<scroll-view 
			class="order_scroll_wrapper"
			upper-threshold="limit"
			show-scrollbar="false"
			scroll-y="false"
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
	import orderTitleHeader from '../../components/order-title-header.vue'
	
	export default {
		data() {
			return {
				limit: 98,
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
				// if (this.limit > 50) {
				// 	this.limit -= 8
				// } else {
				// 	this.limit = 50
				// }
				console.log(this.limit)
			}
		}
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
	height: calc(100vh - 98px - 50px - 44px);
}
</style>
