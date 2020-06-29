
// process.browser 可以判断当前是服务端在请求还是客户端在请求
export default function ({ $axios, redirect }) {
 // request interceptor
 $axios.interceptors.request.use(
  config => {
    console.log("config",config)
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
 )
 $axios.interceptors.response.use( response =>{
   console.log("response",response)
   //服务端请求状态码不为0就跳转到404，客户端正常返回
  if(response.data || process.browser){
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