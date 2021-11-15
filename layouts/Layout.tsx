import { ReactNode } from 'react';
import { User } from '../types/User';
import Header from './Header';

const Layout = ({ children, user }: { children: ReactNode; user: User }) => {
  return (
    <div>
      <Header user={user} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
