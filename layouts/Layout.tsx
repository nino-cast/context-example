import { ReactNode } from 'react';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="m-4 p-4 border-2 border-pink-400">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
