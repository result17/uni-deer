<template>
	<view >
		<order-title-header></order-title-header>
		<order-swiper></order-swiper>
		<view @mousewheel.stop.prevent></my-popup-action-list>>
			<my-popup-action-list v-if="showPayMethodsList" @touchmove.stop.prevent></my-popup-action-list>
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
			if (this.isLogin) {
				uni.reLaunch({
					url: '../login/login'
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
