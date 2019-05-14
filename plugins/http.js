import Vue from 'vue'
import axios from 'axios'
const http = axios.create({
  baseURL: "http://service.inswindows.com",//根url
  timeout: 8000
});
const install = function (VueClass, opts = {}) {

  // http method
  VueClass.http = http;
  VueClass.prototype.$http = http;
};
Vue.use(install)
// export default () => {
//   Vue.use(axios)
// }