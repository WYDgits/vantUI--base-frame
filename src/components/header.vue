<template>
  <div>
    <van-nav-bar :title="headTitle">
    	<van-icon name="apps-o" @click="showPopup()" slot="left" size="25px" />
    </van-nav-bar>
    <van-popup v-model="show" position="left" @click="closePopup()" >
      <van-cell-group size="large">
      	<router-link v-for="(item,index) in titles" :key="index" :to="item.name">
      		<van-cell :title="item.value" :icon="item.icon" is-link />
      	</router-link>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				headTitle: '',
				titles: [{
						name: "/schedule",
						value: "会议日程表",
						icon: "chart-trending-o"
					},
					{
						name: "/apply",
						value: "我要申请",
						icon: "envelop-o"
					},
					{
						name: "/applylist",
						value: "申请记录",
						icon: "orders-o"
					}
				]
			}
		},
		mounted: function() {
			let name = this.titles.filter(obj => {
				return obj.name === this.$route.path
			});
			if (name.length == 0) {
				this.$router.push('/404')
				this.headTitle = '页面出错'
			} else {
				this.headTitle = name[0].value;
			}

		},
		watch: {
			$route: {
				handler: function(val, oldVal) {
					console.log(oldVal);
					let name;
					name = this.titles.filter(obj => {
						return obj.name === val.path
					})
					if (name.length == 0) {
						this.$router.push('/404')
						this.headTitle = '页面出错'
					} else {
						this.headTitle = name[0].value;
					}
				},
				// 深度观察监听
				deep: true
			}
		},
		methods: {
			showPopup() {
				this.show = true
			},
			closePopup() {
				this.show = false
			},
		}
	}
</script>

<style scoped="scoped">
  .van-nav-bar{
    min-width: 334px;
  }
  .van-popup{
    height: 100%;
    width: 45%;
    }
    .van-cell-group{
      margin-top: 40%;
    }
</style>
