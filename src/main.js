import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui' // mint-ui
import 'mint-ui/lib/style.css'
// import httpPlugin from './network/request'
// import axios from 'axios' // axios
// 公共css和js
import '@/assets/scss/reset.scss'
import '@/assets/scss/common.scss'
import '@/assets/js/utils'

// rem 布局
import 'lib-flexible'
Vue.config.productionTip = false
Vue.use(MintUI)
// // 加载 httpPlugin 插件
// // 在该插件中为 Vue 原型对象扩展了一个成员 $http
// // 通过使用 this.$http 来发起请求了
// Vue.use(httpPlugin)
// Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
