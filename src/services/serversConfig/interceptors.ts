import Taro from "@tarojs/taro"
import ShowToast from '../../utils/show_toast'
import { pageToLogin } from '../serversUtils/utilsToLogin'
import HTTP_STATUS from './statusCode'


// @description {interceptors} 服务拦截判断
const customInterceptor = chain => {
  const requestParams = chain.requestParams

  return chain.proceed( requestParams ).then(res => {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if ( res.statusCode === HTTP_STATUS.NOT_FOUND ) {
      // 404
      ShowToast( '请求资源不存在' )
      return Promise.reject( '请求资源不存在' )

    } else if ( res.statusCode === HTTP_STATUS.BAD_GATEWAY || res.statusCode === HTTP_STATUS.SERVER_ERROR || res.statusCode === HTTP_STATUS.SERVICE_UNAVAILABLE ) {
      // 500 502 503
      ShowToast( '系统繁忙稍后重试' )
      return Promise.reject( '系统繁忙稍后重试' )

    } else if ( res.statusCode === HTTP_STATUS.FORBIDDEN ) {
      // 403根据自身业务修改
      ShowToast( '没有权限访问' )
      Taro.setStorageSync( 'Authorization', '')
      pageToLogin()
      return Promise.reject( '没有权限访问' )

    } else if ( res.statusCode === HTTP_STATUS.AUTHENTICATE ) {
      // 401
      ShowToast( '需要鉴权' )
      Taro.setStorageSync( 'Authorization', '' )
      pageToLogin()
      return Promise.reject( '需要鉴权' )

    } else if ( res.statusCode === HTTP_STATUS.SUCCESS ) {
      return res.data
    }
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]

export default interceptors
