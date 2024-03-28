import alovaInst from '@/utils/http';

export const newCaptcha = (params: any) => {
  return alovaInst.Get<Workspace.DATA>('/api/v1/publics/captcha', {
    params,
  });
};
