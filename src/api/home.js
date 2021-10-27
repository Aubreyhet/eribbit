// 定义首页需要的数据接口
import resquest from '@/utils/request'

export const findBrand = params => {
  return resquest({
    method: 'GET',
    url: '/home/brand',
    params
  })
}
