import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/store/modules/home'

import './index.scss'

const Index = () => {
  const counter = useSelector((state: any) => {
    console.log(state)
    return state.homeReducer.counter
  })

  const dispatch = useDispatch()
  const handle = () => {
    dispatch(increment(1))
  }

  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
        {counter}
      </View>
      <View className="index">
        <Button type="primary" className="btn" onClick={handle}>
          NutUI React Button
        </Button>
      </View>
    </View>
  )
}
export default Index
