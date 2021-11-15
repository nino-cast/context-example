import type { NextPage } from 'next';
import UserCard from '../components/UserCard';

const Home: NextPage = () => {
  return (
    <div className="border-blue-600 border-4 p-4">
      <main>
        <h1>トップページ</h1>
        <UserCard />
      </main>
    </div>
  );
};

export default Home;
