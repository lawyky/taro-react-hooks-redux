import { Image, View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import { memo, useState } from 'react';
import { newCaptcha } from '@/api/home';
import { useRequest } from 'alova';
import { useDidShow } from '@tarojs/taro';
import useStore from '@/store/zustand';

const Index = memo(() => {
  const { token, setToken } = useStore();
  const handle = () => {
    setToken(Math.random() + '');
  };
  const [userId, setUserId] = useState(1);
  const {
    loading = false,
    data,
    send
  } = useRequest(() => newCaptcha({
    userId
  }), {
    // 请求响应前，data的初始值
    initialData: {}
  });
  const refreshCaptcha = async () => {

    await send();
    setUserId(userId + 1);
    // Taro.navigateTo({
    //   url: '/pages/home/index',
    //     success: function (res: any) {
    //       console.log(JSON.stringify(res));
    //     }
    // });
  };

  // 对应 onShow
  useDidShow(() => {
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
        {/* <View style={{ width: '100%', height: '300rpx' }}>
          <Map id="111" style={{ width: '100%', height: '300rpx' }} latitude={27} longitude={127} onError={onError} />
        </View> */}
        <Image src={data?.blob} onClick={handle} />
        <View style={{ width: '750rpx', height: '50vh', wordBreak: 'break-all' }}>
          {loading ? 'Loading...' : <View>{JSON.stringify(data)}</View>}
        </View>
      </View>
    </>
  );
});
export default Index;
