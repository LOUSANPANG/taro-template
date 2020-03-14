// 封装缓存存取操作 （上限10MB，单个key上限1MB）

import Taro from '@tarojs/taro'

/**
 * 缓存操作
 * @param {string} key 本地缓存中指定的key
 * @param {any} data 需要缓存的内容（原生类型、Date、JSON.stringify序列化的对象）
 */

export const setStorage = (key, data) => {
  let _STORAGE

  Taro.setStorage({
    key,
    data,
    success() { _STORAGE = true },

    fail() { _STORAGE = false },

    complete() { return _STORAGE }
  })
}

export const getStorage = () => {

}