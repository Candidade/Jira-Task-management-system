import React from 'react';

import { Button, Form, Input } from 'antd';

import { useAuth } from '../../context/auth-context';
import { useAsync } from '../../__utils/Uses/use.async';

export const RegisterScreen = ({
  oError,
}: {
  oError: (error: Error) => void;
}) => {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });

  const handleSumbit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      oError(new Error('请确认两次输入的密码相同'));
      return;
    }
    try {
      await run(register(values));
    } catch (e: any) {
      oError(e);
    }
  };
  return (
    <Form onFinish={handleSumbit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item
        name="cpassword"
        rules={[{ required: true, message: '请确认密码!' }]}
      >
        <Input placeholder="确认密码" type="password" id="cpassword" />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} htmlType="submit" type="primary">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
