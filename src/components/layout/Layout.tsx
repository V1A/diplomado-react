import React, { ReactNode } from 'react';
import Menu from './Menu';

interface LayoutProps { children: ReactNode; }

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <Menu />
    <main className="flex-1 p-6">{children}</main>
  </div>
);

export default Layout;