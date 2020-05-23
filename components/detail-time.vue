<template>
	<view>
		<span class="date_time">{{getDateTime}}</span>
		<span class="day_time">{{getDayTime}}</span>
	</view>
</template>

<script>
	export default {
		name: 'detail-time',
		data() {
			return {
				
			};
		},
		props: {
			timeStamp: Number
		},
		computed: {
			getDate() {
				return new Date(this.timeStamp)
			},
			getYear() {
				return this.getDate.getFullYear().toString()
			},
			getMonth() {
				return (this.getDate.getMonth() + 1).toString().padStart(2, '0')
			},
			getDay() {
				return this.getDate.getDay().toString().padStart(2, '0')
			},
			getHours() {
				return this.getDate.getHours().toString().padStart(2, '0')
			},
			getMins() {
				return this.getDate.getMinutes().toString().padStart(2, '0')
			},
			getSecs() {
				return this.getDate.getSeconds().toString().padStart(2, '0')
			},
			getDateTime() {
				return `${this.getYear}.${this.getMonth}.${this.getDay}`
			},
			getDayTime() {
				return `${this.getHours}:${this.getMins}`
			}
		}
	}
</script>

<style lang="scss" scoped>
.date_time {
	margin-right: 8px;
}
</style>
