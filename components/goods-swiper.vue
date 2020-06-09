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
		<u-action-sheet
			class="sheet"
			:list="sheetList"
			:tips="tips"
			@click="onSheetClick"
			@cancel="onSheetCancel"
			v-model="showActionSheet"></u-action-sheet>
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
				swiperCurrent: 0,
				goodsList: [],
				swiperHegithList: [],
				swiperHeight: 150,
				sheetList: [{
					text: '确认删除',
					color: '#FF4759',
					fontSize: '18px'
				}],
				showActionSheet: false,
				tips: {
					text: '是否确认删除， 防止错误操作',
					color: '#999999',
					fontSize: '18px'
				},
				willDeleteListName: '',
				willDeleteListId: -1,
				willDeleteListItemIdx: -1,
				isMounted: false
			};
		},
		mounted() {
			// 获取数据
			for (const goods of data.goods) {
				this.goodsList.push(goods)
			}
			// this.$nextTick(() => {
			// // 移动端回调后执行()
			// 	console.log('next tick')
			// 	debugger
			// 	this.getSwipetItemHeight()
			// })
		},
		updated() {
			if (!this.isMounted) {
				this.$nextTick(() => {
				// 移动端回调后执行()
					this.getSwipetItemHeight()
				})
			}
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
			getSwipetItemHeight(listIdx) {
				let view = uni.createSelectorQuery().in(this).selectAll('.goods_list_wrapper')
				view.boundingClientRect(dataList => {
					for (let i = 0; i < dataList.length; ++i) {
						!this.isMounted ? this.swiperHegithList.push(dataList[i].height) : this.$set(this.swiperHegithList, i, dataList[i].height)
					}
					if (!this.isMounted && !listIdx) {
						this.isMounted = true
						// this.swiperCurrent = 0
						this.changeHeight(0)
					}
					// maybe zero
					if (listIdx !== undefined) {
						this.changeHeight(listIdx)
					}
				}).exec()
			},
			changeHeight(listIdx) {
				this.swiperHeight = this.swiperHegithList[listIdx]
			},
			onDeleteOnSaleItem(idx) {
				this.showActionSheet = true
				this.willDeleteListName = 'onSaleList'
				this.willDeleteListId = 0
				this.willDeleteListItemIdx = idx
			},
			onDeleteToSaleItem(idx) {
				this.showActionSheet = true
				this.willDeleteListName = 'toSaleList'
				this.willDeleteListId = 1
				this.willDeleteListItemIdx = idx
			},
			onDeleteOffSaleItem(idx) {
				this.showActionSheet = true
				this.willDeleteListName = 'offSaleList'
				this.willDeleteListId = 2
				this.willDeleteListItemIdx = idx
			},
			onSheetClick() {
				this[this.willDeleteListName][this.willDeleteListItemIdx].status = 'deleted'
				const id = this.willDeleteListId
				// 异步
				this.$nextTick(function(){
					this.getSwipetItemHeight(id)
				})
				// 恢复
				this.onSheetCancel()
			},
			onSheetCancel() {
				this.willDeleteListName = ''
				this.willDeleteListItemIdx = -1
				this.willDeleteListId = -1
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods_list_wrapper {
		width: 100%;
		height: auto;
	}
</style>
