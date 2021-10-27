// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state () {
    return {
      cateList: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setCateList (state, headCategory) {
      state.cateList = headCategory
    },
    // 控制分类和二级类目显示和隐藏的方法
    show (state, id) {
      const currCategory = state.cateList.find(item => item.id === id)
      currCategory.open = true
    },
    hide (state, id) {
      const currCategory = state.cateList.find(item => item.id === id)
      currCategory.open = false
    }
  },
  actions: {
    async getCateList ({ commit }) {
      const { result } = await findAllCategory()
      result.forEach(item => { item.open = false })
      commit('setCateList', result)
    }
  }
}
