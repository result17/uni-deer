<template>
	<view class="shop_setting_wrapper">
		<view class="setting_header_wrapper">
			<view class="left">
				<view class="header_text">
					{{shopStatus ? '正在营业' : '暂停营业'}}
				</view>
			</view>
			<view class="right">
				<u-switch v-model="shopStatus" size="36"></u-switch>
			</view>
		</view>
		<view class="base_setting_wrapper">
			<view class="base_setting_header_wrapper">
				基础设置
			</view>
			<view class="base_setting_content_wrapper">
				<u-cell-group>
					<u-field
						v-model="shopIntr"
						label="店铺简介"
						placeholder="零食铺子坚果饮料美酒..."
						placeholder-style="color: #ccc; font-size: 14px;"
						right-icon="arrow-right"
					>
					</u-field>
					<u-field
						v-model="guarService"
						label="保障服务"
						placeholder="假一赔十"
						placeholder-style="color: #ccc; font-size: 14px;"
						right-icon="arrow-right"
					>
					</u-field>
					<u-field
						v-model="payMethod"
						label="支付方式"
						placeholder="在线支付"
						placeholder-style="color: #ccc; font-size: 14px;"
						right-icon="arrow-right"
					>
					</u-field>
				</u-cell-group>
				<view class="freight_fees_setting_wrapper">
					<view class="freight_fees_seetting_header_wrapper">
						运费设置
					</view>
					<view class="freight_fees_content_wrapper">
						<u-cell-group>
							<u-field
								v-model="freightCfg"
								label="运费配置"
								placeholder="运费比例配置"
								placeholder-style="color: #ccc; font-size: 14px;"
								right-icon="arrow-right"
							>
							</u-field>
							<u-field
								v-model="freightRedu"
								label="运费满免"
								placeholder="0.00"
								placeholder-style="color: #ccc; font-size: 14px;"
								right-icon="arrow-right"
							>
							</u-field>
							<u-field
								v-model="shippingFees"
								label="配送费用"
								placeholder="0.00"
								placeholder-style="color: #ccc; font-size: 14px;"
								right-icon="arrow-right"
							>
							</u-field>
						</u-cell-group>
					</view>
				</view>
				<view class="contact_info_wrapper">
					<view class="contact_info_header_wrapper">
						联系信息
					</view>
					<view class="contact_info_content_wrapper">
						<u-cell-group>
							<u-field
								v-model="phone"
								label="联系电话"
								right-icon="arrow-right"
							>
							</u-field>
							<u-field
								@click="onAddressClick"
								v-model="shopAddress"
								label="店铺地址"
								right-icon="arrow-right"
								:disabled="false"
							>
							</u-field>
						</u-cell-group>
					</view>
				</view>
				<view class="btn_wrapper">
					<u-button type="primary">提交</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopStatus: false,
				shopIntr: '',
				guarService: '',
				payMethod: '',
				freightCfg: '',
				freightRedu: '',
				shippingFees: '',
				phone: '',
				shopAddress: '',
			};
		},
		methods: {
			onAddressClick() {
				const context = this
				uni.chooseLocation({
				    success: function (res) {
						context.shopAddress = res.address
				    }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop_setting_wrapper {
		padding: 16px;
		.setting_header_wrapper {
			overflow: hidden;
			margin-bottom: 32px;
			.left {
				float: left;
				.header_text {
					color: #333333;
					font-size: 18px;
					font-weight: 600;
				}
			}
			.right {
				float: right;
			}
		}
		.base_setting_wrapper {
			color: #333333;
			margin-bottom: 16px;
			.base_setting_header_wrapper {
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 16px;
			}
		}
		.freight_fees_setting_wrapper {
			color: #333333;
			margin-bottom: 16px;
			.freight_fees_seetting_header_wrapper {
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 16px;
			}
		}
		.contact_info_wrapper {
			color: #333333;
			margin-bottom: 16px;
			.contact_info_header_wrapper {
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 16px;
			}
		}
	}
</style>
