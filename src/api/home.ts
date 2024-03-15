import request from '../http';

export const getCaptcha = () => {
  return request<any>('get', '/api/v1/publics/captcha');
};
