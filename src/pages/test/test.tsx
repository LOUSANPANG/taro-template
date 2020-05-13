import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import _ from 'lodash'
import './test.scss'

import {
  add,
  minus,
  asyncAdd
} from '../../store/actions/test' // 测试redux
import { TestServers } from '../../services/serversCollection/test/servers' // 测试服务
import Loading from '../../components/Loading/Loading' // 测试loading
import DetectTool from '../../utils/detect_version' // 测试版本更新


const DefaultProps = {
  showLoading: false
}

interface PageProps {
  test: {
    num: string
  }
}

interface PageDispatch {
  add: () => any,
  dec: () => any,
  asyncAdd: () => any
}

type Props = PageProps & PageDispatch & Partial<typeof DefaultProps>

type State = {
  showLoading: boolean
}

@connect(
  ({ test }) => ({
    test
  }), ( dispatch ) => ({
    add () {
      dispatch( add() )
    },
    dec () {
      dispatch( minus() )
    },
    asyncAdd () {
      dispatch( asyncAdd() )
    }
  })
)


class Test extends Component<Props, State> {

  public defaultProps = DefaultProps

  public constructor ( props: Props ) {
    super( props )
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

  
  public render () {
    const { showLoading } = this.state

    return (
      <View className='test'>
        <Loading showLoading={ showLoading } />
        <Button onClick={ this.props.add }>+</Button>
        <Button onClick={ this.props.dec }>-</Button>
        <Button onClick={ this.props.asyncAdd }>async</Button>
        <View>{ this.props.test.num }</View>
      </View>
    )
  }
}

export default Test
