import Vue from 'vue'
import axios from 'axios'
import qs from "qs";
const http = axios.create({
  baseURL: "http://service.inswindows.com",//根url
  timeout: 8000
});
let _params={
  timestamp:String(new Date().getTime()).substring(0,10),
  u_id:1
};
// 请求拦截器
http.interceptors.request.use( config =>{
  if(config.method=="post"){
    //post方式
    let data = qs.parse(config.data)
    config.data = qs.stringify({
      ...data,
      ..._params
    })
  }else if(config.method=="get"){
    //get方式
    config.params = {
      ..._params,
      ...config.params
    }
  }
  return config;
},  error =>{
  return Promise.reject(error);
});
http.interceptors.response.use( response =>{
  return response;
},  error =>{
  return Promise.reject(error);
});
const install = function (VueClass, opts = {}) {
  // http method
  VueClass.http = http;
  VueClass.prototype.$http = http;
};
Vue.use(install)