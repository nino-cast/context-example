import type { NextPage } from 'next';
import Head from 'next/head';
import UserCard from '../components/UserCard';
import styles from '../styles/Home.module.css';
import { User } from '../types/User';

const Home: NextPage<{
  user: User;
}> = ({ user }: { user: User }) => {
  return (
    <div className="border-blue-600 border-4 p-4">
      <main>
        <h1>トップページ</h1>
        <UserCard user={user} />
      </main>
    </div>
  );
};

export default Home;
