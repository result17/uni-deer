<template>
	<view class="my_ring_chart_wrapper">
		<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js'
	let _self
	let canvasRing = null
	
	export default {
		name: 'my-ring-chart',
		data() {
			return {
				width: 343,
				height: 250,
				pixelRatio: 1,
			};
		},
		mounted() {
			_self = this
			this.getData()
		},
		methods: {
			getData() {
				let Ring = {
					series: [{
						name: '货品A',
						data: 3
					}, {
						name: '货品B',
						data: 5
					}, {
						name: '货品C',
						data: 7
					}, {
						name: '货品D',
						data: 2
					}, {
						name: '货品E',
						data: 4
					}, {
						name: '货品F',
						data: 6
					}, {
						name: '货品G',
						data: 1
					}, {
						name: '货品H',
						data: 7
					}]
				}
				_self.showRing("canvasRing", Ring)
			},
			showRing(canvasId, chartData) {
				canvasRing = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 12,
					legend: {
						show: false
					},
					title: {
						name: '待配送',
						color: '#333333',
						fontSize: 18
					},
					extra: {
						pie: {
						  offsetAngle: -45,
						  ringWidth: 40,
						  labelWidth:15
						}
					},
					background: '#FFFFFF',
					piexelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.width,
					height: _self.height,
					disablePieStroke: true,
					dataLabel: true,
				})
			},
			touchRing(e) {
				canvasRing.showToolTip(e, {
					format: item => `${item.name}:${item.data}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.charts {
	width: 100%;
	height: 250px;
}
</style>
