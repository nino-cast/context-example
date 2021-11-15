import { User } from '../types/User';
import Avatar from './Avatar';

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="border-2 border-green-400 shadow rounded bg-white p-4">
      <h2 className="font-bold text-lg">ユーザーカード</h2>
      <Avatar user={user} />
    </div>
  );
};

export default UserCard;
