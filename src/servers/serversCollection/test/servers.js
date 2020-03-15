/* eslint-disable import/prefer-default-export */

// @description {servers} 测试服务集合

import HTTPREQUEST from "../../serversConfig/http"

export const TestServers = (postData) => {
  return HTTPREQUEST.get('/todos/1', postData)
}