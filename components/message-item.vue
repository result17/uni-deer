<template>
	<view class="message_item_warpper">
		<view class="date_wrapper">
			{{getMsgDate}}
		</view>
		<view class="message_content_wrapper">
			<view class="message_content_title_wrapper">
				<view class="left">
					{{title}}
				</view>
				<view class="right">
					<u-icon class="arrow" name="arrow-right"></u-icon>
					<view v-if="!hasRead" class="round"></view>
				</view>
			</view>
			<view :style="{fontSize: 0}">
				<u-line></u-line>
			</view>
			<view class="message_content_text_wrapper">
				{{text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'message-item',
		data() {
			return {
				
			};
		},
		props: {
			timeStamp: Number,
			text: String,
			title: String,
			hasRead: Boolean
		},
		computed: {
			date() {
				return new Date(this.timeStamp)
			},
			getMsgDate() {
				// console.log(typeof this.date)
				return `${this.date.getFullYear()}-${(this.date.getMonth() + 1).toString().padStart(2, 0)}-${this.date.getDate().toString().padStart(2, 0)} ${this.date.getHours().toString().padStart(2, 0)}:${this.date.getMinutes().toString().padStart(2, 0)}:${this.date.getSeconds().toString().padStart(2, 0)}`
			}
		}
	}
</script>

<style lang="scss" scoped>
.message_item_warpper {
	margin-bottom: 16px;
	width: 100%;
	.date_wrapper {
		color: #999999;
		font-size: 12px;
		text-align: center;
		margin-bottom: 8px;
	}
	.message_content_wrapper {
		width: 100%;
		box-shadow: 0 2px 8px 0 rgba(220,231,250,0.50);
		border-radius: 8px;
		.message_content_title_wrapper {
			overflow: hidden;
			padding: 16px;
			.left {
				float: left;
				color: #404040;
				font-size: 14x;
			}
			.right {
				float: right;
				.round {
					float: right;
					width: 8px;
					height: 8px;
					border-radius: 999px;
					background-color: #5793FA;
					margin-right: 8px;
					margin-top: 2px;
				}
				.arrow {
					float: right;
					color: #CCCCCC;
				}
			}
		}
		.message_content_text_wrapper {
			color: #333333;
			font-size: 12px;
			padding: 8px 16px 16px;
		}
	}
}
</style>
