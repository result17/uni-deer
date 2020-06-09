<template>
	<view class="btn_wrapper">
		<view class="btn_content_wrapper">
			<view class="left">
				{{text}}
			</view>
			<view class="right">
				<u-icon color="#CCCCCC" name="arrow-right"></u-icon>
			</view>
		</view>
		<u-line></u-line>
	</view>
</template>

<script>
	export default {
		name: 'right-arrow-btn',
		data() {
			return {
				
			};
		},
		props: {
			text: String
		}
	}
</script>

<style lang="scss" scoped>
.btn_wrapper {
	overflow: hidden;
	.btn_content_wrapper {
		padding: 16px 0;
		.left {
			float: left;
			font-size: 16px;
			color: #333333;
		}
		.right {
			float: right;
		}
	}
}
</style>
