import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  componentDidMount () {}

  render () {
    return (
      <View className='index'></View>
    )
  }
}

export default Index;
