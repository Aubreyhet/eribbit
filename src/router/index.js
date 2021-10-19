import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = []

// new VueRouter({}) 2.0创建路由
const router = createRouter({
  // 使用哈希路由模式
  history: createWebHashHistory(),
  routes
})

export default router
