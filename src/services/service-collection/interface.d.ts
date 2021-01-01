export interface LoginParams {
  /**
   * @description 登录
   * @param {string} account 账号
   * @param {string} password 密码
   * @param {number} role 3
   */
  account: string,
  password: string,
  role: number
}

export interface GetCodeDataParams {
  /**
   * @description process_code process_name area_code area_name
   * @param {string} code area_code
   */
  code: string,
}

export interface CodeTreeParams {
  /**
   * @description 获取区划列表
   * @param {string} code area_code
   * @param {string} type 是否是机构代码还是区划代码 2 1
   * @param {number} needBuilds 是否需要建筑物数量 1 0
   */
  code: string,
  type: string,
  needBuilds: number
}

export interface GetbuildslistParams {
  /**
   * @description 获取建筑物列表
   * @param {string} code 区划代码
   * @param {boolean} is_transform 标识
   * @param {string} jsondata 条件
   * @param {string} jsondata 条件
   * @param {string} jsondata.sjzt 数据状态 1未删除 0已删除  
   * @param {string} jsondata.hy_state 核用状态：1，已用；2，未用
   * @param {string} jsondata.sh_state 审核状态：1，未审核；2，错误；3，警告；4，通过；5，已修改； 6，已上报  
   * @param {string} jsondata.keyword 关键词
   * @param {string} jsondata.limit 条数
   * @param {string} jsondata.offset 页数
   * 排序的额外参数
   * @param {string?} order 字段
   * @param {string?} orderby 排序
   * @param {any?} position 坐标位置
   */
  code: string,
  is_transform: boolean,
  jsondata: string,
  order?: string,
  orderby?: string,
  position?: any
}

export interface GetbuildGeojsonParams {
  /**
   * @description 获取单个建筑物信息
   * @param {string} uuid uuid
   */
  uuid: string
}

export interface TdtGeocoderParams {
  /**
   * @description 获取地理位置
   * @param {object} postStr
   * @param {string} postStr.lon
   * @param {string} postStr.lat
   * @param {string} postStr.ver 1
   * @param {string} type 'geocode'
   * @param {string} tk '9e52691478668502f94b66e1b1b46e81
   */
  postStr: string,
  type: string,
  tk: string
}


export interface DeleteParams {
  /**
   * @description 删除
   * @param {string} uuid uuid
   */
  uuid: string
}