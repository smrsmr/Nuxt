import Vue from 'vue'
import Vuex from 'vuex'
import utils from '~/utils/utils'
Vue.use(Vuex)

// window.fetch() 的 Polyfill
// require('whatwg-fetch')

const store = () => {
	return new Vuex.Store({
		state: {
			authUser: null
		},
		mutations: {
			SET_USER: function (state, user) {
				state.authUser = user
			}
		},
		actions: {
			/**
			 * 判断token失效
			 * @param {*} param0 
			 */
			VERDICT({commit}) {
				return new Promise((resolve, reject) => {
					this.$axios.$get('http://127.0.0.1:3001/checkUser').then((result) => {
						console.log(result);
						//token 过期
						if (result.status === 10010) {
							commit('SET_USER', '');
							utils.removecookiesInClient('token');
							this.$router.push({ path: '/'});
						}
						resolve();
					}).catch((err) => {
						reject()
					});
				})
			}
		}
	})
}

export default store