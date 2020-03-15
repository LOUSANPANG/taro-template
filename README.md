# 设计和前端开发规范

## 设计稿规范

### 尺寸标准
- `750px`


--------------------------
## 项目组织规范

### 开发环境
- 项目中使用`Taro.js`、`Redux`、`TaroUI`作为基础框架，使用`Hooks、JavaScript`进行业务书写，使用`Sass`进行样式书写
- 使用`Lodash.js`辅助开发

### 文件命名
- 页面文件 命名遵循`type-name.tsx` 例如`/pages/shop/shop-list.jsx`
- 每个页面的公共组件 命名遵循**大驼峰** 例如`/pages/index/Components/IndexHead.jsx`.
- 公共组件文件 命名遵循**大驼峰** 例如 `/Component/Loading/Loading.jsx`
- 辅助文件 命名遵循**小驼峰** 例如 `/servers/serversConfig/statusCode.js`
- 工具文件 遵循`type_name.js`，例如`/utils/show_toast.js`

### 文件后缀
- 组件文件使用`jsx`作为文件后缀
- 样式文件使用`sass`作为文件后缀
- 普通业务文件使用`js`作为文件后缀
- 特殊文件根据框架或组件要求选择后缀`.weapp.js`

### 封装功能组件导出变量
- 功能性文件如(封装taro.showToast()), 变量命名为**大驼峰**规范.以便在组件中使用.
- 常量使用 `_AABB`

### 插件方面
- 使用`VScode`的`Prettier`代码格式化程序
- 使用适用于自己的`ESlint`规则

### 代码提交方面
- 严格参照 ` Angular Style Commit Message Conventions` 代码提交规范。 `style: :art: 代码样式格式调整`
- 分支：开发分支`dev`、 测试分支`test`、 版本发布分支`master`


--------------------------
## 封装代码层次方面
### 请求封装
- 参照了`axios`的请求方式，对每一次请求进行预览拦截获取错误。
- 对每一个组件的请求进行了请求提取，方面后期管理优化。

### 加载封装
- 使用`taro-ui`在每一次长时间等待等处理方面进行了加载动画。

### rudex封装

### [其他功能封装详见更新计划日志](./TODO.md)


--------------------------
## 性能
- 首屏时间不超过 5 秒
- 渲染时间不超过 500ms
- 一个执行周期内脚本运行时间不超过 1 秒
- 每秒调用setData的次数不超过 20 次
- setData的数据在JSON.stringify后不超过 256KB
- setData传入的所有数据都在模板渲染中有相关依赖
- 页面WXML节点少于 1000 个，节点树深度少于 30 层，子节点数不大于 60 个
- 所有图片均开启 HTTP 缓存
- 图片宽高都不超过实际显示宽高的3倍
- 所有网络请求都在 1 秒内返回结果
- 每秒通过wx.request发起的请求数不超过 10 个
- 每秒发起的图片请求数不超过 20 个
- 3 分钟以内同一个url请求不出现两次回包大于 128KB 且一模一样的内容

## 体验
### 开启惯性滚动 
- wxss中带有overflow: scroll的元素，在 iOS 下需要设置-webkit-overflow-scrolling: touch样式
### 不使用:active伪类，并使用hover-class替换:active
### 显示的高/宽与原图的高/宽不超过 15%
### 可点击元素的宽高都不小于 20px 
### position: fixed的可交互组件渲染在安全区域内(iphone X)
### 合理的颜色搭配
- 较大字体（font-size >= 24px，或同时满足font-size >= 19px与font-weight >= 700），文字颜色和背景颜色的对比度不小于3
- 其他字体，文字颜色和背景颜色的对比度不小于4.5

--------------------------
## 性能体验优化实践总结
### scss
- 布局`.g-`, 模块`.m-`, 元件`.u-`, 功能`.f-`, 皮肤`.s-`
- app.scss 中提取该程序中主流字体、颜色、布局等
- 兼容性问题（iphone x兼容等）

### config、project.config.json
- `config-index.js` 配置别名alias
- `project.config` setting配置

### 代码规范上（参照小程序性能优化、性能评分介绍）
- 将`props`设置默认值、类型分析
- `setState` 合并
- 合理运用`componentWillPreload`进行数据预加载
- 所有定时器的回调执行时所在的页面都与设置定时器的页面一致
- 涉及到的动画尽量避免使用本组件页面的`state`，尽量提取，并使用小程序的动画api。
- 适当时候开启后台运行能力，后台定位
- 监听网络状态变化
- 监听小程序内存不足警告
- 版本兼容

### 资源方面

### 硬件方面
- 开启周期性更新
- 开启预拉取数据

### 打包处理方面


--------------------------
## In the project directory, you can run:
### `install`
- `yarn`

### `dev & build`
- `yarn dev:weapp`
- `yarn build:weapp`

### `update`
- `yarn global add @tarojs/cli@[version]`
- `taro update self [version]`
- `taro update project [version]`

### `examination`
- `taro info`
- `taro doctor`


--------------------------
## 更新日志
- 完整日志请点击 [CHANGELOG.md](./CHANGELOG.md)。


--------------------------
## 目录结构
- 完整目录结构请点击 [TREER.md](./TREER.md)。