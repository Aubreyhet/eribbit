import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
// 三个模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  state: {
  },
  plugins: [createPersistedstate({
    key: 'erabbit-client-pc-store',
    paths: ['user', 'cart']
  })],
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user,
    category
  }
})
