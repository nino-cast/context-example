import Avatar from '../components/Avatar';
import { User } from '../types/User';

const Header = ({ user }: { user: User }) => {
  return (
    <div className="p-4 border-2 mb-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">Context Example</h1>
      <Avatar user={user} />
    </div>
  );
};

export default Header;
