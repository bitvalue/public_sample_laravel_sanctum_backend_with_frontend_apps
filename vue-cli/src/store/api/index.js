export default {
  mutations: {
    csrfCookie(state, v) {
      state.csrfCookie = v
    },

    isLoading(state, v) {
      state.isLoading = v
    },

    errorWithoutResponse(state, v) {
      state.errorResponse = v
      state.error = { errors: {}, message: v.message }
    },

    errorWithResponse(state, v) {
      state.errorResponse = v
      state.error = v
    }
  },

  namespaced: true,

  state: {
    csrfCookie: false,

    error: {},

    errorResponse: {},

    isLoading: false,
  },
}
