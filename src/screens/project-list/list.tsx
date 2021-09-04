import { User } from './search-panel';
interface Project {
  id: string;
  name: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{users.find((key) => key.id === item.id)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
