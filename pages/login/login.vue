<template>
	<view>
		<view class="login_title">
			密码登录
		</view>
		<view class="login_input">
			<view class="account_wrapper">
				<input
					class="my_input"
					v-model="account"
					placeholder="请输入账号" 
					placeholder-class="my_placeholder"
					maxlength="15" />
				<view 
					v-if="account" 
					class="account_icon_wrapper"
					@click="onAccountDeleteClick" >
					<image :style="{width: '16px', height: '16px'}" src="../../static/imgs/login/qyg_shop_icon_delete.png" />
				</view>
			</view>
			<password-input v-model="password" @input-delete="onPasswordDeleteClick"></password-input>
		</view>
		<view class="login_btn">
			<view class="my_btn">
				<u-button type="primary" :disabled="complete" @click="onLoginBtnClick">登录</u-button>
			</view>
			<view class="my_btn">
				<u-button class="my_btn" type="primary" @click="onCaptchaBtnClick">验证码登录</u-button>
			</view>
		</view>
		<view class="login_link">
			<span class="forgot_password" @click="onFpwBtnClick">忘记密码</span>		
			<div class="sign_up">
				<span class="sign_up_link" @click="onSignUpLinkClick">还没账号？ 快去注册</span>
			</div>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import passwordInput from '../../components/password-input.vue'
	
	export default {
		components: {
			passwordInput
		},
		data() {
			return {
				account: '',
				password: '',
			};
		},
		onReady() {
			this.showToast()
		},
		methods: {
			onAccountDeleteClick() {
				this.account = ''
			},
			onCaptchaBtnClick() {
				uni.navigateTo({
					url: "./captcha"
				})
			},
			onPasswordDeleteClick() {
				this.password = ''
			},
			onSignUpLinkClick() {
				uni.navigateTo({
					url: './signUp'
				})
			},
			onFpwBtnClick() {
				uni.navigateTo({
					url: './forgotPassword'
				})
			},
			onLoginBtnClick() {
				uni.navigateTo({
					url: '../shop/shop'
				})
				this.$store.commit('login')
			},
			showToast() {
				this.$refs.uToast.show({
					title: '账号和密码无限制，都不为空即可',
					icon: false,
					position: 'bottom',
					duration: 3000,
					type: 'default'
				})
			}
	  },
		computed: {
			complete() {
				return !(this.account && this.password)
			}
		}
}
</script>

<style lang="scss" scoped>
	.login_title {
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
	.account_wrapper, .password_wrapper {
		position: relative;
	}
	.account_icon_wrapper {
		display: inline-block;
		position: absolute;
		right: 24px;
		bottom: 12px;
	}
	.login_btn {
		margin-top: 20px;
		padding: 0 16px;
	}
	.my_btn {
		margin-bottom: 8px;
	}
	.forgot_password {
		float: right;
		margin-right: 16px;
		margin-bottom: 16px;
		font-size: 12px;
		color: #999999;
	}
	.sign_up {
		clear: both;
		position: relative;
	}
	.sign_up_link {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		font-size: 14px;
		color: #4688FA;
	}
</style>
