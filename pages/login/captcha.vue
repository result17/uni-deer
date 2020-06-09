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
			<view class="captcha_control_wrapper">
				<captcha-control v-model="captcha" @input-delete="onInputDelete"></captcha-control>
			</view>
		</view>
		<view class="captcha_tips">
			<span class="tips_context">
				提示：未注册账号的手机号，请先<span class="tips_sign_up_link" @click="onSignUpLinkClick">注册</span>
			</span>
		</view>
		<view class="captcha_btn">
			<view class="my_btn">
				<u-button type="primary" :disabled="complete" @click="onLoginBtnClick">登录</u-button>
			</view>
			<view class="my_btn">
				<u-button type="primary" @click="onPasswordBtnClick">密码登录</u-button>
			</view>
		</view>
		<view class="captcha_link">
			<span class="forgot_password" @click="onFpwBtnClick">忘记密码</span>		
		</view>
		<view v-if="showErrorMsg" class="captcha_msg">
			<span class="captcha_error_msg">验证码错误</span>
		</view>
	</view>
</template>

<script>
	import captchaControl from '../../components/captcha-control.vue'
	export default {
		components: {
			captchaControl
		},
		data() {
			return {
				account: '',
				captcha: '',
				showErrorMsg: false,
			};
		},
		methods: {
			onLoginBtnClick() {
				this.showErrorMsg = true
			},
			onPasswordBtnClick() {
				uni.navigateTo({
					url: "./login"
				})
			},
			onInputDelete() {
				this.captcha = ''
			},
			onFpwBtnClick() {
				uni.navigateTo({
					url: './forgotPassword'
				})
			},
			onSignUpLinkClick() {
				uni.navigateTo({
					url: "./signUp"
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

<style lang="scss" scoped>
	.captcha_title {
		margin-top: 20px;
		margin-left: 16px;
		margin-bottom: 16px;
		font-size: 26px;
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
	.captcha_btn {
		padding: 16px;
	}
	.my_btn {
		margin-bottom: 8px;
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
	.forgot_password {
		float: right;
		margin-right: 16px;
		margin-bottom: 16px;
		font-size: 12px;
		color: #999999;
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
