// 封装请求模块
// 请求拦截器
// 响应拦截器
// 导出函数
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址 供其他不使用axios用
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地又token就在头部携带
    // 1. 获取用户信息对象
    const { profile } = store.state.user
    // 2. 判断是否有token
    if (profile.token) {
    // 3. 设置token
      config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
  }, err => {
    return Promise.reject(err)
  })
// 响应拦截器
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  // 错误处理
  // 401状态码
  if (err.response && err.response.status === 401) {
    // token失效
    // 1.清空本地无效的用户信息
    store.commit('user/setUser', {})
    // 2.跳转到登录页面
    // 组件中： 当前路由地址 不带参数的当前路由地址$route.path 需要带参数的当前路由地址 $route.fullPath
    // 在js模块中 router.currentRoute.value.fullPath 相当于 $route
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    // 3.跳转需要传参（当前路由地址）给登录页面
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

export default instance
