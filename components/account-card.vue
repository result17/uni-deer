<template>
	<view class="card_wrapper" :style="[backgroundStyle, imgRotate]" @click="onCardClick">
		<view class="card_content_wrapper">
			<view v-show="this.rotateDeg > -90" class="card_info_wrapper">
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
				<view v-if="id" class="card_id_wrapper">{{account}}</view>
			</view>
			<view v-show="this.rotateDeg < -90" :style="btnStyle">提现</view>
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
				},
				rotateDir: -1,
				isRotating: false,
				rotateDeg: 0,
				timerId: 0,
				degStep: 6,
				btnStyle: {
					display: 'inline-block',
					width: '50px',
					height: '24px',
					border: '1px solid #FFFFFF',
					color: '#FFFFFF',
					textAlign: 'center',
					borderRadius: '4px',
					lineHeight: '24px',
					fontSize: '14px',
					marginLeft: 'calc(50% - 25px)',
					marginTop: '30px',
					transform: 'rotateX(180deg)'
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
			account: String
		},
		methods: {
			onCardClick() {
				if (!this.isRotating) {
					this.isRotating = true
				} else {
					this.rotateDir *= -1
				}
				// this.timerId = requestAnimationFrame(this.rotateStep)
				this.timerId = setTimeout(() => this.rotateStep(), 17)
			},
			rotateStep() {
				clearTimeout(this.timerId)
				this.rotateDeg += this.rotateDir * this.degStep
				if (this.isRotating && this.rotateDir === -1 && this.rotateDeg !== -180) {
					// 反转封面中
					// this.timerId = requestAnimationFrame(this.rotateStep)
					this.timerId = setTimeout(() => this.rotateStep(), 17)
				}
				if (this.isRotating && this.rotateDir === -1 && this.rotateDeg === -180) {		
					// 完全呈现背面
					// cancelAnimationFrame(this.timerId)
					this.isRotating = false
					this.rotateDir = 1
					this.timerId = 0
				}
				if (this.isRotating && this.rotateDir === 1 && this.rotateDeg !== 0) {
					// this.timerId = requestAnimationFrame(this.rotateStep)
					this.timerId = setTimeout(() => this.rotateStep(), 17)
				}
				if (this.isRotating && this.rotateDir === 1 && this.rotateDeg === 0) {
					// cancelAnimationFrame(this.timerId)
					this.isRotating = false
					this.rotateDir= -1
					this.timerId = 0
				}
			}
		},
		computed: {
			imgRotate() {
				let style = {
					transform: `rotate3d(1, 0, 0, ${this.rotateDeg}deg)`
				}
				return style
			}
		}
	}
</script>

<style lang="scss" scoped>
.card_wrapper {
	margin-bottom: 16px;
	width: 100%;
	height: 136px;
	padding: 24px;
	box-shadow: 0 2px 8px 0 rgba(220, 231, 250, .7);
	border-radius: 8px;
	.card_content_wrapper {
		overflow: hidden;
		height: 100%;
		.card_info_wrapper {
			position: relative;
			perspective: 800;
			overflow:hidden;
			height: 100%;
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
				margin-left: 12px;
				color: #FFFFFF;
				.card_type_wrapper {
					font-size: 18px;
				}
				.card_name_wrapper {
					margin-top: 4px;
					font-size: 12px;
				}
			}
			.card_id_wrapper {
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				color: #FFFFFF;
				font-size: 18px;
				white-space: nowrap;
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
