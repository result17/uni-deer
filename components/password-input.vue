<template>
	<view class="password_wrapper">
		<form>
			<input
				class="my_input"
				:value="value"
				@input="$emit('input', $event.target.value)"
				:password="!showPassword" 
				placeholder="请输入密码" 
				placeholder-class="my_placeholder"
				maxlength="15" />
			
		</form>
		<view 
			class="password_icon_wrapper"
			v-if="value"
			>
			<image :style="{marginRight: '8px', width: '16px', height: '16px'}" 
				@click="onPasswordDeleteClick" 
				src="../static/imgs/login/qyg_shop_icon_delete.png"></image>
			<image
				:style="{width: '16px', height: '16px'}" 
				v-if="showPassword"
				@click="onPasswordShowClick"
				src="../static/imgs/login/qyg_shop_icon_display.png"></image>
			<image 
				:style="{width: '16px', height: '16px'}" 
				v-if="!showPassword"
				@click="onPasswordShowClick"
				src="../static/imgs/login/qyg_shop_icon_hide.png"></image>
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

<style lang="scss" scoped>
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
