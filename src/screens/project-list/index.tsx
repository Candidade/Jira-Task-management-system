import React, { useEffect, useState } from 'react';

import { axios } from '../../__server/axios';
// import qs from 'qs';

import { cleanObject, useDebounce } from '../../__tool';
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

  useEffect(() => {
    axios({ url: 'http://localhost:8080/users', method: 'GET' }).then(
      (response: any) => {
        // console.log(response);

        const { data, message } = response;
        if (message === 'OK') {
          setUsers(data);
        }
      }
    );
  }, []);
  useEffect(() => {
    axios({
      // url: `http://localhost:8080/projects?${qs.stringify(cleanObject(debounceParam))}`,
      url: 'http://localhost:8080/projects',
      method: 'GET',
      params: cleanObject(debounceParam),
    }).then((response: any) => {
      console.log(response);

      const { data, message } = response;
      if (message === 'OK') {
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
