import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="relative">
      <Link
        href="#"
        className="flex items-center gap-4"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {user?.name}
          </span>
          <span className="block text-xs">{user?.role}</span>
        </span>
        <img
          className="h-12 w-12 rounded-full"
          src="/images/user/user-01.png"
          alt="User"
        />
      </Link>

      {user && user.role === 'admin' && (
        <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                My Profile
              </Link>
            </li>
            {user.isSettingAllowed && (
              <li>
                <Link
                  href="/settings"
                  className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                >
                  Account Settings
                </Link>
              </li>
            )}
          </ul>
          <button
            className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            onClick={logout}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownUser;