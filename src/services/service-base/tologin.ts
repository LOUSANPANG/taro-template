// @description {toLogin} 权限问题跳转登录页

import Taro from "@tarojs/taro"


export const getCurrentPageUrl = (): string => {
  let pages: any[] = Taro.getCurrentPages()
  let currentPage = pages[ pages.length - 1 ]
  let url = currentPage.route
  return url
}

export const pageToLogin = (): void => {
  // let path: string = getCurrentPageUrl()
  // if ( !path.includes('login') ) {
  //   Taro.reLaunch({
  //     url: '/pages/login/login'
  //   })
  // }
  Taro.reLaunch({
    url: '/pages/login/login'
  })
}
