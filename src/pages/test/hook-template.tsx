// https://docs.taro.zone/docs/hooks
import React, { useState } from 'react'
import { View } from '@tarojs/components'

import { useAsyncEffect } from '@/src/utils/custom_hook'


function HookTemplate () {
  const [ staTest, setTest ] = useState<string>('')

  useAsyncEffect(async () => {
    setTest('test')
  }, [ ])

  return (
    <View className='arealist'> {staTest} </View>
  )
}

export default HookTemplate
