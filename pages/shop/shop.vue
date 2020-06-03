<template>
	<view>
		<view class="shop_info_title">店铺资料</view>
		<view class="shop_uploader_wrapper">
			<view class="img_uploader_wrapper">
				<my-img-uploader class="img_uploader"></my-img-uploader>
			</view>
			<view class="img_uploader_ins">
				<span class="img_uploader_ins">
					店主手持身份证或营业执照
				</span>
			</view>
		</view>
		<view class="shop_info_field">
			<u-cell-group>
				<u-field
					class=""
					v-model="shopName"
					label="店铺名称"
					placeholder="填写店铺名称"
				></u-field>
				<u-field 
					@click="onShowScopeBtnClick" 
					v-model="mainScope" 
					:disabled="true" 
					label="主营范围" 
					placeholder="点击图标选择"
					right-icon="arrow-right"
				></u-field>
				<u-field
					v-model="shopAddress"
					label="店铺地址"
					placeholder="点击图标选择"
					right-icon="arrow-right"
				></u-field>
				<view class="shop_owner_info_title">店主信息</view>
				<u-field
					v-model="ownerName"
					label="店主姓名"
					placeholder="填写店主姓名"
				></u-field>
				<u-field
					v-model="tel"
					label="联系电话"
					placeholder="填写店主联系电话"
				></u-field>
			</u-cell-group>
		</view>
		<view class="shop_verify_wrapper">
			<button type="primary" class="my_btn" @click="onVerifyBtnClick" :disabled="false">审核</button>
		</view>
		<view class="scopeActionSheet">
			<u-action-sheet 
				:list="scopeList" 
				:cancel-btn="false" 
				v-model="showScope"
				@click="onScopeActionSheetClick"
				:mask-close-able="true"></u-action-sheet>
		</view>
	</view>
</template>

<script>
	import myImgUploader from '../../components/my-img-uploader.vue'
	
	export default {
		components: {
			myImgUploader
		},
		data() {
			return {
				shopName: '',
				mainScope: '',
				shopAddress: '',
				ownerName: '',
				tel: '',
				showScope: false,
				scopeList: [
							  {
								"id": "1",
								"text": "超市便利",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "2",
								"text": "生鲜果蔬",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "3",
								"text": "零食小吃",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "4",
								"text": "美食餐饮",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "5",
								"text": "鲜花烘培",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "6",
								"text": "生活服务",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "7",
								"text": "其他",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "8",
								"text": "综合",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "10",
								"text": "美容个护",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "11",
								"text": "家居生活",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "12",
								"text": "服饰箱包",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "13",
								"text": "母婴玩具",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "15",
								"text": "海淘进口",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "755",
								"text": "快递代收",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "756",
								"text": "食品保健",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "764",
								"text": "家居生活",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "769",
								"text": "米面杂粮",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "786",
								"text": "水果生鲜",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "807",
								"text": "社区健身",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "811",
								"text": "艺术礼品",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "814",
								"text": "今日特卖",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "816",
								"text": "周边旅游",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "820",
								"text": "家装建材",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "823",
								"text": "虚拟商品",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "14057",
								"text": "生活用品",
								"fontSize": 28,
								"color": '#333333',
							  },
							  {
								"id": "14181",
								"text": "手机数码",
								"fontSize": 28,
								"color": '#333333',
							  }
							]
			}
		},
		methods: {
			onShowScopeBtnClick() {
				this.showScope = true
			},
			onScopeActionSheetClick(index) {
				this.mainScope = this.scopeList[index].text
			},
			onVerifyBtnClick() {
				uni.navigateTo({
					url: './verify'
				})
			}
		},
		computed: {
			complete() {
				return !(this.shopName && this.mainScope && this.shopAddress && this.ownerName && this.tel)
			}
		}
	}
</script>

<style lang="scss" scoped>
.shop_info_title, .shop_owner_info_title {
	margin-top: 21px;
	margin-left: 18px;
	margin-bottom: 16px;
	color: #333333;
	font-size: 18px;
}
.img_uploader {
	// uview内部使用flex布局
	justify-content: center;
}
.img_uploader_ins {
	margin-top: 8px;
	margin-bottom: 16px;
	text-align: center;
	font-size: 14px;
	color: #999999;
}
.my_btn {
	margin: 47px 5% 0px 5%;
}
</style>
