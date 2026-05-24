import { Outlet } from 'react-router-dom';
import SettingsMenu from './ui/SettingsMenu';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[--base] font-inter relative smooth-scroll">
      <SettingsMenu />
      <main>
        <div className='ml-20'
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;