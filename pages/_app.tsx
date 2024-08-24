// /pages/index.tsx
import Link from 'next/link';
import { Menu } from '../components/Menu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/global.css';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import ListPage from './list';
import { AppProps } from 'next/app';
const queryClient = new QueryClient();
const HomePage = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
     <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </DefaultLayout>
  );
};

export default HomePage;