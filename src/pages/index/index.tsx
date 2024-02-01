// @ts-ignore
import { View, Map, Ad } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '@/store/modules/user'

import './index.scss'
import { useEffect } from 'react'

const Index = () => {
  const token = useSelector((state: any) => {
    return state.userSlice.token
  })
  useEffect(() => {
    console.log(token)
  }, [token])

  const dispatch = useDispatch()
  const handle = () => {
    dispatch(setToken(Math.random()))
  }
  const onError = (err) => {
    console.log(err)
  }

  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用项目{token}。
      </View>
      <View className="index">
        <Button type="primary" className="btn" onClick={handle}>
          Button
        </Button>
      </View>
      <View style={{ width: '100%', height: '300rpx' }}>
        <Map id={"111"} style={{ width: '100%', height: '300rpx' }} latitude={27} longitude={127} onError={onError} />
        {/*<Ad unitId={"123"}></Ad>*/}
      </View>
    </View>
  )
}
export default Index
