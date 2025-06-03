import { Outlet } from 'react-router-dom';
import SettingsMenu from './ui/SettingsMenu';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[--base] font-inter relative smooth-scroll">
      <SettingsMenu />
      <main>
        <div
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;