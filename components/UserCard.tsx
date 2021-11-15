import { User } from '../types/User';
import Avatar from './Avatar';

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="shadow rounded bg-white p-10">
      <Avatar user={user} />
    </div>
  );
};

export default UserCard;
