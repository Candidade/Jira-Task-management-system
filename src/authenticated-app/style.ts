import styled from '@emotion/styled';
import { Row } from '../components/Lib';

//grid和flex 各自的应用场景
//1.要考虑是 一维布局还是 二维布局
// 一般来说一维布局用flex,二维布局用grid
//从内容出发用flex,你有一组内容(数量一般不固定),希望均匀分布在容器中,由内容自己的大小决定占用的空间
// 从布局出发用grid,先规划网格,然后把元素填充

export const Header = styled(Row)`
  padding: 3.9rem 3.3rem;
  box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
export const HeaderLeft = styled(Row)``;
