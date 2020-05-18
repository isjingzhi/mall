// 1. 引入 vue 和 vuex 并进行使用
import Vue from 'vue'

import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)
// 2. 创建store对象
const store = new Vuex.Store({
  state: {
    count: 1,
    student: [{
      name: "张三",
      id: 1111,
      age: 13,
      gender: "男"
    }, ],
    info: {
      name: "李四",
      id: 222,
      age: 13,
      gender: "男"
    }
  },
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA,
  }
})

// 3.导出 store 
export default store
