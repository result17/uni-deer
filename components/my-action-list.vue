<template>
	<view>
		<view class="my_action_list_item" v-for="(item, index) of list" :key="index"  @click="onItemClick(index)">
			<span :class="[clickIdx === index ? activeClass : unActiveClass,baseClass]">{{item}}</span>
			<u-icon class="icon" v-if="clickIdx === index" name="checkbox-mark" color="#4688FA"></u-icon>
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
				clickIdx: -1
			};
		},
		props: {
			list: Array
		},
		methods: {
			onItemClick(idx) {
				this.clickIdx = idx
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.my_action_list_item {
		position: relative;
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
	.icon {
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
}
</style>
