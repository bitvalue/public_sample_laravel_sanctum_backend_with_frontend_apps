import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { api, user },
})
