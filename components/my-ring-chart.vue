<template>
	<view class="my_ring_chart_wrapper">
		<canvas canvas-id="canvasRing" id="canvasRing"></canvas>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js'
	let _self
	// let canvasRing = null
	
	export default {
		name: 'my-ring-chart',
		data() {
			return {
				width: '',
				height: '',
				pixelRatio: 1,
			};
		},
		onLoad() {
			console.log('load')
			_self = this
			// this.getData()
		},
		// methods: {
		// 	getData() {
		// 		console.log('get')
		// 		let Ring = {
		// 			series: [{
		// 				name: '货品A',
		// 				data: 3
		// 			}, {
		// 				name: '货品B',
		// 				data: 5
		// 			}, {
		// 				name: '货品C',
		// 				data: 7
		// 			}, {
		// 				name: '货品D',
		// 				data: 2
		// 			}, {
		// 				name: '货品E',
		// 				data: 4
		// 			}, {
		// 				name: '货品F',
		// 				data: 6
		// 			}, {
		// 				name: '货品G',
		// 				data: 1
		// 			}, {
		// 				name: '货品H',
		// 				data: 7
		// 			}]
		// 		}
		// 		_self.showRing("canvasRing", Ring)
		// 	},
		// 	showRing(canvasId, chartData) {
		// 		console.log('create')
		// 		canvasRing = new uCharts({
		// 			$this: _self,
		// 			canvasId: canvasId,
		// 			type: 'ring',
		// 			fontSize: 12,
		// 			legend: {
		// 				show: false
		// 			},
		// 			title: {
		// 				name: '待配送',
		// 				color: '#333333',
		// 				fontSize: 18
		// 			},
		// 			background: '#FFFFFF',
		// 			piexelRatio: _self.pixelRatio,
		// 			series: chartData.series,
		// 			animation: true,
		// 			width: 375,
		// 			height: 250,
		// 			disablePieStroke: true,
		// 			dataLabel: true,
		// 		})
		// 	},
		// 	touchRing(e) {
		// 		canvasRing.showToolTip(e, {
		// 			format: () => `${item.name}:${item.data}`
		// 		})
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>

</style>
