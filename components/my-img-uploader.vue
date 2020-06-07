<template>
	<view class="center">
		<u-upload :custom-btn="true">
			<view slot="addBtn" class="center">
				<image :style="{width: '80px', height: '80px'}" src="../static/imgs/store/icon_zj.png"></image>
			</view>
		</u-upload>
	</view>
</template>

<script>
	export default {
		name: 'my-img-uploader',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.center {
	display: flex;
	justify-content: center;
}
</style>
