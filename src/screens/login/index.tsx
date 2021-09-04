import { FormEvent } from 'react';
import axios from 'axios';
export const LoginScreen = () => {
  const login = (params: { username: string; password: string }) => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    }).then((response) => {
      console.log(response);
    });
    // axios({
    //   url: 'http://localhost:3001/login',
    //   method: 'POST',
    //   data: { username: params.username, password: params.password },
    // });
    // .then((response) => {
    // const { data, statusText } = response;
    // if (statusText === 'OK') {
    //   setUsers(data);
    // }
    // });
  };

  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password });
  };
  return (
    <form action="" onSubmit={handleSumbit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
