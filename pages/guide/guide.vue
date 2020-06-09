<template>
	<view class="guide_page">
		<swiper 
			class="full_screen"
			:current="tabIndex"
			:circular="false"
			@change="onTabChange"
		>
			<swiper-item
				v-for="(item, index) of imgList"
				:key="index"
			>
				<image class="full_screen" :src="item.url" mode="aspectFill" @click="onTabClick"></image>
			</swiper-item>
			<swiper-item>
				<view class="full_screen"></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
					url: '../../static/imgs/start/app_start_1.png'
				}, {
					url: '../../static/imgs/start/app_start_2.png'
				}, {
					url: '../../static/imgs/start/app_start_3.png'
				}],
				tabIndex: 0,
			};
		},
		methods: {
			onTabChange(e) {
				if (e.detail.current < this.imgList.length) {	
					this.tabIndex = e.detail.current
				} else {
					uni.reLaunch({
						url: '../login/login'
					})
				}
			},
			onTabClick() {
				if (this.tabIndex === this.imgList.length - 1) {
					uni.reLaunch({
						url: '../login/login'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.full_screen {
	width: 100vw;
	height: 100vh;
}
</style>
