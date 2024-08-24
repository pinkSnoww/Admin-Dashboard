import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>,
  requireAdmin: boolean = false
) {
  return function WithAuthComponent(props: P) {
    const router = useRouter();
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
      } else if (requireAdmin && (!user || user.role !== 'admin')) {
        router.push('/unauthorized');
      }
    }, [isAuthenticated, user, router, requireAdmin]);

    if (!isAuthenticated || (requireAdmin && (!user || user.role !== 'admin'))) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}