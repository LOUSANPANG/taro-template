import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import _ from 'lodash'
import './test.scss'

import {
  add,
  minus,
  asyncAdd
} from '../../store/actions/test.js' // 测试redux
import { TestServers } from '../../servers/serversCollection/test/servers' // 测试服务
import Loading from '../../components/Loading/Loading' // 测试loading
import DetectTool from '../../utils/detect_version' // 测试版本更新


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


class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLoading: false
    }
  }

  componentDidMount () {
    // 服务用法 - 测试
    this.setState({ showLoading: true })

    TestServers({}).then(res => {
      console.log('servers success:', res)
      this.setState({ showLoading: false })
    }).catch(err => {
      console.log('servers fail:', err)
      this.setState({ showLoading: false })
    })

    // 测试lodash
    let testLodash = _.chunk(['a', 'b', 'c', 'd'], 2)
    console.log('lodash test:', testLodash)

    // 测试版本更新
    DetectTool.DetectVersionUpdate()
  }


  render () {
    const { showLoading } = this.state

    return (
      <View className='test'>
        <Loading showLoading={showLoading} />

        <Button onClick={this.props.add}>+</Button>
        <Button onClick={this.props.dec}>-</Button>
        <Button onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.test.num}</View>
      </View>
    )
  }
}

export default Test;

/**
 * showLoading 加载开关(true显示, false隐藏)
 */
Test.defaultProps = {
  showLoading: false
}