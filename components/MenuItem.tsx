import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuItemProps {
  href: string;
  children: ReactNode;
  isAllowed: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ href, children, isAllowed }) => {
  if (!isAllowed) return null;

  return (
    <Link legacyBehavior href={href}>
      {/* <a className="px-4 py-2 text-gray-700 hover:bg-gray-100"> */}
        {children}
        {/* </a> */}
    </Link>
  );
};