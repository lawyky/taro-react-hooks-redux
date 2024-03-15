import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import Taro from '@tarojs/taro';
import buildURL from 'axios/lib/helpers/buildURL';
import qs from 'qs';
import useStore from '@/store/zustand';

type ParamsSerializer = AxiosRequestConfig['paramsSerializer']

export function getFullURL(
  baseURL: string,
  url: string,
  params: Record<string, any>,
  paramsSerializer?: ParamsSerializer
) {
  if (url.startsWith('http')) {
    return buildURL(url, params, paramsSerializer);
  }
  baseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`;
  url = url.startsWith('/') ? url.slice(1) : url;
  return buildURL(`${baseURL}${url}`, params, paramsSerializer);
}

const instance = axios.create({
  // baseURL: 'http://47.100.93.67:18107',
  baseURL: 'http://127.0.0.1:2222',
  paramsSerializer: (params: any) => {
    return qs.stringify(params, {
      indices: false
    });
  },
  adapter(config) {
    const { url, method, data, params, headers, baseURL, paramsSerializer } =
      config;
    return new Promise((resolve, reject) => {
      // @ts-ignore
      Taro.request({
        method: method!.toUpperCase() as any,
        url: getFullURL(baseURL || '', url!, params, paramsSerializer),
        header: headers,
        data,
        dataType: 'json',
        success: (res: any) => {
          resolve(res);
        },
        fail: (err: any) => {
          reject(err);
        }
      });
    });
  }
});

/**
 * 请求拦截
 */
instance.interceptors.request.use((config) => {
  const { method, params } = config;
  // 附带鉴权的token
  const headers: any = {
    'X-TOKEN': useStore.getState().token
  };
  // 不缓存get请求
  if (method === 'get') {
    headers['Cache-Control'] = 'no-cache';
  }
  // delete请求参数放入body中
  if (method === 'delete') {
    headers['Content-type'] = 'application/json;';
    Object.assign(config, {
      data: params,
      params: {}
    });
  }

  return {
    ...config,
    headers
  };
});

/**
 * 响应拦截
 */
instance.interceptors.response.use((v) => {
  // @ts-ignore
  if (v.statusCode === 401) {
    Taro.showToast({
      title: '请重新登录',
      icon: 'none'
    });
    useStore.getState().setToken('');
    // @ts-ignore
    setTimeout(() => {
      // userStore.logoutStore()

      Taro.navigateTo({ url: '/pages/login/index' });
    }, 500);
    // uni.removeStorageSync('token')
    // alert('即将跳转登录页。。。', '登录过期')
    // setTimeout(redirectHome, 1500)
    return v.data;
  }

  // @ts-ignore
  if ((v.status || v.statusCode) === 200) {
    // 商品已下架
    if (v.data.code === 10401) {
      Taro.redirectTo({ url: '/pages/demo/index' });
      return v.data;
    }

    return v.data;
  }
  return Promise.reject(v);
});

type Data<T> = {
  result: T
  error: null | string
  code: number
  id: string
}
// 4. 请求工具函数
const request = <T>(method: 'get' | 'post', url: string, data?: object) => {
  return instance.request<T, Data<T>>({
    method,
    url,
    data
  });
};

export default request;
