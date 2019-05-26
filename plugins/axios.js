/**
 * axios 请求拦截器
 * @param {*} param0 
 */
import utils from '~/utils/utils';
import Vue from 'vue';
let myredirect;
export default function ({ $axios, redirect, route }) {
	myredirect = redirect;
	//请求拦截
	$axios.onRequest(config => {
		// console.log(config);
		// console.log('Making request to ' + config.url)
		let token = utils.getcookiesInClient("USERTOKEN");
		if (token) {
			token = token.replace(/'|"/g, ""); // 把token加入到默认请求参数中
			config.headers.common["Authorization"] = `Bearer ` + token;
		}
		return config;
  })
	$axios.onResponse(config => {
		//响应拦截
		// console.log(config);
		const code = parseInt(config.data.status)
		if (code === 10010 ) {
			// utils.removecookiesInClient('token');
			Vue.prototype.$message.error('登陆超时，请重新登陆...');
			setTimeout(function () {
				return myredirect({path: '/login'});
			}, 1500)
		}
		return config;
  })

	$axios.onError(error => {
		//错误拦截
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}