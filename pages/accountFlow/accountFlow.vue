<template>
	<view>
		<view 
			class="flow_item_wrapper"
			v-for="(item, index) of flow"
			:key="index"
		>
			<u-sticky>
				<view class="date_wrapper">{{item.date}}</view>
			</u-sticky>
			<flowItem
				v-for="(it, idx) of item.dealList"
				:key="idx"
				:name="item.name"
				:time="item.time"
				:money="item.money"
				:remain="item.remain"
			></flowItem>
		</view>
	</view>
</template>

<script>
	import flow from '@/static/data/accountFlow.js'
	import flowItem from '@/components/flow-item.vue'
	
	export default {
		components: {
			flowItem
		},
		data() {
			return {
				flow: []
			};
		},
		onLoad() {
			for (let i = 0; i < flow.length; ++i) {
				this.flow.push(flow[i])
			}
		}
	}
</script>

<style lang="scss" scoped>
.date_wrapper {
	padding: 0 16px;
	background: #EDEDED;
}
</style>
