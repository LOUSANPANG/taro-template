// @description {http} 请求类型封装库

import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

class httpRequest {

  /**
   * 请求
   * @param {object} params
   * @param {string} params.url
   * @param {Object/String/ArrayBuffer} params.data
   * @param {string} params.contentType header
   * @param {string} method
   */

  baseOptions(params, method = "GET") {
    let { url, data } = params
    const BASE_URL = getBaseUrl(url)
    let contentType = "application/json"
    contentType = params.contentType || contentType
    const option = {
      url: BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        'Authorization': Taro.getStorageSync('Authorization')
      }
    }
    return Taro.request(option)
  }


  get(url, data = "") {
    let option = { url, data }
    return this.baseOptions(option)
  }


  post(url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, "POST")
  }


  put(url, data = "") {
    let option = { url, data }
    return this.baseOptions(option, "PUT")
  }


  delete(url, data = "") {
    let option = { url, data }
    return this.baseOptions(option, "DELETE")
  }

}

export default new httpRequest()
