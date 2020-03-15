import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import configStore from './store'
import Index from './pages/index'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/test/test'
    ],
    window: {
      backgroundColor: '#fff',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro个人习惯开发模版',
      navigationBarTextStyle: 'black',
      onReachBottomDistance: 50
    },
    permission: {
      'scope.userLocation': {
        desc: '您的位置信息将用于附近信息查询'
      }
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
