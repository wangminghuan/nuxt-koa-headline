import qs from "qs"
import encodeParams from "~/assets/sign"
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