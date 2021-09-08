import React, { useState } from 'react';

import { Container } from './style';

import { useDebounce } from '../../__utils/tool';
import { List } from './List';
import { SearchPanel } from './Search-anel';
import { useProjects } from '../../__utils/project';
import { useUser } from '../../__utils/user';

export const ReojectListSearch = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  const debounceParam = useDebounce(param, 200);
  const { isLoading, error, data: list } = useProjects(debounceParam);
  const { data: users } = useUser();

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};
