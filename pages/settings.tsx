import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SettingPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
};

export default SettingPage;