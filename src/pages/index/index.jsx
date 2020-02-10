import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

import {
  add,
  minus,
  asyncAdd
} from '../../store/actions/test.js'
import { IndexTest } from '../../servers/servers'
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
    this.setState({ showLoading: true })
    IndexTest({}).then(res => {
      console.log('success:', res)
      this.setState({ showLoading: false })
    }).catch(err => {
      console.log('fail:', err)
      this.setState({ showLoading: false })
    })
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