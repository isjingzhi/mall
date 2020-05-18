import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

// 1. 配置请求拦截器
http.interceptors.request.use(config => {
  // 如果本次请求的不是 /login 接口，则我们就加入请求头
  // if (config.url !== '/login') {
  //   config.headers['Authorization'] = getToken()
  // }

  // return config 就好比 next() 允许通过
  return config
}, error => {
  return Promise.reject(error)
})

// 2.配置响应拦截器
// http.interceptors.response.use(response => {
//   const {
//     meta
//   } = response.data
//   if (meta.status === 403) {
//     window.alert('你没有权限执行该操作！')
//   } else if (meta.status === 401) {
//     // 如果用户长时间未操作导致 token 失效或者有人恶意伪造 token
//     // 我们也不允许他进入我的系统界面
//     // 所以我们这里通过对 401 统一拦截跳转到登录页

//     // 1. 我们只需要告诉登陆组件，我从哪里跳过来的
//     //    通过 url 地址告诉登陆组件
//     // 2. 登陆成功之后，看一下 url 中有没有一个叫 redirect 的字段
//     //    如果有就往这里跳，如果没有默认往 home 跳
//     router.push({
//       name: 'login',
//       query: {
//         redirect: window.location.hash
//       }
//     })
//   }
//   // 类似 next()
//   return response
// }, error => {
//   return Promise.reject(error)
// })


// 三.定义插件扩展 Vue 本身

// const httpPlugin = {}

// httpPlugin.install = ((Vue, options) => {
//   Vue.prototype.$http = http
// })

// 导出插件对象
// export default httpPlugin
export default http

// 在入门文件模块 main.js 加载使插件生效
// Vue.use(httpPlugin)