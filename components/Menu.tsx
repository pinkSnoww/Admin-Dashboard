// import { MenuItem } from './MenuItem';

interface MenuProps {
    isSettingAllowed: boolean;
  }
  
  export const Menu: React.FC<MenuProps> = ({ isSettingAllowed }) => {
    return (
      <nav className="bg-white shadow-md">
        <ul className="flex">
          {/* <MenuItem href="/list" isAllowed={true}>
            List
          </MenuItem>
          <MenuItem href="/setting" isAllowed={isSettingAllowed}>
            Setting
          </MenuItem> */}
        </ul>
      </nav>
    );
  };