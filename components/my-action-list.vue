<template>
	<view>
		<view class="my_action_list_item" v-for="(item, index) of list" :key="index">
			<span :class="baseClass" :style="[changContextColor(index)]" @click="onItemClick(index)">{{item}}</span>
			<u-icon v-if="statusDic[index]" name="checkbox-mark" color="#4688FA"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my-action-list',
		data() {
			return {
				activeClass: 'active_color',
				unActiveClass: 'unactive_color',
				baseClass: 'my_action_list_item_context',
				statusDic: {}
			};
		},
		props: {
			list: Array
		},
		mounted() {
			this.initStatus()
		},
		methods: {
			onItemClick(idx) {
				const index = idx.toString()
				for (const key of Object.keys(this.statusDic)) {
					this.statusDic[key] = (key === index)
				}
			},
			initStatus() {
				for (var i = 0; i < this.list.length; ++i) {
					this.statusDic[i] = false
				}
			},
		},
		computed: {
			changContextColor() {
				console.log('111')
				return (idx) => {
					const style = {}
					style.color = this.statusDic[idx] ? "#4688FA" : '#ccccccc'
					console.log(style)
					return style
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.my_action_list_item {
	width: 100%;
	height: 42px;
	line-height: 42px;
}
.my_action_list_item_context {
	padding-left: 16px;
}
.active_color {
	color: #4688FA;
}
.unactive_color {
	color: #333333;
}
</style>
