<template>
		<div class="container-shopsID">
			<img src="~/assets/images/img1.png" alt="">
		</div>
</template>
<script>
export default {
	  // 设置忽略登录判断
	  // auth: false,
	  //自定义校验方法
		async validate ({ params }) {
			// 必须是number类型
			return /^\d+$/.test(params.id)
		},
		async asyncData ({ params,$axios }) {
			const slug = params.id // When calling /abc the slug will be "abc"
			// const data = await $axios.$get('http://127.0.0.1:3001/getArea');
			return { slug }
		},
		name: "ActiveShop",
		data () {
				return {
					title: "商品详情☹",
					ip: null
				}
		},
		methods: {
			async fetchSomething() {
				const prov = await this.$axios.$get('http://127.0.0.1:3001/getArea');
				// await this.$axios.$get('http://127.0.0.1:3001/checkUser'); 
			}
		},	
		mounted() {
			this.fetchSomething();
		},
		head(){
			//设置title meta 
			return {
				title: this.title,
				meta: [
					{ charset: 'utf-8' }
				],
				link: [
					{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
				]
			}
		},
}
</script>
<style lang="less" scoped>
	.container-shopsID {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		img {
			width: 1000px;
		}
	}
</style>