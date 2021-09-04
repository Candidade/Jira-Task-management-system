import { useEffect, useState } from 'react';

import axios from 'axios';
import qs from 'qs';

import { cleanObject, useMount, useDebounce } from '../../tool';
import { List } from './list';
import { SearchPanel } from './search-panel';

export const ReojectListSearch = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 200);

  useMount(() => {
    axios({ url: 'http://localhost:8080/users' }).then((response) => {
      const { data, statusText } = response;
      if (statusText === 'OK') {
        setUsers(data);
      }
    });
  });
  useEffect(() => {
    axios({
      url: `http://localhost:8080/projects?${qs.stringify(
        cleanObject(debounceParam)
      )}`,
    }).then((response) => {
      const { data, statusText } = response;
      if (statusText === 'OK') {
        setList(data);
      }
    });
  }, [debounceParam]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
