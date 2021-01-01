## @Taro/cli 3.0.8
- `react` `Ts`
- `Taro-ui`

## In the project directory, you can run
### `install`
- `yarn`

### `examination`
- `taro info`
- `taro doctor`

### `dev & build`
- `yarn dev:weapp` `yarn dev:h5`
- `yarn build:weapp` `yarn build:h5`

### `update`
- `yarn global add @tarojs/cli@[version]`
- `taro update self [version]`
- `taro update project [version]`

### 预览时降低包的大小
```bash
# Mac
$ NODE_ENV=production taro build --type weapp --watch

# Windows
$ set NODE_ENV=production && taro build --type weapp --watch
```

## 一、构建工具配置
### 1.1 集成`Git`
```bash
yarn add -g commitizen cz-conventional-changelog

echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

yarn add -D commitizen cz-conventional-changelog

yarn add -D husky @commitlint/cli @commitlint/config-conventional
```

package.json中配置
```js
"script": {
    "commit": "git-cz",
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-conventional-changelog"
  }
},
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

新建.commitlintrc
```js
module.exports = {
    extends: ['@commitlint/config-conventional']
};
```

自动生成CHANGELOG
```bash
yarn add -D standard-version
```

```js
"script": {
  "release": "standard-version"
}
```

```bash
git add .
git cz
npm run release
git push
```

### 1.2 `config/index`
`alias`
```js
// config/index.js

const path = require('path')
const config = {
  alias: {
    '@/src/': path.resolve(__dirname, '..', 'src')
  },
  h5: {
  + publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  + esnextModules: ['taro-ui'],
  + router: {
      mode: 'hash',
      customRoutes: {
        '/pages/index/index': '/index'
      }
    }
  }
}
```

### 1.3 `.eslintrc`
```js
module.exports = {
  'extends': ['taro/react'],
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "import/no-commonjs": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }]
  }
}
```

### 1.4 `.gitignore`
```bash
dist/
deploy_versions/
.temp/
.rn_temp/
node_modules/
.DS_Store
yarn.lock
yarn-error.log
package-lock.json
```

### 1.5 `project.config.json`
```json
{
  + "appid": "xxxx",
  + "minified": true,
}
```

### 1.6 `babel.config.js`
```
+ "exclude": '' // /mapbox.*\.js$/
```

### 1.7 `global.d.ts`

### 1.8 `tsconfig.json`


## 二、源码文件`src`
### 2.1 `assets`

### 2.2 `components`
```
| loading
  -| 加载动画
| skeleton-screen
  -| 骨架屏
```

### 2.3 `pages`
`test`
```
+ class-template.tsx // class 模板
+ hook-template.tsx // hook 模板
```

### 2.4 `services`
**自定义封装`taro-request`**
- `promise`
- 响应拦截
- 状态统一处理

### 2.5 `utils`
```
| h5
| weapp
  -| can_use.weapp.ts // 检查API是否可用
  -| can_version.weapp.ts // 检查版本更新
| custom_hook.ts // 自定义Hook
| custom_toast.ts // 自定义提示信息
| custom_storage.ts // 自定义缓存
```

### 2.6 `app.scss`
```scss
// 体验优化
// -wxss中带有overflow: scroll的元素，在iOS下需要设置-webkit-overflow-scrolling: touch样式
.u-scroll-element {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
// -position: fixed的可交互组件渲染在安全区域内(iPhone X 兼容)
.u-fixed-element {
  position: fixed;
  padding-bottom: env(safe-area-inset-bottom);
  // padding-bottom: constant(safe-area-inset-bottom);
}
// 在 H5 模式下将会编译成 margin-bottom: 50px，在小程序模式下则会忽略
.u-h5-fixed {
  bottom: 0;
  margin-bottom: taro-tabbar-height;
}
```