<template>
	<view class="fund_mgt_wrapper">
		<view class="fund_mgt_card_wrapper">
			<image src="/static/imgs/account/bg.png" :style="{ position: 'absolute', width: '100%', height: '178px' }" mode="aspectFill"></image>
			<view class="remain_wrapper">
				<view class="remain_content_wrapper">
					<view class="remain_title">当前余额(元)</view>
					<u-count-to :start-val="0" :end-val="30.12" :decimals="2" color="#FFFFFF" :bolde="true" :font-size="64"></u-count-to>
				</view>
			</view>
			<view class="count_wrapper">
				<view class="count_money_wrapper">
					<view class="count_money_content_wrapper">
						<view class="count_money_title">
							累计结算金额
						</view>
						<u-count-to :start-val="5000" :end-val="20000" :decimals="2" color="#FFFFFF" :font-size="24"></u-count-to>
					</view>
				</view>
				<view class="count_commission_wrapper">
					<view class="count_commission_content_wrapper">
						<view class="count_commission_title">
							累计发放佣金
						</view>
						<view class="count_commission">
							0.02
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="fund_mgt_btns">
			<right-arrow-btn
				v-for="(item, index) of btns"
				:key="index"
				:text="item"
			></right-arrow-btn>
		</view>
	</view>
</template>

<script>
	import rightArrowBtn from '@/components/right-arrow-btn.vue'
	
	export default {
		components: {
			rightArrowBtn
		},
		data() {
			return {
				btns: ['提现', '提现记录', '提现密码']
			};
		}
	}
</script>

<style lang="scss" scoped>
	.fund_mgt_wrapper {
		padding: 8px;
		.fund_mgt_card_wrapper {
			position: relative;
			display: flex;
			flex-direction: column;
			margin-bottom: 16px;
			width: 100%;
			height: 178px;
			box-shadow: 0 2px 8px 0 rgba(87,147,250,0.50);
			border-radius: 8px;
			color: #FFFFFF;
			.remain_wrapper {
				position: relative;
				flex: 1;
				text-align: center;
				.remain_content_wrapper {
					position: absolute;
					left: 50%;
					top: 60%;
					transform: translate(-50%, -50%);
					.remain_title {
						font-size: 12px;
						margin-bottom: 8px;
						font-family: monospace;
					}
				}
			}
			.count_wrapper {
				display: flex;
				flex: 1;
				.count_money_wrapper {
					position: relative;
					flex: 1;
					text-align: center;
					.count_money_content_wrapper {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						font-size: 12px;
						font-family: monospace;
						.count_money_title {
							margin-bottom: 8px;
						}
					}
				}
				.count_commission_wrapper {
					position: relative;
					flex: 1;
					text-align: center;
					.count_commission_content_wrapper {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						font-size: 12px;
						font-family: monospace;
						.count_commission_title {
							margin-bottom: 8px;
						}
					}
				}
			}
		}
	}
</style>
