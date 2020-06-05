<template>
	<view class="captcha_wrapper">
		<input
			class="my_input"
			:value="value"
			@input="$emit('input', $event.target.value)"
			placeholder="请输入验证码" 
			placeholder-class="my_placeholder"
			maxlength="6" />
		<view 
			class="captcha_icon_wrapper"
			v-if="value"
			@click="onCaptchaDeleteClick" >
			<image :style="{marginRight: '8px', width: '16px', height: '16px'}" src="../static/imgs/login/qyg_shop_icon_delete.png"></image>
		</view>
		<view class="captcha_get_wrapper">
			<span v-if="hasSentCaptchaReqSec === 0" class="captcha_get_btn" @click="onGetCaptchaBtnClick">{{this.hasSentCaptchaReq ? '重新获取' : '获取验证码'}}</span>
			<span v-if="hasSentCaptchaReqSec > 0" class="captcha_sent_btn">已发送{{this.hasSentCaptchaReqSec}}秒</span>
		</view>
	</view>
</template>

<script>
	// 父元素relative
	export default {
		name: 'captcha-control',
		props: {
			value: String
		},
		model: {
			prop: 'value',
			event: 'input',
		},
		data() {
			return {
				hasSentCaptchaReqSec: 0,
				getCaptchaTimerId: 0,
				hasSentCaptchaReq: false,
			};
		},
		methods: {
			onCaptchaDeleteClick() {
				this.$emit('input-delete')
			},
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
.captcha_wrapper {
	position: relative;
}
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
.captcha_get_btn {
	padding: 3px;
	border: 1px solid #689EFD;
	font-size: 12px;
	color: #689EFD;
}
.captcha_sent_btn {
	color: #FFFFFF;
	background: #CCCCCC;
	font-size: 12px;
	padding: 3px;
}
</style>
