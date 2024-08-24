import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/global.css';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
const queryClient = new QueryClient();
const HomePage = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
    <DefaultLayout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </DefaultLayout>
  </AuthProvider>
  )
};

export default HomePage;