<template>
	<view class="card_wrapper" :style="backgroundStyle">
		<view class="card_content_wrapper">
			<view class="card_info_wrapper">
				<view class="card_img_wrapper">
					<image class="center card_img_size" :src="imgUrl" mode="aspectFit"></image>
				</view>
				<view class="card_text_wrapper">
					<view class="card_type_wrapper">
						{{type}}
					</view>
					<view class="card_name_wrapper">
						{{name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'account-card',
		data() {
			return {
				backgroundStyle: {
					background:  this.background.length > 0 ? `linear-gradient(45deg, ${this.background[0]}, ${this.background[1]})` : this.background[0],
				}
			};
		},
		props: {
			imgUrl: String,
			background: {
				type: Array,
				default: ['#FFFFFF']
			},
			type: String,
			name: String,
			id: String
		}
	}
</script>

<style lang="scss" scoped>
.card_wrapper {
	width: 100%;
	height: 136px;
	padding: 24px;
	.card_info_wrapper {
		.card_img_wrapper {
			float: left;
			position: relative;
			background: #FFFFFF;
			width: 50px;
			height: 50px;
			border-radius: 999px;
			.card_img_size {
				width: 40px;
				height: 40px;
			}
		}
		.card_text_wrapper {
			float: left;
			margin-left: 8px;
			color: #FFFFFF;
			.card_type_wrapper {
				font-size: 18px;
			}
			.card_name_wrapper {
				margin-top: 4px;
				font-size: 12px;
			}
		}
	}
}
.center {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
</style>
