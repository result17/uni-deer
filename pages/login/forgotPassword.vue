<template>
	<view class="fpw_page">
		<view class="fpw_title_wrapper">
			<span class="fpw_title">重置密码</span>
		</view>
		<view class="fpw_input">
			<input
				class="my_input"
				v-model="account"
				placeholder="请输入账号" 
				placeholder-class="my_placeholder"
				maxlength="15" />
			<captcha-control v-model="captcha" @input-delete="onInputDelete"></captcha-control>
			<password-input v-model="password" @input-delete="onPasswordDeleteClick"></password-input>
		</view>
		<view class="fpw_btn">
			<button class="my_btn" type="primary" :disabled="complete">确认</button>
		</view>
	</view>
</template>

<script>
	import passwordInput from '../../components/password-input.vue'
	import captchaControl from '../../components/captcha-control.vue'
	
	export default {
		components: {
			captchaControl,
			passwordInput
		},
		data() {
			return {
				account: '',
				captcha: '',
				password: '',
			};
		},
		methods: {
			onPasswordDeleteClick() {
				this.password = ''
			},
			onInputDelete() {
				this.captcha = ''
			}
		},
		computed: {
			complete() {
				return !(this.account && this.password && this.captcha)
			}
		},
	}
</script>

<style lang="scss" scoped>
.fpw_title_wrapper {
	text-align: center;
	margin-top: 20px;
}
.fpw_title {
	font-size: 26px;
}
.my_input {
	margin: 0 16px;
	min-height: 50px;
	border-bottom: 1px solid #eeeeee;
}
.my_btn {
	margin: 0 5% 6px 5%;
}
.fpw_btn {
	margin-top: 20px;
}
</style>
