// 判断小程序的API，回调，参数，组件，是否在当前版本可用
// 使用 ${API}.${method}.${param}.${option} 或者 ${component}.${attribute}.${option} 方式来调用

/**
 * ${API} 代表 API 名字
 * ${method} 代表调用方式，有效值为return, success, object, callback
 * ${param} 代表参数或者返回值
 * ${option} 代表参数的可选值或者返回值的属性
 * ${component} 代表组件名字
 * ${attribute} 代表组件属性
 * ${option} 代表组件属性的可选值
 */

import Taro from '@tarojs/taro'

const CanIUse = param => {
  const _CANIUSE =  Taro.canIUse(param)
  return _CANIUSE
}

export default CanIUse