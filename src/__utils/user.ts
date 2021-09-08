import { useEffect } from 'react';
import { useAsync } from './Uses/use.async';
import { Project } from '../screens/project-list/List';
import { useHttp } from '../__server/Fetch';
import { cleanObject } from './tool';
import { User } from '../screens/project-list/Search-anel';

export const useUser = (params?: Partial<User>) => {
  const client = useHttp();
  const { run, ...states } = useAsync<Project[]>();
  useEffect(() => {
    run(client(['projects', { data: cleanObject(params || {}) }]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return states;
};
