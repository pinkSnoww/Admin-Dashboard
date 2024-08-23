// /pages/index.tsx
import Link from 'next/link';
import { Menu } from '../components/Menu';
import  topNavigation   from "../components/Navigation";
const HomePage = () => {
  return (
    <div>
      <topNavigation />
      <Menu isSettingAllowed={false} />
      <Link legacyBehavior href="/list">
        <a className="text-blue-500 hover:underline">Go to List</a>
      </Link>
    </div>
  );
};

export default HomePage;