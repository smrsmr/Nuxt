/**
 * axios 请求拦截器
 * @param {*} param0 
 */
export default function ({ $axios, redirect }) {
	//请求拦截
	$axios.onRequest(config => {
		console.log(config);
		// console.log('Making request to ' + config.url)
		config.headers.common["Authorization"] = `Bearer:token`;
  })
	$axios.onResponse(config => {
		//响应拦截
		console.log(config);
		const code = parseInt(config.data.status)
		if (code === 10010 ) {
			redirect('/error')
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