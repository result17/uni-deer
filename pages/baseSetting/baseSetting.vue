<template>
	<view class="setting_wrapper">
		<view class="setting_content_wrapper">
			<u-cell-group>
				<u-field
					@click="onCacheClearSheetShow"
					label="清除缓存"
					:disabled="true"
					right-icon="arrow-right"
				></u-field>				
			</u-cell-group>
		</view>
		<view class="setting_btn_wrapper">
			<u-button type="error" @click="onLogoutSheetShow">退出登录</u-button>
		</view>
		<view class="setting_action_sheet_wrapper">
			<u-action-sheet
				:list="clearCacheSheetList"
				:tips="clearCacheTips"
				@click="onCacheClearClick"
				v-model="showClearCacheActionSheet">
			</u-action-sheet>
			<u-action-sheet
				:list="logoutActionSheet"
				:tips="logoutTips"
				@click="onLogoutBtnClick"
				v-model="showLogoutActionSheet">
			</u-action-sheet>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showClearCacheActionSheet: false,
				clearCacheTips: {
					text: '是否确认清除缓存',
					color: '#999999',
					fontSize: '18px'
				},
				clearCacheSheetList: [{
					text: '确认清除缓存',
					color: '#FF4759',
					fontSize: '18px'
				}],
				showLogoutActionSheet: false,
				logoutTips: {
					text: '是否退出登录',
					color: '#999999',
					fontSize: '18px'
				},
				logoutActionSheet: [{
					text: '确认退出登录',
					color: '#FF4759',
					fontSize: '18px'
				}]
			};
		},
		methods: {
			onCacheClearSheetShow() {
				this.showClearCacheActionSheet = true
			},
			onLogoutSheetShow() {
				this.showLogoutActionSheet = true
			},
			onCacheClearClick() {
				console.log('clear')
				uni.clearStorage()
			},
			onLogoutBtnClick() {
				this.$store.commit('logout')
				uni.reLaunch({
					url: '../order/order'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setting_wrapper {
		padding: 16px;
		.setting_btn_wrapper {
			margin-top: 36px;
		}
	}
</style>
