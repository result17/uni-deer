<template>
	<view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="tabList" :current="current" gutter="80" @change="tabsChange"></u-tabs-swiper>
		</view>
		<swiper 
			:style="{height: swiperHeight + 'px'}"
			:current="swiperCurrent" 
			@transition="transition" 
			@animationfinish="animationfinish">
			<swiper-item>
				<view class="goods_list_wrapper">
					<goods-list-item
						v-for="(item, index) of onSaleList"
						:key="index"
						:idx="index"
						:imgUrl="item.imgUrl"
						:cost="item.cost"
						:tags="item.tags"
						:name="item.name"
						:type="item.type"
						@delete="onDeleteOnSaleItem"
					></goods-list-item>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="goods_list_wrapper">
					<goods-list-item
						v-for="(item, index) of toSaleList"
						:key="index"
						:idx="index"
						:imgUrl="item.imgUrl"
						:cost="item.cost"
						:tags="item.tags"
						:name="item.name"
						:type="item.type"
						@delete="onDeleteToSaleItem"
					></goods-list-item>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="goods_list_wrapper">
					<goods-list-item
						v-for="(item, index) of offSaleList"
						:key="index"
						:idx="index"
						:imgUrl="item.imgUrl"
						:cost="item.cost"
						:tags="item.tags"
						:name="item.name"
						:type="item.type"
						@delete="onDeleteOffSaleItem"
					></goods-list-item>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import data from '../static/data/goods.js'
	import goodsListItem from './goods-list-item.vue'
	
	export default {
		name: 'goods-swiper',
		components: {
			goodsListItem
		},
		data() {
			return {
				tabList: [{
					name: '在售'
				}, {
					name: '待售'
				}, {
					name: '下架'
				}],
				current: 0,
				swiperCurrent: -1,
				goodsList: [],
				swiperHegithList: [],
				swiperHeight: 150
			};
		},
		mounted() {
			// 获取数据
			for (const goods of data.goods) {
				this.goodsList.push(goods)
			}
			this.$nextTick(function(){
				this.getSwipetItemHeight()
				this.swiperCurrent = 0
			})
		},
		watch: {
			swiperCurrent: function(val) {
				this.swiperHeight = this.swiperHegithList[val]
			}
		},
		computed: {
			onSaleList() {
				return this.goodsList.filter(item => item.status === 'onSale')
			},
			toSaleList() {	
				return this.goodsList.filter(item => item.status === 'toSale')
			},
			offSaleList() {
				return this.goodsList.filter(item => item.status === 'offSale')
			}
		},
		methods: {
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			getSwipetItemHeight() {
				let view = uni.createSelectorQuery().in(this).selectAll('.goods_list_wrapper')
				view.boundingClientRect(dataList => {
					for (let i = 0; i < dataList.length; ++i) {
						this.swiperHegithList[i] === undefined ? this.swiperHegithList.push(dataList[i].height) : this.$set(this.swiperHegithList, i, dataList[i].height)
					}
				}).exec()
			},
			onDeleteOnSaleItem(idx) {
				this.onSaleList[idx].status = 'delete'
				this.$nextTick(function(){
					this.getSwipetItemHeight()
					this.swiperHeight = this.swiperHegithList[0]
				})
			},
			onDeleteToSaleItem(idx) {
				this.toSaleList[idx].status = 'delete'
				this.$nextTick(function(){
					this.getSwipetItemHeight()
					this.swiperHeight = this.swiperHegithList[1]
				})
			},
			onDeleteOffSaleItem(idx) {
				this.offSaleList[idx].status = 'delete'
				this.$nextTick(function(){
					this.getSwipetItemHeight()
					this.swiperHeight = this.swiperHegithList[2]
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
