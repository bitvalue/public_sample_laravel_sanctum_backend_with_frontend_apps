import axios from 'axios'
import store from '@/store'

const api = axios.create({
  baseURL: 'http://backend.sanctum-sample.local:8000/',

  timeout: 1000,

  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    store.commit('api/isLoading', true)

    return config
  },

  (error) => {
    // ignore this section
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    store.commit('api/isLoading', false)

    return response
  },

  (error) => {
    store.commit('api/isLoading', false)

    error.response
      ? store.commit('api/errorWithResponse', error.response.data)
      : store.commit('api/errorWithoutResponse', error.toJSON())

    return Promise.reject(error)
  }
)

export default api
