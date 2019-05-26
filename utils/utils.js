import Cookie from 'js-cookie'
export default {
  //获取服务端cookie
  getcookiesInServer:function (req) {
    let service_cookie = {};
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (val) {
      let parts = val.split('=');
      service_cookie[parts[0].trim()] = (parts[1] || '').trim();
    });
    return service_cookie;
  },
  //获取客户端cookie
  getcookiesInClient:function (key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  },
  //设置客户端cookie
  setcookiesInClient:function (key,value) {
    Cookie.set(key,value)
  },
  //删除客户端cookie
  removecookiesInClient:function (key) {
    Cookie.remove(key)
  }
}