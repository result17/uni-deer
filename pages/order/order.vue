<template>
	<view >
		<view v-if="isLogin">
			<order-title-header></order-title-header>
			<order-swiper></order-swiper>
			<view @mousewheel.stop.prevent>
				<my-popup-action-list v-if="showPayMethodsList" @touchmove.stop.prevent></my-popup-action-list>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import orderTitleHeader from '../../components/order-title-header.vue'
	import orderSwiper from '../../components/order-swiper.vue'
	import myPopupActionList from '../../components/my-popup-action-list.vue'
	
	export default {
		data() {
			return {
				
			};
		},
		components: {
			orderTitleHeader,
			orderSwiper,
			myPopupActionList,
		},
		computed: {
			...mapState(['isLogin', 'showPayMethodsList']),
		},
		onLoad() {
			const value = uni.getStorageSync('launchFlag')
			if (value) {
				if (!this.isLogin) {
					uni.reLaunch({
						url: '../login/login'
					})
				}
			} else {
				uni.setStorage({
				      key: 'launchFlag',
				      data: true
				 })
				uni.reLaunch({
					url: '../guide/guide'
				})
			}
		},
		methods: {
			onScroll(event) {
				event.preventDefault()
				event.stopPropagation()
				return true
			}
		},
	}
</script>

<style lang="scss" scoped>
	.order_scroll_wrapper {
		width: 100%;
		height: 100vh;
		margin-top: 10px;
	}
</style>
