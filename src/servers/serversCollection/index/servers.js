/* eslint-disable import/prefer-default-export */

// @description {servers} 首页服务集合

import HTTPREQUEST from "../../serversConfig/http"

export const IndexTest = (postData) => {
  return HTTPREQUEST.get('/todos/1', postData)
}