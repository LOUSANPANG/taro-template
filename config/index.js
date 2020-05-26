const path = require('path')

const config = {
  projectName: 'frame_tarotemplate',
  date: '2020-1-13',
  onePxTransform: true,
  unitPrecision: 5,
  propList: ['*'],
  selectorBlackList: [],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        'helpers': false,
        'polyfill': false,
        'regenerator': true,
        'moduleName': 'babel-runtime'
      }]
    ]
  },
  plugins: [],
  defineConstants: {
  },
  alias: {
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/services': path.resolve(__dirname, '..', 'src/services'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/types': path.resolve(__dirname, '..', 'src/types'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils')
  },
  mini: {
    // compile: {
    //   compressTemplate: true,
    //   exclude: [] // 配置小程序编译过程中排除不需要经过 Taro 编译的文件，文件路径必须以源码所在 src 目录开头
    // },
    imageUrlLoaderOption: {
      limit: 10240 // 图片都会经过 url-loader 进行处理 (x)
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain (chain) { // 将 lodash 单独拆分出来 (防止vendors.js过大)
      chain.merge({
        optimization: {
          splitChunks: {
            cacheGroups: {
              lodash: {
                name: 'lodash',
                priority: 1000,
                test (module) {
                  return /node_modules[\\/]lodash/.test(module.context)
                }
              }
            }
          }
        }
      })
    },
    commonChunks (commonChunks) { // 添加 lodash 公共文件
      commonChunks.push('lodash')
      return commonChunks
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
