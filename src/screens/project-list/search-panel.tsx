import React from 'react';

export interface User {
  id: string;
  name: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = (props: SearchPanelProps) => {
  return (
    <form action="">
      <input
        type="text"
        value={props.param.name}
        onChange={(e) =>
          props.setParam({
            ...props.param,
            name: e.target.value,
          })
        }
      />
      <select
        onChange={(e) =>
          props.setParam({
            ...props.param,
            personId: e.target.value,
          })
        }
      >
        <option>负责人</option>
        {props.users.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};
