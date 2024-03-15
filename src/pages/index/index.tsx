import { Image, Map, View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
// import { useDispatch, useSelector } from 'react-redux';
// import { setToken } from '@/store/redux/modules/user';
import { memo, useState } from 'react';
import { getCaptcha } from '@/api/home';

import './index.scss';
import { useDidShow } from '@tarojs/taro';

import configStore from '@/store/zustand';

const Index = memo(() => {
  // const token = useSelector((state: any) => {
  //   return state.userSlice.token;
  // });
  // useEffect(() => {
  //   console.log(token);
  // }, [token]);

  const { token, setToken } = configStore();

  // const dispatch = useDispatch();
  const handle = () => {
    // dispatch(setToken(Math.random()));
    setToken(Math.random() + '');
  };
  const onError = (err) => {
    console.log(err);
  };

  const [x, setX] = useState('');
  const refreshCaptcha = async () => {
    const res = await getCaptcha();

    // @ts-ignore
    setX(res.data.blob);
    // @ts-ignore
    console.log(res.data.blob);
  };

  // 对应 onShow
  useDidShow(() => {
    refreshCaptcha();
  });

  return (
    <>
      <View className="nutui-react-demo">
        <View className="index">
          欢迎使用项目{token}。
        </View>
        <View className="index">
          <Button type="primary" className="btn" onClick={refreshCaptcha}>
            Button
          </Button>
        </View>
        <View style={{ width: '100%', height: '300rpx' }}>
          <Map id="111" style={{ width: '100%', height: '300rpx' }} latitude={27} longitude={127} onError={onError} />
        </View>
        <Image src={x} onClick={handle} />
      </View>
    </>
  );
});
export default Index;
