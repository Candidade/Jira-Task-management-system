//真是环境中 ,如果使用firebase这种第三方auth服务的话,本文件不需要开发者开发
import { axios } from './__server/axios';
import { User } from './screens/project-list/search-panel';
const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = '__auth_provider_token__';
export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const login: any = (data: { username: string; password: string }) => {
  return axios({
    url: `${apiUrl}/login`,
    method: 'POST',
    data: data,
  }).then(async (res: any) => {
    console.log(res);
    const { data, message } = res;
    if (message === 'OK') {
      return handleUserResponse(await data);
    } else {
      return Promise.reject(data);
    }
  });
};

export const register: any = (data: { username: string; password: string }) => {
  return axios({
    url: `${apiUrl}/register`,
    method: 'POST',
    data: data,
  }).then(async (response: any) => {
    const { data, message } = response;
    if (message === 'OK') {
      return handleUserResponse(data);
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
