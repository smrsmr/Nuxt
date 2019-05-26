import utils from '~/utils/utils';
export default ({
  app,
  store,
  $axios
}) => {
  app.router.beforeEach((to, from, next) => {
    let isClient = process.client;
    let token = utils.getcookiesInClient('token');
    let path = to.path;
		if (isClient) {
      if (token) {
        if (path === '/login') {
          next()
        } else {
          $axios.$get('http://127.0.0.1:3001/checkUser').then((result) => {
            // console.log(result);
          }).catch((err) => {
            console.log(err)
          });
          next();
        }
        // return store.dispatch('VERDICT');
      } else {
        if (path === '/login') { 
          next();
        } else {
          next('/login');
        }
      }
		}
		next();
  })
}
