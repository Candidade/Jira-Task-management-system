//真是环境中 ,如果使用firebase这种第三方auth服务的话,本文件不需要开发者开发
import { axios } from './__server/Axios';
import { User } from './screens/project-list/Search-anel';

const localStorageKey = '__auth_provider_token__';
export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const login: any = (data: { username: string; password: string }) => {
  return axios({
    url: 'login',
    method: 'POST',
    data: data,
  }).then(async (res: any) => {
    const { data, message } = res;
    if (message === 'OK') {
      return handleUserResponse(await data);
    } else {
      return Promise.reject(await data);
    }
  });
};

export const register: any = (data: { username: string; password: string }) => {
  return axios({
    url: 'register',
    method: 'POST',
    data: data,
  }).then(async (res: any) => {
    const { data, message } = res;
    if (message === 'OK') {
      return handleUserResponse(data);
    } else {
      return Promise.reject(await data);
    }
  });
};

export const logout: any = async () =>
  window.localStorage.removeItem(localStorageKey);
