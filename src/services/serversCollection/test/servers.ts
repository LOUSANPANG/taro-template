// @description {servers} 测试服务集合
import HTTPREQUEST from '../../serversConfig/http'

export const TestServers = ( postData: any ) => {
  return HTTPREQUEST.get('/todos/1', postData)
}