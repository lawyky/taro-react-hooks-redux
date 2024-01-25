import { StrictMode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { useDidShow, useDidHide } from '@tarojs/taro'
// 全局样式
import './app.scss'
import store, { persistor } from '@/store'
import { PersistGate } from "redux-persist/integration/react"

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StrictMode>
          { props.children }
        </StrictMode>
      </PersistGate>
    </Provider>
  )
}

export default App
