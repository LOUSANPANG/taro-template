/* eslint-disable import/prefer-default-export */
// 请求所有接口

import HTTPREQUEST from "./http"

export const IndexTest = (postData) => {
  return HTTPREQUEST.get('/todos/11', postData)
}
