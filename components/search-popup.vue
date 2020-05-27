<template>
	<u-popup
		close-icon="arrow-left"
		:value="show"
		@input="onPopupStatusChange"
		mode="bottom" 
		length="100%" 
		:closeable="true"
		:clearabled	="true"
		close-icon-pos="top-left">
		<u-search
			:action-style='searchBtnStyle'
			class="search-wrapper" 
			shape="square" 
			:placeholder="placeholder"
			placeholder-color="#CCCCCC"
			v-model="keyWord"></u-search>
	</u-popup>
</template>

<script>
	export default {
		name: 'search-popup',
		data() {
			return {
				keyWord: '',
				searchBtnStyle: {
					color: '#FFFFFF',
					fontSize: '14px',
					background: '#5793FA',
					borderRadius: '4px',
					marginRight: '16px',
					padding: '4px'
				},
			};
		},
		props: {
			show: Boolean,
			placeholder: String
		},
		model: {
			prop: 'show',
			event: 'changeShow'
		},
		methods: {
			onPopupStatusChange(status) {
				this.$emit('changeShow', status)
			}
		}
	}
</script>

<style lang="scss" scoped>
.search-wrapper {
	width: calc(100% - 44px);
	margin: 8px 0 0 44px;
}
</style>
