// 定义首页需要的数据接口
import resquest from '@/utils/request'

/**
 * 首页获取分类数据接口
 * @param {*} params limit
 * @returns 返回数据对象
 */
export const findBrand = params => {
  return resquest({
    method: 'GET',
    url: '/home/brand',
    params
  })
}

/**
 * 获取首页轮播图数据
 * @returns 数据对象
 */
export const findBanner = () => {
  return resquest({
    method: 'GET',
    url: '/home/banner'
  })
}
