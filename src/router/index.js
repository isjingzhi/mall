import Vue from 'vue'
import VueRouter from 'vue-router'

// import {
//   getUserInfo
// } from '@/assets/js/auth'

// 组件
const Login = () => import('@/views/login/Login')
const Home = () => import('@/views/home/Home')
const Cart = () => import('@/views/cart/Cart')
const Category = () => import('@/views/category/Category')
const Detail = () => import('@/views/detail/Detail')
const Profile = () => import('@/views/profile/Profile')
const Test = () => import('@/views/vuetest/Test')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: Cart
  },
  {
    path: '/category',
    name: 'ategory',
    meta: {
      title: '分类'
    },
    component: Category
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心'
    },
    component: Profile
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      title: '详情'
    },
    component: Detail
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '测试页面'
    },
    component: Test
  },
]

const router = new VueRouter({
  // 路由默认的模式为 hash 模式 
  mode: 'history', // 更改为 html5 的 history 模式
  routes
})

// 添加路由拦截器
// router.beforeEach((to, from, next) => {
//   if (to.name === 'login') {
//     next()
//   } else {
//     if (!getUserInfo()) {
//       // 无 token 则跳转到登录页面
//       next({
//         name: 'login'
//       })
//     } else {
//       // 有令牌则通过
//       next()
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title
  document.title = to.matched[0].meta.title
  // console.log(to);
  next()
})
export default router
