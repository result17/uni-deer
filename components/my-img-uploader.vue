<template>
	<u-upload :custom-btn="true">
		<view slot="addBtn">
			<!-- <img src="../static/imgs/store/icon_zj.png" /> -->
			<image :style="{width: '80px', height: '80px'}" src="../static/imgs/store/icon_zj.png"></image>
		</view>
	</u-upload>
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

<style lang="less" scoped>

</style>
