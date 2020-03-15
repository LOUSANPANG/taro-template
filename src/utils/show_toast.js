// 封装taro.showToast()

import Taro from '@tarojs/taro'


/**
 * 提示
 * @param {string} title 标题
 * @param {number} duration 时间
 * @param {string} icon 图标
 */
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