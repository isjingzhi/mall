import {
  INCREMENT,
  DECREMENT,
  INCOUNT,
  UPDATE
} from './mutation-types'
import Vue from 'vue'
export default {
  // 该发法有个默认的参数就是上面的state
  [INCREMENT](state) {
    // state.count++
    state.count < 10 ? state.count++ : state.count = 10
  },
  [DECREMENT](state) {
    state.count > 1 ? state.count-- : state.count = 1
  },
  [INCOUNT](state, payload) {
    return state.count += payload.num
  },
  [UPDATE](state) {
    // 1.vue中的push是响应式的
    // state.student.push(state.info)
    // 2.1 添加属性
    // state.info.address = "居住地址" // 错误的方式
    // Vue.set(state.info, 'address', '居住地址')
    // 2.2 删除属性
    // delete state.info.age // 错误方式
    Vue.delete(state.info, 'age')

  }
}
