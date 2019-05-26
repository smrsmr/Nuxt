import utils from '~/utils/utils'
 
export default function ({store, route, redirect, req}) {
  let isClient = process.client;
  let isServer = process.server;
  let redirectURL = '/login';
	let token, path;
  //在服务端
	if (isServer) {
    let cookies = utils.getcookiesInServer(req)
    path = req.originalUrl;
    token = cookies.USERTOKEN ? cookies.USERTOKEN : ''
  }
  //在客户端判读是否需要登陆
	if (isClient) {
		token = utils.getcookiesInClient('USERTOKEN');
		path = route.path;
		store.commit('SET_USER', token);
		// return store.dispatch('VERDICT');
	}
	if (!token) {
		redirect(redirectURL);
	} 
}