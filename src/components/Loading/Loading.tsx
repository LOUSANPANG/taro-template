import React from 'react'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './loading.scss'


function Loading () {
  return (
    <View className='loading'>
      <View className='container'>
        <AtActivityIndicator size={58} color='#3669f8' mode='center' />
      </View>
    </View>
  )
}

export default Loading
