<template>
	<view>
		<input
			class="my_input"
			v-model="captcha"
			placeholder="请输入验证码" 
			placeholder-class="my_placeholder"
			maxlength="6" />
		<view 
			class="captcha_icon_wrapper"
			v-if="captcha"
			@click="onCaptchaDeleteClick" >
			<img width="16" style="marginRight: 8px;" src="../../assets/images/login/qyg_shop_icon_delete.png" />
		</view>
		<view class="captcha_get_wrapper">
			<span v-if="hasSentCaptchaReqSec === 0" class="captcha_get_btn" @click="onGetCaptchaBtnClick">{{this.hasSentCaptchaReq ? '重新获取' : '获取验证码'}}</span>
			<span v-if="hasSentCaptchaReqSec > 0" class="captcha_sent_btn">已发送{{this.hasSentCaptchaReqSec}}秒</span>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'captcha-control'
		data() {
			return {
				hasSentCaptchaReqSec: 0,
				getCaptchaTimerId: 0,
				hasSentCaptchaReq: false,
				showErrorMsg: false
			};
		},
		method: {
			onGetCaptchaBtnClick() {
				const context = this
				this.getCaptchaTimerId = setTimeout(function fn() {
				    this.hasSentCaptchaReq = true
					if (this.hasSentCaptchaReqSec < 60) {
						this.hasSentCaptchaReqSec++
						this.getCaptchaTimerId = setTimeout(fn.bind(context), 1000)
					} else {
						clearTimeout(this.getCaptchaTimerId)
						this.hasSentCaptchaReqSec = 0
						this.getCaptchaTimerId = 0
					}
				}.bind(context), 1000)
			}
		}
	}
</script>

<style lang="scss">
.my_input {
	margin: 0 16px;
	min-height: 50px;
	border-bottom: 1px solid #eeeeee;
}
.captcha_icon_wrapper {
	display: inline-block;
	position: absolute;
	right: 90px;
	bottom: 12px;
}
.captcha_get_wrapper {
	display: inline-block;
	position: absolute;
	right: 24px;
	bottom: 14px;
}
</style>
