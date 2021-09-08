import qs from 'qs';
import * as auth from '../../auth-provider';
import { useAuth } from '../../context/auth-context';

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  data?: object;
  token?: string;
}
export const fetch = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = Object.assign(
    {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': data ? 'application/json' : '',
      },
    },
    { ...customConfig }
  );
  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  // axios和fetch的表现不一样,axios可以直接在返回状态不为2xx的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      //此处是RESSTFull风格请求方式,返回401那么就退出登录了,token没储存了
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({
          message: '请重新登录',
        });
      } else {
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      }
    });
};
export const useHttp = () => {
  const { user } = useAuth();
  // 类型别名
  //utility type用法:给泛型传入一个其它类型,然后utility type对这个类型进行某种操作
  //Parameters 相当于typr ??描述一个对象类型,
  // <typeof 把后面属性类型提取出来>然后整个代表这个变量类型
  return ([endpoint, config]: Parameters<typeof fetch>) =>
    fetch(endpoint, { ...config, token: user?.token });
};

// ----------------------------------------------------------------
// type Preson = {
//   name: string;
//   age: number;
// };
// const xiaoMing: Partial<Preson> = {};
// // const shenMiRen: Omit<Preson, 'name'> = { age: 21 }; //第一个值代表提取出来的类型,第二属性是删除的类型内的属性
// const shenMiRen: Omit<Preson, 'name' | 'age'> = {}; //第一个值代表提取出来的类型,第二属性是删除的类型内的属性,可以加 | 联合类型,把想要删除的都删除掉

// type Partial<T> = {
//   //底层实现
//   //此处的keyof 就是把对象类型T里面的键提取出来形成联合类型,P是临时定义的新的泛型
//   // P是新的泛型in(遍历)出已提取出来的整个联合类型 ?就是遍历出来后面加可选性质,T[P]就是 值
//   [P in keyof T]: T[P];
// };

// type PersonOnlyName = Pick<Preson, 'name'>;
// type Pick<T, K extends keyof T> = { [P in K]: T[P] };
