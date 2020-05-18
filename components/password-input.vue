<template>
	<view class="password_wrapper">
		<input
			class="my_input"
			:value="value"
			@input="$emit('input', $event.target.value)"
			:password="!showPassword" 
			placeholder="请输入密码" 
			placeholder-class="my_placeholder"
			maxlength="15" />
		<view 
			class="password_icon_wrapper"
			v-if="value"
			>
			<img width="16" style="marginRight: 8px;" 
				@click="onPasswordDeleteClick" 
				src="../assets/images/login/qyg_shop_icon_delete.png" />
			<img 
				width="16" 
				v-if="showPassword"
				@click="onPasswordShowClick"
				src="../assets/images/login/qyg_shop_icon_display.png" />
			<img 
				width="16" 
				v-if="!showPassword"
				@click="onPasswordShowClick"
				src="../assets/images/login/qyg_shop_icon_hide.png" />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'password-input',
		props: {
			value: String,
		},
		model: {
			prop: 'value',
			event: 'input',
		},
		data() {
			return {
				showPassword: false,
			};
		},
		methods: {
			onPasswordDeleteClick() {
				this.$emit('input-delete')
			},
			onPasswordShowClick() {
				this.showPassword = !this.showPassword
			}
		}
	}
</script>

<style lang="scss">
.password_wrapper {
	position: relative;
}
.password_icon_wrapper {
	display: inline-block;
	position: absolute;
	right: 24px;
	bottom: 12px;
}
.my_input {
	margin: 0 16px;
	min-height: 50px;
	border-bottom: 1px solid #eeeeee;
}
</style>
