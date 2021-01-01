import HTTPREQUEST from '../service-base/http-methods'
import { LoginParams, GetCodeDataParams } from './interface'

// 登录
export const ApiLogin = ( data: LoginParams ) => {
  return HTTPREQUEST.post('/login', data, 'application/json')
}

export const ApiGetCodeData = ( data: GetCodeDataParams ) => {
  return HTTPREQUEST.get('/user/getCodeData', data)
}