import React from 'react';

import { Dropdown, Menu } from 'antd';
//以svg 形式渲染图片,as 后面名称开头要大写,以组件形式渲染
import { ReactComponent as SoftwareLogo } from '../assets/software-logo.svg';
import { Header, HeaderLeft } from './style';

import { useAuth } from '../context/auth-context';
import { ReojectListSearch } from '../screens/project-list';

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color={'#32a17c'} />
          <h2>用户</h2>
          <h2>项目</h2>
        </HeaderLeft>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="999">
                <a href={':javascript'} onClick={logout}>
                  登出
                </a>
              </Menu.Item>
            </Menu>
          }
        >
          <a href={':'} type={'link'} onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
          </a>
        </Dropdown>
      </Header>
      <ReojectListSearch />
    </div>
  );
};
