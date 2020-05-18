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
					<img width="16" src="../../assets/images/login/qyg_shop_icon_delete.png" />
				</view>
			</view>
			<view class="password_wrapper">
				<input
					class="my_input"
					v-model="password"
					:password="!showPassword" 
					placeholder="请输入密码" 
					placeholder-class="my_placeholder"
					maxlength="15" />
				<view 
					class="password_icon_wrapper"
					v-if="password"
					@click="onPasswordDeleteClick" >
					<img width="16" style="marginRight: 8px;" src="../../assets/images/login/qyg_shop_icon_delete.png" />
					<img 
						width="16" 
						v-if="showPassword"
						@click="onPasswordShowClick"
						src="../../assets/images/login/qyg_shop_icon_display.png" />
					<img 
						width="16" 
						v-if="!showPassword"
						@click="onPasswordShowClick"
						src="../../assets/images/login/qyg_shop_icon_hide.png" />
				</view>
			</view>
		</view>
		<view class="login_btn">
			<button class="my_btn" type="primary" :disabled="complete">登录</button>
			<button class="my_btn" type="primary" @click="onCaptchaBtnClick">验证码登录</button>
		</view>
		<view class="login_link">
			<span class="forgot_password">忘记密码</span>		
			<div class="sign_up">
				<span class="sign_up_link">还没账号？ 快去注册</span>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				password: '',
				showPassword: false,
			};
		},
	    methods: {
			onAccountDeleteClick() {
				this.account = ''
			},
			onPasswordDeleteClick() {
				this.password = ''
			},
			onPasswordShowClick() {
				this.showPassword = !this.showPassword
			},
			onCaptchaBtnClick() {
				uni.navigateTo({
					url: "./captcha"
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

<style lang="scss">
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
.password_icon_wrapper {
	display: inline-block;
	position: absolute;
	right: 24px;
	bottom: 12px;
}
.login_btn {
	margin-top: 20px;
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
