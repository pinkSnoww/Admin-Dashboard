import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

export function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>,
  isAllowed: boolean
) {
  return function WithAuthComponent(props: P) {
    const router = useRouter();

    useEffect(() => {
      if (!isAllowed) {
        router.push('/');
      }
    }, [isAllowed, router]);

    if (!isAllowed) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}