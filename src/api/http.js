import axios from 'axios';
import qs from 'qs';

//设置超时请求时间
axios.default.timeout = 10000;

//设置CORS跨域允许携带资源凭证 
axios.default.withCredentials = true;

//设置POST请求头：告知服务器请求主体的数据格式
axios.default.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.default.transformRequest = data => qs.stringify(data);


//设置请求拦截器




//设置响应拦截器
axios.default.validateStatus = status => {
  //自定义成功状态码
  return /^(2|3)\d{2}$/.test(status);
}
axios.interceptors.response.use(response => {
  //只返回响应主体中的数据信息
  return response.data
}, error => {
  if(error.response) {
    //具体状态码处理规则按照后台返回情况


    return Promise.reject(error.response);
  } else {
    //断网处理
    if(!window.navigator.onLine){
      //断开网络，可以跳转到断网页面
      return ;
    }
    return Promise.reject(error);
  }
})
export default axios;






