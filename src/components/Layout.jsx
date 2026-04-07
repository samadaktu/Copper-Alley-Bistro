import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from './CartSidebar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <CartSidebar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
