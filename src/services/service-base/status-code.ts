interface ICode {
  /**
   * @description {statusCode} 服务状态码
   * SUCCESS 成功
   * CREATED 已创建
   * ACCEPTED 公认
   * CLIENT_ERROR 客户端错误
   * AUTHENTICATE 禁止的
   * FORBIDDEN 禁止的
   * NOT_FOUND 未找到
   * SERVER_ERROR 服务器错误
   * BAD_GATEWAY 错误的网关
   * SERVICE_UNAVAILABLE 暂停服务
   * GATEWAY_TIMEOUT 网关超时
   */
  SUCCESS: number,
  CREATED: number,
  ACCEPTED: number,
  CLIENT_ERROR: number,
  AUTHENTICATE: number,
  FORBIDDEN: number,
  NOT_FOUND: number,
  SERVER_ERROR: number,
  BAD_GATEWAY: number,
  SERVICE_UNAVAILABLE: number,
  GATEWAY_TIMEOUT: number
}

const HTTP_STATUS: ICode = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

export default HTTP_STATUS