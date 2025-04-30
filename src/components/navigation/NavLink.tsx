import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => (
  <Link
    to={to}
    className={`text-lg transition-colors hover:text-blue-400 ${active ? 'text-blue-400' : 'text-white'}`}
  >
    {children}
  </Link>
);

export default NavLink;