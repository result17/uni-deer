<template>
	<view>
		<view class="captcha_title">
			验证码登录
		</view>
		<view class="captcha_input">
			<view class="account_wrapper">
				<input
					class="my_input"
					v-model="account"
					placeholder="请输入账号" 
					placeholder-class="my_placeholder"
					maxlength="15" />
			</view>
			<view class="captcha_wrapper">
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
		</view>
		<view class="captcha_tips">
			<span class="tips_context">
				提示：未注册账号的手机号，请先<span class="tips_sign_up_link">注册</span>
			</span>
		</view>
		<view class="captcha_btn">
			<button class="my_btn" type="primary" :disabled="complete" @click="onLoginBtnClick">登录</button>
			<button class="my_btn" type="primary" @click="onPasswordBtnClick">密码登录</button>
		</view>
		<view class="captcha_link">
			<span class="forgot_password">忘记密码</span>		
		</view>
		<view v-if="showErrorMsg" class="captcha_msg">
			<span class="captcha_error_msg">验证码错误</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				captcha: '',
				hasSentCaptchaReqSec: 0,
				getCaptchaTimerId: 0,
				hasSentCaptchaReq: false,
				showErrorMsg: false
			};
		},
		methods: {
			onCaptchaDeleteClick() {
				this.captcha = ''
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
			},
			onLoginBtnClick() {
				this.showErrorMsg = true
			},
			onPasswordBtnClick() {
				uni.navigateTo({
					url: "./login"
				})
			}
		},
		computed: {
			complete() {
				return !(this.account && this.captcha)
			}
		}
	}
</script>

<style lang="scss">
.captcha_title {
	margin-top: 20px;
	margin-left: 16px;
	margin-bottom: 16px;
	font-size: 26px;
}
.captcha_wrapper {
	position: relative;
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
.my_input {
	margin: 0 16px;
	min-height: 50px;
	border-bottom: 1px solid #eeeeee;
}
.my_placeholder {
	font-size: 14px;
	color: #999999;
}
.captcha_tips {
	margin-top: 9px;
	margin-left: 16px;
	margin-bottom: 24px;
}
.tips_context {
	font-size: 12px;
	color: #999999;
}
.tips_sign_up_link {
	color: #FF4759;
}
.my_btn {
	margin: 0 5% 6px 5%;
}
.forgot_password {
	float: right;
	margin-right: 16px;
	margin-bottom: 16px;
	font-size: 12px;
	color: #999999;
}
.captcha_sent_btn {
	color: #FFFFFF;
	background: #CCCCCC;
	font-size: 12px;
	padding: 3px;
}
.captcha_msg {
	margin-top: 44px;
	position: relative;
}
.captcha_error_msg {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	padding: 6px 12px;
	border-radius: 14px;
	font-size: 14px;
	color: #FFFFFF;
	background: #777777;
}
</style>
