// 封装检测版本更新 (检测版本中会有大概5s的延迟检测)
import Taro from '@tarojs/taro'
import ShowToast from './show_toast'

/**
 * 检测版本更新
 * @function Taro.getUpdateManager() 检测更新
 * @function _:onUpdateReady() 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
 * @function _:applyUpdate() 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用
 * @function _:onUpdateFailed() 监听小程序更新失败事件
 */
const DetectVersionUpdate = () => {

  const _UpdateManager = Taro.getUpdateManager()

  _UpdateManager.onUpdateReady(function() {
    Taro.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用?',
      success (res) {
        if (res.confirm) {
          _UpdateManager.applyUpdate()
        }
      }
    })
  })

  _UpdateManager.onUpdateFailed(function() {
    ShowToast('新版本下载失败，请尝试清空缓存重新启动', 5000)
  })

}

export default {
  DetectVersionUpdate
}
