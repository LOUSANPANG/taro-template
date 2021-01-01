import Taro from '@tarojs/taro'
import ShowToast from './custom_toast'


/**
 * 封装缓存存取操作 （上限10MB，单个key上限1MB）
 * @param {string} key 本地缓存中指定的key
 * @param {any} data 需要缓存的内容（原生类型、Date、JSON.stringify序列化的对象）
 * @param {boolean=} ifToast 存储成功是否提示
 */


// 异步存储缓存
export const SetStorage = ( key: string, data: any, ifToast: boolean = false ): void => {
  Taro.setStorage({
    key,
    data,
    success() {
      ifToast && ShowToast('存储成功')
    },

    fail() {
      ShowToast('存储失败', 2000)
    }
  })
}


// 同步存储缓存
export const SetStorageSync = ( key: string, data: any, ifToast:boolean = false ): void => {
  try {
    Taro.setStorageSync(key, data)
    ifToast && ShowToast('存储成功')

  } catch (e) {
    ShowToast('存储缓存失败', 2000)
  }
}


// 同步读取缓存[实际工作中暂未用到异步读取缓存][存储数据量暂时不是很大]
export const GetStorageSync = ( key: string ) => {
  try {
    const _GETDATA = Taro.getStorageSync(key)
    if (_GETDATA) return _GETDATA

  } catch (e) {
    ShowToast('读取缓存失败', 2000)
  }
}


// 异步清除指定key
export const RemoveStorage = ( key: string, ifToast: boolean = false ): void => {
  Taro.removeStorage({
    key,
    success() {
      ifToast && ShowToast('清除存储成功')
    },

    fail() {
      ShowToast('清除存储失败', 2000)
    }
  })
}


// 同步清除指定key
export const RemoveStorageSync = ( key: string, ifToast: boolean = false ): void => {
  try {
    Taro.removeStorageSync(key)
    ifToast && ShowToast('清除存储成功')

  } catch (e) {
    ShowToast('清除存储失败', 2000)
  }
}


// 异步清除所有缓存
export const ClearStorage = ( ifToast: boolean = false ): void => {
  Taro.clearStorage({
    success() {
      ifToast && ShowToast('清除存储成功')
    },

    fail() {
      ShowToast('清除存储失败', 2000)
    }
  })
}


// 同步清除所有缓存
export const ClearStorageSync = ( ifToast: boolean = false ): void => {
  try {
    Taro.clearStorageSync()
    ifToast && ShowToast('清除存储成功')

  } catch (e) {
    ShowToast('清除存储失败', 2000)
  }
}