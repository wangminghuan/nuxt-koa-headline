// import Vue from 'vue'
// import axios from 'axios'
import qs from "qs"
import encodeParams from "~/assets/sign"
// const http = axios.create({
//   baseURL: "http://service.inswindows.com",//根url
//   timeout: 8000
// });
// //服务端http请求
// // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
// // 请求拦截器
// http.interceptors.request.use( config =>{
//   if(config.method=="post"){
//     //post方式
//     let data = qs.parse(config.data)
//     config.data = encodeParams(config.url,{
//       ...data
//     })
//   }else if(config.method=="get"){
//     //get方式
//     config.params = encodeParams(config.url,{
//       ...config.params
//     })
//   }
//   return config;
// },  error =>{
//   return Promise.reject(error);
// });
// http.interceptors.response.use( response =>{
//   return response;
// },  error =>{
//   return Promise.reject(error);
// });

// //客户端http请求
// const request = axios.create({
//   baseURL: "/",//根url
//   timeout: 8000
// })
// // 请求拦截器
// request.interceptors.request.use( config =>{
//   if(config.method=="post"){
//     //post方式
//     let data = qs.parse(config.data)
//     config.data = encodeParams(config.url,{
//       ...data
//     })
//   }else if(config.method=="get"){
//     //get方式
//     config.params = encodeParams(config.url,{
//       ...config.params
//     })
//   }
//   return config;
// },  error =>{
//   return Promise.reject(error);
// });
// request.interceptors.response.use( response =>{
//   return response;
// },  error =>{
//   return Promise.reject(error);
// });
// const install = function (VueClass, opts = {}) {
//   // http method
//   VueClass.http = http;
//   VueClass.prototype.$http = request;
// };
// Vue.use(install)
// console.log(process)
// if (process.client) {
//   this.$axios.setBaseURL('/')
// }
// // Change URL only for server
// if (process.server) {
//   this.$axios.setBaseURL('http://service.inswindows.com')
// };
export default function ({ $axios, redirect }) {
 // request interceptor
 $axios.interceptors.request.use(
  config => {
      if(config.method=="post"){
        //post方式
        let data = qs.parse(config.data)
        config.data = encodeParams(config.url,{
          ...data
        })
      }else if(config.method=="get"){
        //get方式
        config.params = encodeParams(config.url,{
          ...config.params
        })
      }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
 )
 $axios.interceptors.response.use( response =>{
   //服务端请求状态码不为0就跳转到404，客户端正常返回
  if(response.data.code==0 || process.browser){
     return response;
  }else{
    redirect('/404') 
  }
},  error =>{
  return Promise.reject(error);
});
$axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }else if(code === 500){
      redirect('/500')
    }
  })
}