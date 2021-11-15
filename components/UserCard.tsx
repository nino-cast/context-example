import Avatar from './Avatar';

const UserCard = () => {
  return (
    <div className="border-2 border-green-400 shadow rounded bg-white p-4">
      <h2 className="font-bold text-lg">ユーザーカード</h2>
      <Avatar />
    </div>
  );
};

export default UserCard;
