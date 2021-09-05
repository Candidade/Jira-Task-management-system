interface AxiosData {
  method: string;
  url: string;
  params?: any;
  data?: any;
}

export function axios({ method, url, params, data }: AxiosData) {
  method = method.toUpperCase();
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    //2.初始化并处理 params拼接
    let str = '';
    for (const key in params) {
      str += `${key}=${params[key]}&`;
    }
    str = str.slice(0, -1);
    xhr.open(method, `${url}?${str}`);

    //3.发送
    if (
      method === 'POST' ||
      method === 'PUT' ||
      method === 'PATCH' ||
      method === 'DELETE'
    ) {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }

    //4.处理响应
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            data: xhr.response,
          });
        } else {
          reject('请求失败');
        }
      }
    };
  });
}
axios.get = function (url: string, paramobj: any) {
  return axios(Object.assign(paramobj, { method: 'GET', url: url }));
};
axios.post = function (url: string, paramobj: any) {
  return axios(Object.assign(paramobj, { method: 'POST', url: url }));
};
axios.put = function (url: string, paramobj: any) {
  return axios(Object.assign(paramobj, { method: 'PUT', url: url }));
};
axios.patch = function (url: string, paramobj: any) {
  return axios(Object.assign(paramobj, { method: 'PATCH', url: url }));
};
axios.delete = function (url: string, paramobj: any) {
  return axios(Object.assign(paramobj, { method: 'DELETE', url: url }));
};
