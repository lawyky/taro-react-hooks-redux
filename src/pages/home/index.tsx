import { Swiper, SwiperItem, View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';

import './index.scss';
import Taro from '@tarojs/taro';

const App = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ];

  const goto = () => {
    console.log(1111111);
    Taro.redirectTo({
      url: '/pages/redirect/index',
      success: function (res: any) {
        console.log(JSON.stringify(res));
      }
    });
  };
  return (
    <>
      <View className="home" />
      <Swiper autoplay indicatorDots>
        {list.map((item, index) => {
          return (
            <SwiperItem key={item}>
              <img width="100%" height="100%" src={item} onClick={() => console.log(index)} alt="" />
            </SwiperItem>
          );
        })}
      </Swiper>
      <Button type="primary" className="btn" onClick={goto}>
        跳转
      </Button>
    </>
  );
};
export default App;
