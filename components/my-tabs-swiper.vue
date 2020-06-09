<template>
	<view class="my_tabs_wrapper">
		<scroll-view
			scroll-x="true"
			class="scroll_view"
		>
			<view class="my_tabs_scroll_box">
				<view class="my_tabs_item"
					v-for="(item, index) in getList"
					:key="index"
					:style="[tabItemStyle(index)]"
					@tap="emit(index)"
				>		
					<u-badge v-if="item.count" type="error" :count="item.count" :absolute="true" :offset="[32, 24]"></u-badge>
					<image style="width: 20px; height: 20px;" mode="aspectFit" :src="tabItemImgSrc(index)"></image>
					<span class="tabs_item_ins">{{item.name}}</span>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'my-tabs-swiper',
		data() {
			return {
				animationFinishCurrent: this.current
			};
		},
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			},
			current: {
				type: Number,
			}
		},
		computed: {
			getList() {
				return this.list
			},
			getCurrent() {
				const current = Number(this.current)
				// 判断是否超出边界
				if (current > this.getList.length - 1) {
					return this.getList.length - 1
				}
				if (current < 0) return 0
				return current
			}
		},
		methods: {
			emit(index) {
				this.$emit('change', index)
			},
			setFinishCurrent() {
				if (current != this.animationFinishCurrent) {
					// 
				}
			},
			tabItemStyle(index) {
				let style = {}
				if (index === this.getCurrent) {
					style.color = '#333333'
				} else {
					style.color = '#999999'
				}
				return style
			},
			tabItemImgSrc(index) {
				let imgSrc = ''
				if (index === this.getCurrent) {
					imgSrc = this.list[index].selectedIconPath
				} else {
					imgSrc = this.list[index].iconPath
				}
				return imgSrc
			}
		}
	}
</script>

<style lang="scss" scoped>
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	.my_tabs_wrapper {
		width: calc(100vw - 32px);
		height: 80px;
		border-radius: 8px;
		box-shadow: 0 2px 8px 0 rgba(220,231,250, .7);
		background-color: #FFFFFF;
		margin-bottom: 8px;
	}
	.scroll_view {
		position: relative;
		width: 100%;
		white-space: nowrap;
	}
	.my_tabs_scroll_box {
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	.my_tabs_item {
		flex: 1;
		display: inline-block;
		height: 80px;
		line-height: 80px;
		text-align: center;
		position: relative;
	}
	.tabs_item_img_wrapper {
		position: absolute;
		left: 50%;
		top: 21px;
		transform: translateX(-50%);
	}
	.tabs_item_ins {
		position: absolute;
		left: 50%;
		bottom: -16px;
		transform: translateX(-50%);
	}
</style>
