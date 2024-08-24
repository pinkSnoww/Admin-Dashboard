import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';


interface MenuProps {
    isSettingAllowed: boolean;
  }
  
  export const Menu: React.FC<MenuProps> = ({ isSettingAllowed }) => {
    const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user && user.isSettingAllowed && (
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        )}
      </ul>
    </nav>
  );
  };

 
