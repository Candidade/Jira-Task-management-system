import { useEffect } from 'react';

import { cleanObject } from './tool';
import { useAsync } from './Uses/use.async';
import { Project } from '../screens/project-list/List';
import { useHttp } from '../__server/Fetch';

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...states } = useAsync<Project[]>();

  useEffect(() => {
    run(client(['projects', { data: cleanObject(param || {}) }]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
  return states;
};
