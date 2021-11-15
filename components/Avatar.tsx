import React from 'react';
import { useUser } from '../providers/UserProvider';

const Avatar = () => {
  const user = useUser();

  return (
    <div className="border-2 border-green-400 inline-block">
      {user && (
        <img
          className="w-20 h-20 rounded-full overflow-hidden"
          src={user.photoURL}
          alt=""
        />
      )}
    </div>
  );
};

export default Avatar;
