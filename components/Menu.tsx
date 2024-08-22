import { MenuItem } from './menuItem';

interface MenuProps {
  isSettingAllowed: boolean;
}

export const Menu: React.FC<MenuProps> = ({ isSettingAllowed }) => {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex">
        <li>
          <MenuItem href="/list" isAllowed={true}>
            List
          </MenuItem>
        </li>
        <li>
          <MenuItem href="/setting" isAllowed={isSettingAllowed}>
            Setting
          </MenuItem>
        </li>
      </ul>
    </nav>
  );
};