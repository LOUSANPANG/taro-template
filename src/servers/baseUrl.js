const getBaseUrl = () => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    //开发环境
    BASE_URL = 'https://jsonplaceholder.typicode.com'
  } else {
    // 生产环境
    BASE_URL = ''
  }
  return BASE_URL
}

export default getBaseUrl;
