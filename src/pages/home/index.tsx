import { Ad, Swiper, SwiperItem, View } from '@tarojs/components';

import './index.scss';

const App = () => {
  return (
    <>
      <Ad
        unitId="l6t0ptniala7uxtmky"
        adIntervals={60}
        fixed="true"
        scale="100"
        adType="video"
        onLoad={() => console.log('ad onLoad')}
        onError={(e) => console.log('ad onError', e)}
        onClose={() => console.log('ad onClose')}
      />
    </>
  );
};
export default App;
