<template>
	<view>
		<view class="shop_verify_status_wrapper">
			<view class="shop_verify_status_img_wrapper">
				<image :style="{width: '80px', height: '80px'}"class="shop_verify_status_img" src="../../static/imgs/store/icon_success.png"></image>
			</view>
			<div class="shop_verify_status_title">恭喜，店铺资料审核成功</div>
			<div class="shop_verify_date">2020-05-20 15:20:20</div>
			<div class="shop_verify_enter_ins">{{second}}秒后进入主页面</div>
		</view>
		<view class="shop_verify_enter_wrapper">
			<button type="primary" class="my_btn" @click="onVerifyBtnClick">进入</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				second: 5,
				timerId: 0,
			};
		},
		mounted() {
			const context = this
			this.timerId = setTimeout(function fn() {
				if (this.second > 0) {
					this.second--
					this.timerId = setTimeout(fn.bind(this), 1000)
				} else {
					clearTimeout(this.timerId)
					uni.switchTab({
						url: '../order/order'
					})
					this.second = 5
					this.timerId = 0
				}
			}.bind(this), 1000)
		},
		methods: {
			onVerifyBtnClick() {
				clearTimeout(this.timerId)
				uni.switchTab({
					url: '../order/order'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.shop_verify_status_wrapper {
	margin-top: 57px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
}
.shop_verify_status_title {
	margin-top: 24px;
	font-size: 16px;
	color: #333333;
}
.my_btn {
	margin: 16px 5% 0px 5%;
}
.shop_verify_date, .shop_verify_enter_ins {
	margin-top: 8px;
	font-size: 12px;
	color: #999999;
}
</style>
