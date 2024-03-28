import type { Method } from 'alova';
import { createAlova } from 'alova';
import AdapterTaro from '@alova/adapter-taro';
import useStore from '@/store/zustand';
import Taro from '@tarojs/taro';

const alovaInst = createAlova({
  baseURL: 'http://192.168.3.11:2222',
  timeout: 50000,
  ...AdapterTaro(),
  beforeRequest(method: Method) {
    const token = useStore.getState().token;
    if (token) {
      method.config.headers.Authorization = `Bearer ${token}`;
    }
    // 不缓存get请求
    if (method.type === 'GET') {
      method.config.headers['Cache-Control'] = 'no-cache';
    }
    // delete请求参数放入body中
    if (method.type === 'DELETE') {
      method.config.headers['Content-type'] = 'application/json;';
    }
  },
  responded(resp: Taro.request.SuccessCallbackResult<Workspace.Resp<undefined>>) {
    console.log(resp);
    const { statusCode, errMsg, data } = resp;
    if (statusCode >= 400) {
      throw new Error('请求错误');
    }
    if (statusCode >= 400) {
      throw new Error(errMsg);
    }
    // if (json.code === 401) {
    //   Taro.showToast({
    //     title: '请重新登录',
    //     icon: 'none'
    //   });
    //   useStore.getState().setToken('');
    //   // @ts-ignore
    //   setTimeout(() => {
    //     // userStore.logoutStore()
  
    //     Taro.navigateTo({ url: '/pages/login/index' });
    //   }, 500);
    //   // uni.removeStorageSync('token')
    //   // alert('即将跳转登录页。。。', '登录过期')
    //   // setTimeout(redirectHome, 1500)
    //   throw new Error(json.message);
    // }

    if (statusCode !== 200) {
      // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
      throw new Error(errMsg);
    }
    return data.data;
  },
  // localCache: {
  //   // 统一设置POST的缓存模式
  //   GET: 60 * 10 * 1000,
  //   POST: {
  //     mode: 'placeholder',
  //     expire: 60 * 10 * 1000
  //   },
  //   // 统一设置HEAD请求的缓存模式
  //   HEAD: 60 * 10 * 1000
  // }
  localCache: null,
  shareRequest: true,
  // errorLogger: process.env.NODE_ENV === 'development',
  // cacheLogger: process.env.NODE_ENV === 'development'
});

export default alovaInst;
