import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import RepositoryFactory from '@/repositories/RepositoryFactory'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    name: 'Home',

    component: () => import('@/views/Home'),

    meta: { isPublic: true },
  },

  {
    path: '/dashboard',

    name: 'Dashboard',

    component: () => import('../views/Dashboard'),
  }
]

const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,

  routes
})

const getCsrfCookie = async () => {
  if (!store.state.api.csrfCookie) {
    try {
      await RepositoryFactory('CsrfCookie').get()
      store.commit('api/csrfCookie', true)
    } catch (error) {
      console.log(store.state.api.error.message)
    }
  }
}

const whoami = async () => {
  try {
    const { data } = await RepositoryFactory('User').whoami()

    data
      ? store.commit('user/login', data)
      : store.commit('user/logout')
  } catch (error) {
    console.log(store.state.api.error.message)
  }
}

router.beforeEach(async (to, from, next) => {
  await getCsrfCookie()
  await whoami()

  const isLoggedIn = store.state.user.isLoggedIn
  const isPublic = to.matched.some(record => record.meta.isPublic)

  switch (true) {
    // - not logged in
    // - accessing to non public pages
    // redirect to a login page
    case !isLoggedIn && !isPublic:
      next({ path: '/', query: { redirect: to.fullPath } })
      break
    // - logged in
    // - accessing to a login page
    // redirect to a dashboard page
    case isLoggedIn && to.path === '/':
      next({ path: '/dashboard' })
      break
    default:
      next()
  }
})

export default router
