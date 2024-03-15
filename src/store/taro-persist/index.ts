import Taro from '@tarojs/taro';

export default {
  getItem(key: string) {
    return Taro.getStorage({ key }).then(res => {
      return res.data;
    });
  },

  setItem(key: string, data: string) {
    return Taro.setStorage({ key, data });
  },

  removeItem(key: string) {
    return Taro.removeStorage({ key });
  },

  clear() {
    return Taro.clearStorage();
  }
};
