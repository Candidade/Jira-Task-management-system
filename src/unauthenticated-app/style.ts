import styled from '@emotion/styled';
import { Card } from 'antd';
import logoImg from '../assets/logo.svg';
import leftImg from '../assets/left.svg';
import rightImg from '../assets/right.svg';
export const Header = styled.div`
  width: 100%;
  padding: 5rem 0;
  background: url(${logoImg}) no-repeat center;
  background-size: 10rem;
`;

export const Title = styled.h2`
  padding: 2.3rem 0 1rem 0;
  color: rgba(94, 108, 132, 0.6);
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${leftImg}) no-repeat left bottom,
    url(${rightImg}) no-repeat right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem);
  background-attachment: fixed; //背景图片跟随滑动
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  button {
    width: 80%;
  }
`;
export const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box; //（包含了padding和border，设置两者不会撑开盒子，盒子大小不会改变）
  box-shadow: 0 0 0.1rem rgba(0, 25, 25);
  text-align: center;
`;
