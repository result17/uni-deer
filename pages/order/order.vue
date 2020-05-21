<template>
	<view>
		<order-title-header></order-title-header>
		<order-swiper></order-swiper>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import orderTitleHeader from '../../components/order-title-header.vue'
	import orderSwiper from '../../components/order-swiper.vue'
	
	export default {
		data() {
			return {
				
			};
		},
		components: {
			orderTitleHeader,
			orderSwiper
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
			// 
		},
	}
</script>

<style lang="scss" scoped>
.test {
	width: 100%;
	height: 1000px;
	background-color: yellow;
}
.order_scroll_wrapper {
	width: 100%;
	height: 100vh;
	margin-top: 10px;
}
</style>
