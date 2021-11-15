import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import { User } from '../types/User';

function MyApp({ Component, pageProps }: AppProps) {
  // 実際にはサーバーから取得すると仮定
  const user: User = {
    name: 'にの',
    photoURL:
      'https://pbs.twimg.com/profile_images/1457491391291228160/j2qDcCYu_400x400.jpg',
  };

  return (
    <Layout user={user}>
      <Component user={user} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
