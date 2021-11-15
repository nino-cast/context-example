import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '../layouts/Layout';
import { UserProvider } from '../providers/UserProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
