<template>
		<div class="container-headers">
			<ul>
				<li>
					<nuxt-link to="/">主页</nuxt-link>
					<nuxt-link to="/users">用户</nuxt-link>
					<nuxt-link to="/users">用户</nuxt-link>
					<nuxt-link to="/users">用户</nuxt-link>
					<nuxt-link to="/users">用户</nuxt-link>
					<nuxt-link to="/shops">商品</nuxt-link>
				</li>
			</ul>
		</div>
</template>
<script>
export default {
		name: "headers",
		data () {
				return {
						
				}
		}
}
</script>
<style lang="less" scoped>
	.container-headers {
		margin: 0 auto;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		ul {
			li {
				list-style: none;
				a {
					padding: 0 6px;
					margin: 0 6px;
				}
			}
		}
	}
</style>