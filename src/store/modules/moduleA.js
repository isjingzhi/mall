export default {
  state: {
    name: "Devin"
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name
    },
    fullname2(state, getters) {
      return getters.fullname + ' Young'
    },
    // 引入主模块的参数 rootstate 
    // 使用方法是直接 rootstate.count
    fullname3(state, getters, rootstate) {
      return getters.fullname + rootstate.count
    },
  }
}
