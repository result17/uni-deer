<template>
	<view>
		<view class="test"></view>
		<view :style="{fontSize: 0}">
			<u-line></u-line>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.test {
	width: 100%;
	height: 100px;
}
</style>
