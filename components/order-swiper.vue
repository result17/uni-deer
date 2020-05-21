<template>
	<view>
		<view class="order_swiper_wrapper">
			<my-tabs-swiper 
				:list="tabList" 
				ref="myTabs" 
				@change="tabsChange"
				:current="current"></my-tabs-swiper>
		</view>
		<swiper
			:style="{height: swiperHeight + 'px'}"
			duration="800"
			:current="swiperCurrent"
			@animationfinish="animationfinish">
			<swiper-item v-for="(item, index) of statusList" :key="index">
				<scroll-view scroll-y class="scroll_list_wrapper">
					<my-order @change-height="handleChangeHeight" :status="statusList[index]" :swiperCurrent="swiperCurrent" :swiperIdx="index"></my-order>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import myTabsSwiper from './my-tabs-swiper.vue'
	import myOrder from './my-order.vue'
	
	export default {
		name: 'order-swiper',
		components:{
			myTabsSwiper,
			myOrder
		},
		data() {
			return {
				// swiper组件默认高度为150px
				swiperHeight: 150,
				statusList: ['newOrder', 'toDelivered', 'toComplete', 'completed', 'canceled'],
				tabList: [{
					name: '新订单',
					count: 10,
					iconPath: '../static/imgs/order/xdd_n.png',
					selectedIconPath: '../static/imgs/order/xdd_s.png'
				}, {
					name: '待配送',
					count: 10,
					iconPath: '../static/imgs/order/dps_n.png',
					selectedIconPath: '../static/imgs/order/dps_s.png',
				}, {
					name: '待完成',
					count: 10,
					iconPath: '../static/imgs/order/dwc_n.png',
					selectedIconPath: '../static/imgs/order/dwc_s.png',
				}, {
					name: '已完成',
					count: 0,
					iconPath: '../static/imgs/order/ywc_n.png',
					selectedIconPath: '../static/imgs/order/ywc_s.png',
				}, {
					name: '已取消',
					count: 0,
					iconPath: '../static/imgs/order/yqx_n.png',
					selectedIconPath: '../static/imgs/order/yqx_s.png',
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0,// tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			};
		},
		methods: {
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			// 防抖
			animationfinish(e) {
				const current = e.detail.current
				this.current = current
			},
			tabsChange(index) {
				this.swiperCurrent = index
			},
			handleChangeHeight(height) {
				this.swiperHeight = height
				console.log(this.swiperHeight)
			}
		}
	}
</script>

<style lang="scss" scoped>
.order_swiper_wrapper {
	display: flex;
	justify-content: center;
	width: 100%;
	height: 80px;
	background-image: url(../assets/images/order/order_bg1.png);
	background-size: contain;
}
.scroll_list_wrapper {
	margin: auto;
	width: calc(100vw - 32px);
}
</style>
