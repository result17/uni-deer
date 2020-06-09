<template>
	<view class="order_track_wrapper">
		<view class="order_track_title">
			订单编号：14562364879
		</view>
		<u-time-line>
			<u-time-line-item>
				<template v-slot:node>
					<view class="node">
						<u-icon name="map-fill" :size="24"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="order_track_content_item">
							<view class="order_track_content_item_title">
								收到新订单
							</view>
							<view class="order_track_content_item_time">
								2018/08/30 09:00
							</view>
						</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item>
				<template v-slot:node>
					<view class="node">
						<u-icon name="map-fill" :size="24"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="order_track_content_item">
							<view class="order_track_content_item_title">
								等待配送
							</view>
							<view class="order_track_content_item_time">
								2018/08/30 09:30
							</view>
						</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item>
				<template v-slot:node>
					<view class="node">
						<u-icon name="map-fill" :size="24"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="order_track_content_item">
							<view class="order_track_content_item_title">
								开始配送
							</view>
							<view class="order_track_content_item_time">
								2018/08/30 11:30
							</view>
						</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item>
				<template v-slot:node>
					<view class="node">
						<u-icon color="#4688FA" name="map-fill" :size="24"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="order_track_content_item">
							<view class="order_track_content_item_title" style="color: #4688FA;">
								订单完成
							</view>
							<view class="order_track_content_item_time" style="color: #4688FA;">
								2018/08/30 13:30
							</view>
						</view>
					</view>
				</template>
			</u-time-line-item>
		</u-time-line>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.order_track_wrapper {
	padding: 20px 16px;
}
.order_track_title {
	margin-bottom: 24px;
	font-size: 14px;
	color: #333333;
}
.order_track_content_item_title {
	font-size: 14px;
	color: #333333;
}
.order_track_content_item_time {
	font-size: 12px;
	color: #999999;
}
</style>
