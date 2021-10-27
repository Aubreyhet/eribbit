// 定义首页需要的接口函数
import resquest from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export const findAllCategory = () => {
  return resquest({
    method: 'GET',
    url: '/home/category/head'
  })
}
