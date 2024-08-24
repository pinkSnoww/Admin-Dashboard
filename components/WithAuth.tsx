
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>,
  requiresAccess: boolean = false
) {
  return function WithAuthComponent(props: P) {
    const router = useRouter();
    const { isAuthenticated, hasAccess } = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
      } else if (requiresAccess && !hasAccess) {
        router.push('/unauthorized');
      }
    }, [isAuthenticated, hasAccess, router, requiresAccess]);

    if (!isAuthenticated || (requiresAccess && !hasAccess)) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}