import Avatar from '../components/Avatar';
import { User } from '../types/User';

const Header = ({ user }: { user: User }) => {
  return (
    <div className="p-4 border-b flex justify-between items-center">
      <h1>Context Example</h1>
      <Avatar user={user} />
    </div>
  );
};

export default Header;
