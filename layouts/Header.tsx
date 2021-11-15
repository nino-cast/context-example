import Avatar from '../components/Avatar';

const Header = () => {
  return (
    <div className="p-4 border-2 mb-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">Context Example</h1>
      <Avatar />
    </div>
  );
};

export default Header;
