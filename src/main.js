// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
//引入g2
import G2 from '@antv/g2'
//引入 data-set模块
import DataSet from '@antv/data-set';
Vue.prototype.DataSet=DataSet;
Vue.use(G2)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
import './assets/flexible.js'
import axios from 'axios';//引入axios
import Qs from 'qs';//引入Qs
import $ from 'jquery'
/*
* 配置axios*/
var token;
Vue.prototype.token=token;
Vue.prototype.$axios=axios.create();
Vue.prototype.axios = axios.create({
  baseURL:' http://101.37.65.219',//http://116.62.67.239:1027
  // http://192.168.0.103:9001
  timeout: 30000,
  // withCredentials: true,
  headers: {'Content-Type': 'application/x-www-form-urlencoded',"X-Requested-With": "XMLHttpRequest","token":token},
  transformRequest: [data => {
    data = Qs.stringify(data);
    return data;
  }]
});
Vue.config.productionTip = false;
//动态改变页面标题
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
  document.title = to.meta.title
  }
  next()
 })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//上传文件
Vue.prototype.$http = axios.create({
  baseURL:'http://101.37.65.219',//http://118.31.247.144:1027
  // http://192.168.0.103:9001
  // timeout: 20000
});
//添加请求拦截器
axios.interceptors.request.use(function(config){
  store.state.isShow=true; //在请求发出之前进行一些操作
  return config
})
//定义一个响应拦截器
axios.interceptors.response.use(function(config){
  store.state.isShow=false;//在这里对返回的数据进行处理
  return config
})
