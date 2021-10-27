import { createRouter, createWebHashHistory } from 'vue-router'

import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')

// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: TopCategory
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      }
    ]
  }
]

// new VueRouter({}) 2.0创建路由
const router = createRouter({
  // 使用哈希路由模式
  history: createWebHashHistory(),
  routes
})

export default router
