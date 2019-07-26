export default {
  state: {
    show: false
  },
  getters: {
    no_show (state) {
      return !state.show
    }
  },
  mutations: {
    switch_father (state) { // 这里的state对应着上面这个state
      state.show = !state.show
      // 可以在这里执行其他的操作改变state
    }
  },
  actions: {
    switch_father (context) { // 这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_father')
      // 还可以在这里触发其他的mutations方法
    }
  }
}
