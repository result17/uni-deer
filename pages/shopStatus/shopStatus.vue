<template>
	<view class="shop_status_wrapper">
		<view class="icon_bar">
			<view class="right">
				<u-icon class="bell" name="bell" size="48" @click="onBellIconClick"></u-icon>
				<u-icon class="setting" name="setting" size="48"></u-icon>
			</view>
		</view>
		<view class="shop_info_wrapper">
			<view class="info_content">
				<view class="shop_info">
					<view class="shop_info_name">
						官方直营店
					</view>
					<view class="shop_info_account_wrapper">
						<view class="shop_info_account_tag">直营</view>
						<span class="shop_info_account">
							店铺账号:1500000000
						</span>
					</view>
				</view>
				<view class="shop_img">
					<image :style="{width: '56px', height: '56px'}" src="/static/imgs/shop/tx.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<u-line></u-line>
		<view class="shop_account_wrapper">
			<view class="shop_account_title">
				账户
			</view>
			<view class="shop_account_icons_wrapper">
				<view class="icon_wrapper" @click="onAccontFlowClick">
					<image class="icon_size" src="/static/imgs/shop/zhls.png" mode="aspectFit"></image>
					<view class="icon_title">账户流水</view>
				</view>
				<view class="icon_wrapper" @click="onFundMgtClick">
					<image class="icon_size" src="/static/imgs/shop/zjgl.png" mode="aspectFit"></image>
					<view class="icon_title">资金管理</view>
				</view>
				<view class="icon_wrapper" @click="onGetCashClick">
					<image class="icon_size"  src="/static/imgs/shop/txzh.png" mode="aspectFit"></image>
					<view class="icon_title">提现账号</view>
				</view>
				<view class="icon_wrapper icon_size"></view>
			</view>
		</view>
		<u-line></u-line>
		<view class="shop_setting_wrapper">
			<view class="shop_setting_title">
				店铺
			</view>
			<view class="shop_setting_content_wrapper">
				<view class="icon_wrapper" @click="onShopSettingClick">
					<image class="icon_size" src="/static/imgs/shop/dpsz.png" mode="aspectFit"></image>
					<view class="icon_title">店铺设置</view>
				</view>
				<view class="icon_wrapper icon_size"></view>
				<view class="icon_wrapper icon_size"></view>
				<view class="icon_wrapper icon_size"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconSize: {
					marginLeft: '24px',
					width: '40px',
					height: '40px'
				},
			};
		},
		methods: {
			onBellIconClick() {
				uni.navigateTo({
					url: '../message/message'
				})
			},
			onAccontFlowClick() {
				uni.navigateTo({
					url: '../accountFlow/accountFlow'
				})
			},
			onFundMgtClick() {
				uni.navigateTo({
					url: '../fundMgt/fundMgt'
				})
			},
			onGetCashClick() {
				uni.navigateTo({
					url: '../getCash/getCash'
				})
			},
			onShopSettingClick() {
				uni.navigateTo({
					url: '../shopSetting/shopSetting'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.shop_status_wrapper {
	padding: 16px;
	.icon_bar {
		overflow: hidden;
		.right {
			float: right;
			.bell {
				display: inline-flex;
				margin-right: 16px;
			}
			.setting {
				display: inline-flex;
			}
		}
	}
	.icon_size {
		margin-left: 24px;
		width: 40px;
		height: 40px;
	}
	.shop_info_wrapper {
		padding: 24px 0 8px 0;
		.info_content {
			display: flex;
			justify-content: space-between;
			& > * {
				height: 56px;
			}
			.shop_info_name {
				color: #333333;
				font-size: 20px;
				font-weight: 600;
			}
			.shop_info_account_wrapper {
				margin-top: 8px;
				font-size: 12px;
				.shop_info_account_tag {
					display: inline-block;
					margin-right: 8px;
					text-align: center;
					border-radius: 10px;
					width: 40px;
					color: #FFFFFF;
					background:  linear-gradient(45deg, #5793FA, #5758FA);
				}
			}
		}
	}
	.shop_account_wrapper {
		margin-top: 18px;
		.shop_account_title {
			color: #333333;
			font-size: 18px;
			font-weight: 600;
		}
		.shop_account_icons_wrapper {
			display: flex;
			padding: 16px 0;
			align-items: stretch;
			.icon_wrapper {
				flex-grow: 1;
				.icon_title {
					color: #333333;
					font-size: 12px;
					text-align: center;
				}
			}
		}
	}
	.shop_setting_wrapper {
		margin-top: 18px;
		.shop_setting_title {
			color: #333333;
			font-size: 18px;
			font-weight: 600;
		}
		.shop_setting_content_wrapper {
			display: flex;
			padding: 16px 0;
			align-items: stretch;
			.icon_wrapper {
				flex-grow: 1;
				.icon_title {
					color: #333333;
					font-size: 12px;
					text-align: center;
				}
			}
		}
	}
}
</style>
