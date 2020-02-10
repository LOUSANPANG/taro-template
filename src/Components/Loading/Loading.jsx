import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import PropTypes from 'prop-types'

import './Loading.scss'

export default class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {showLoading} = this.props
        return (
            <View className='loading' hidden={!showLoading}>
                <View className='container'>
                    <AtActivityIndicator size={58} color='#3669f8' mode='center' />
                </View>
            </View>
        );
    }
}

// showLoading 加载开关 
Loading.propTypes = {
    showLoading: PropTypes.bool
};