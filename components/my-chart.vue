<template>
	<view class="my_chart_wrapper">
		<view class="my_chart_title_wrapper">
			{{title}}
		</view>
		<view class="my_chart_content_wrapper">
			<image :style="{width: '100%', height: '100px'}" :src="chartUrl" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my-chart',
		data() {
			return {
				
			};
		},
		props: {
			title: String,
			chartUrl: String
		}
	}
</script>

<style lang="scss" scoped>
.my_chart_wrapper {
	padding: 16px;
	box-shadow: 0 2px 8px 0 rgba(220,231,250,0.50);
	.my_chart_title_wrapper {
		margin-bottom: 16px;
		color: #333333;
		font-size: 14px;
		font-weight: 600;
	}
}
</style>
