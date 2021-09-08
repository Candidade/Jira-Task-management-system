import React from 'react';

import { Table, TableProps } from 'antd';
import dayjs from 'dayjs';

import { User } from '../Search-anel';
export interface Project {
  id: string;
  name: string;
  peronId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
  users: User[];
}

export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      rowKey={'id'}
      pagination={false}
      // dataSource={list}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '部门',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          render(item) {
            return (
              <span key={item.name}>
                {users.find((key) => key.id === item.id)?.name || '未知'}
              </span>
            );
          },
        },
        {
          title: '创建时间',
          render(item) {
            return (
              <span>
                {item.created ? dayjs(item.created).format('YYYY-MM-DD') : '无'}
              </span>
            );
          },
        },
      ]}
      {...props}
    />
  );
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>名称</th>
  //         <th>负责人</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {list.map((item) => (
  //         <tr key={item.name}>
  //           <td>{item.name}</td>
  //           <td>{users.find((key) => key.id === item.id)?.name || '未知'}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );
};
