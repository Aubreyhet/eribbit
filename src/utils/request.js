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
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 拦截业务
  // 进行请求配置的修改
  const { profile } = store.state.user
  // 判断token是否存在
  if (profile.token) {
    // 如果存在那就在请求中携带token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.request.use(res => {
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

// 请求工具
export default (url, method, submitData) => {
  // 负责请求 请求地址 请求方式 ，提交的数据
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
