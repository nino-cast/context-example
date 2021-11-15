import { createContext, ReactNode, useContext } from 'react';
import { User } from '../types/User';

const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const user = {
    name: 'にの',
    photoURL:
      'https://pbs.twimg.com/profile_images/1457491391291228160/j2qDcCYu_400x400.jpg',
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
