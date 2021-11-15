import { ReactNode } from 'react';
import { User } from '../types/User';
import Header from './Header';

const Layout = ({ children, user }: { children: ReactNode; user: User }) => {
  return (
    <div className="m-4 p-4 border-2 border-pink-400">
      <Header user={user} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
