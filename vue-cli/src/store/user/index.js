export default {
  mutations: {
    login(state, v) {
      state.isLoggedIn = true
      state.data = v
    },

    logout(state) {
      state.isLoggedIn = false
      state.data = {}
    },
  },

  namespaced: true,

  state: {
    isLoggedIn: false,

    data: {},
  },
}
