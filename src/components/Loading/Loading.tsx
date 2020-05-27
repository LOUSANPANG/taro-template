import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'

import './Loading.scss'

interface Props {
    /**
     * showLoading 加载开关
     */
    showLoading: boolean
}

interface State {}

export default class Loading extends Component<Props, State> {
    protected constructor( props: Props ) {
        super( props )
        this.state = {}
    }

    public render() {
        const { showLoading } = this.props
        return (
            <View className='loading' hidden={ !showLoading }>
                <View className='container'>
                    <AtActivityIndicator size={ 58 } color='#3669f8' mode='center' />
                </View>
            </View>
        )
    }
}