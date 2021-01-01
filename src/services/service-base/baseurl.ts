// @description {baseUrl} 基础路由环境

const getBaseUrl = (): string => {
  let BASE_URL: string = ''

  process.env.NODE_ENV === 'development'
    ? BASE_URL = ''
    // 生产环境
    : BASE_URL = ''

  return BASE_URL
}


export default getBaseUrl