import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import _ from 'lodash'
import './index.scss'

import {
  add,
  minus,
  asyncAdd
} from '../../store/actions/test.js'
import { IndexTest } from '../../servers/serversCollection/index/servers'
import { setStorage } from '../../utils/storage_operate'
import Loading from '../../components/Loading/Loading'

@connect(({ test }) => ({
  test
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLoading: false
    }
  }

  componentDidMount () {
    // 服务用法 - 测试
    this.setState({ showLoading: true })
    IndexTest({}).then(res => {
      console.log('success:', res)
      this.setState({ showLoading: false })
    }).catch(err => {
      console.log('fail:', err)
      this.setState({ showLoading: false })
    })

    // 测试lodash
    let testLodash = _.chunk(['a', 'b', 'c', 'd'], 2)
    console.log(testLodash);
  }

  // 测试缓存
  testSetStorage = async () => {
    let status = await setStorage('test', {'a': 111})
    console.log('期待存储结果', status)
  }
  testGetStorage = () => {

  }

  render () {
    const { showLoading } = this.state

    return (
      <View className='index'>
        <Loading showLoading={showLoading} />

        <Button onClick={this.props.add}>+</Button>
        <Button onClick={this.props.dec}>-</Button>
        <Button onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.test.num}</View>

        <Button onClick={this.testSetStorage}>设置缓存</Button>
        <Button onClick={this.testGetStorage}>获取缓存</Button>
      </View>
    )
  }
}

export default Index;

/**
 * showLoading 加载开关(true显示, false隐藏)
 */
Index.defaultProps = {
  showLoading: false
}