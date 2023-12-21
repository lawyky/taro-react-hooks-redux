import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '@/store/modules/user'

import './index.scss'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

const Index = () => {
  const [v, setV] = useState(0)
  const token = useSelector((state: any) => {
    return state.userSlice.token
  })
  useEffect(() => {
    console.log(token)
  }, [token])

  const dispatch = useDispatch()
  const handle = () => {
    setV(Math.random())
    dispatch(setToken(Math.random()))
  }

  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用项目{v}。
        {token}
      </View>
      <View className="index">
        <Button type="primary" className="btn" onClick={handle}>
          Button
        </Button>
      </View>
    </View>
  )
}
export default Index
