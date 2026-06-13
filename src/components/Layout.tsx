import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
 
const Layout = () => (
  <div className="min-h-screen bg-bg flex flex-col">
    <Navbar />
    <main className="pt-16 flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);
 
export default Layout;