/**
 * access_token
 * 开发者应将 AppSecret 保存到后台服务器中，通过服务器使用 getAccessToken 接口获取 access_token，并调用相关 AP
 */

import ShowToast from '@/src/utils/custom_toast'
import { ClearStorageSync } from '@/src/utils/custom_storage'
import HTTP_STATUS from './status-code'
import { pageToLogin } from './tologin'


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
      setTimeout(() => {
        ClearStorageSync()
        pageToLogin()
        return Promise.reject( '没有权限访问' )
      }, 2000)

    } else if ( res.statusCode === HTTP_STATUS.AUTHENTICATE ) {
      // 401
      ShowToast( '需要鉴权' )
      setTimeout(() => {
        ClearStorageSync()
        pageToLogin()
        return Promise.reject( '需要鉴权' )
      }, 2000)

    } else if ( res.statusCode === HTTP_STATUS.SUCCESS ) {
      if (res.data.code || res.data.status) {
        return res.data
      } else {
        ShowToast( res.data.msg )
        return Promise.reject( res.data.msg )
      }
    }
  }).catch(err => {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if ( err.status === HTTP_STATUS.NOT_FOUND ) {
      // 404
      ShowToast( '请求资源不存在' )
      return Promise.reject( '请求资源不存在' )

    } else if ( err.status === HTTP_STATUS.BAD_GATEWAY || err.status === HTTP_STATUS.SERVER_ERROR || err.status === HTTP_STATUS.SERVICE_UNAVAILABLE ) {
      // 500 502 503
      ShowToast( '系统繁忙稍后重试' )
      return Promise.reject( '系统繁忙稍后重试' )

    } else if ( err.status === HTTP_STATUS.FORBIDDEN ) {
      // 403根据自身业务修改
      ShowToast( '没有权限访问' )
      setTimeout(() => {
        ClearStorageSync()
        pageToLogin()
        return Promise.reject( '没有权限访问' )
      }, 1000)

    } else if ( err.status === HTTP_STATUS.AUTHENTICATE ) {
      // 401
      ShowToast( '需要鉴权' )
      setTimeout(() => {
        ClearStorageSync()
        pageToLogin()
        return Promise.reject( '需要鉴权' )
      }, 1000)

    } 
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [ customInterceptor ]

export default interceptors