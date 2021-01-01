import Taro from '@tarojs/taro'


/**
 * 封装taro.showToast()
 * @param {string} title 标题
 * @param {number} duration 时间
 * @param {string} icon 图标
 */

type Icon = 'none' | 'success' | 'loading'

const ShowToast = ( title: string, duration: number = 1500, icon: Icon = 'none' ) => {
  return new Promise(( resolve, reject ) => {
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