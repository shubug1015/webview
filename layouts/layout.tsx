import Loader from '@components/loader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // 로더
  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
    return () => {
      router.events.off('routeChangeStart', () => setIsLoading(true));
      router.events.on('routeChangeComplete', () => setIsLoading(false));
    };
  }, []);

  return (
    <div className='w-screen'>
      {children}
      {isLoading && <Loader />}
    </div>
  );
}
