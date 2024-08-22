import { Menu } from '../components/Menu';
import { withAuth } from '../components/WithAuth';

interface SettingProps {}

function Setting(props: SettingProps) {
  return (
    <div>
      <Menu isSettingAllowed={true} />
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      {/* Add your settings content here */}
    </div>
  );
}

export default withAuth(Setting, false);