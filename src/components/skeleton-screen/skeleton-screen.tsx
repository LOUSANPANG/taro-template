import React from 'react'
import { View } from '@tarojs/components'
import './skeleton-screen.scss'


function SkeletonScreen () {
  return (
    <View className='skeleton-screen'>
      <View className='skeleton' />
      <View className='skeleton' />
      <View className='skeleton' />
      <View className='skeleton' />
      <View className='skeleton' />
      <View className='skeleton' />
      <View className='skeleton' />
    </View>
  )
}

export default SkeletonScreen
