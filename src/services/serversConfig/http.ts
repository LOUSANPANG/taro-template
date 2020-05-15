/**
 * 网络
 * wx.request、wx.uploadFile、wx.downloadFile 的最大并发限制是 10 个
 * wx.connectSocket 的最大并发限制是 5 个
 * 小程序进入后台运行后，如果 5s 内网络请求没有结束，会回调错误信息 fail interrupted
 * 只要成功接收到服务器返回，无论 statusCode 是多少，都会进入 success 回调
 */

import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'


interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))


interface Params {
  /**
   * @description {http} 请求类型封装库
   * @param {string} url 路由
   * @param {Object/String/ArrayBuffer} data 参数
   * @param {=string} contentType defalut 'application/json'
   */
  url: string,
  data: any,
  contentType?: string,
}

type Method = 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'


class httpRequest {

  // 封装Taro请求
  public baseOptions( params: Params, method: Method = 'GET' ) {
    const { url, data } = params
    const BASE_URL = getBaseUrl()
    const CONTENT_TYPE = params.contentType || 'application/json'
    const OPTION = {
      url: BASE_URL + url,
      data,
      method,
      header: {
        'content-type': CONTENT_TYPE,
        'Authorization': Taro.getStorageSync( 'Authorization' )
      }
    }
    return Taro.request( OPTION )
  }

  // 封装get请求
  public get( url: string, data: any ) {
    let option = { url, data }
    return this.baseOptions(option)
  }

  // 封装post请求
  public post( url: string, data: any, contentType: string ) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }

  // 封装put请求
  public put( url: string, data: any ) {
    let option = { url, data }
    return this.baseOptions( option, 'PUT' )
  }

  // 封装delete请求
  public delete( url: string, data: any ) {
    let option = { url, data }
    return this.baseOptions( option, 'DELETE' )
  }

}

export default new httpRequest()
