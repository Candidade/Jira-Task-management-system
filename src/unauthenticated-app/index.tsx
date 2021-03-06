import React, { useState } from 'react';

import { Header, Title, Background, Container, ShadowCard } from './style';

import { LoginScreen } from './login';
import { RegisterScreen } from './register';
import { Button, Divider, Typography } from 'antd';

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  return (
    <Container>
      <Background />
      <Header />
      <ShadowCard>
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {error ? (
          <Typography.Text type={'danger'}>{error.message}</Typography.Text>
        ) : null}
        {isRegister ? (
          <RegisterScreen oError={setError} />
        ) : (
          <LoginScreen oError={setError} />
        )}
        <Divider />
        <Button type={'link'} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已经有账号了?直接登录' : '没有账号?注册新账号'}
        </Button>
      </ShadowCard>
    </Container>
  );
};
