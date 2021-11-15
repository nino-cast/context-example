import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import { User } from '../types/User';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({
    name: 'にの',
    photoURL:
      'https://pbs.twimg.com/profile_images/1457491391291228160/j2qDcCYu_400x400.jpg',
  });

  return (
    <Layout user={user}>
      <Component user={user} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
