// 封装taro.showToast()

import Taro from '@tarojs/taro'

const ShowToast = (title, duration = 1500, icon = 'none') => {
  return new Promise((resolve, reject) => {
      Taro.showToast({
          title,
          duration,
          icon,
          mask: true,
          success: resolve,
          fail: reject
      })
  })
}

export default ShowToast;