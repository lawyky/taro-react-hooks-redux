import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '@/store/modules/user'

import './index.scss'

const Index = () => {
  const token = useSelector((state: any) => {
    console.log(state)
    return state.userSlice.token
  })

  const dispatch = useDispatch()
  const handle = () => {
    dispatch(setToken(Math.random()))
  }

  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用项目。
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
