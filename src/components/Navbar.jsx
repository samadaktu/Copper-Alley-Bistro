import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f6]/95 backdrop-blur border-b border-[#d8c3b4]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <NavLink className="text-xl sm:text-2xl font-serif font-bold text-[#1c1c1a] leading-none" to="/">Copper Alley Bistro</NavLink>
        <div className="hidden md:flex items-center gap-5 lg:gap-7 font-serif italic tracking-tight">
          <NavLink className={({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-[#894d0d] border-b border-[#894d0d] pb-1' : 'text-[#5f5e5e] hover:text-[#894d0d]'}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-[#894d0d] border-b border-[#894d0d] pb-1' : 'text-[#5f5e5e] hover:text-[#894d0d]'}`} to="/menu">Menu</NavLink>
          <NavLink className={({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-[#894d0d] border-b border-[#894d0d] pb-1' : 'text-[#5f5e5e] hover:text-[#894d0d]'}`} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-[#894d0d] border-b border-[#894d0d] pb-1' : 'text-[#5f5e5e] hover:text-[#894d0d]'}`} to="/testimonials">Testimonials</NavLink>
          <NavLink className={({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-[#894d0d] border-b border-[#894d0d] pb-1' : 'text-[#5f5e5e] hover:text-[#894d0d]'}`} to="/contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-4">
          {/* Cart Toggle */}
          <button 
            onClick={toggleCart} 
            className="relative text-[#5f5e5e] hover:text-[#894d0d] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined">shopping_basket</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans not-italic border border-[#fcf9f6]">
                {cartCount}
              </span>
            )}
          </button>
          
          <NavLink className="hidden sm:inline-flex bg-primary text-on-primary px-4 py-2 rounded-md text-sm font-medium transition-all active:scale-95 duration-150" to="/book">Book a Table</NavLink>
          <button 
            aria-controls="mobile-menu" 
            aria-expanded={isMobileMenuOpen} 
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-outline-variant text-on-surface" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            type="button"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-[#fcf9f6]" id="mobile-menu">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-3 text-sm font-medium">
            <NavLink className="px-3 py-2 rounded-md bg-surface-container-low text-on-surface" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink className="px-3 py-2 rounded-md bg-surface-container-low text-on-surface" to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</NavLink>
            <NavLink className="px-3 py-2 rounded-md bg-surface-container-low text-on-surface" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
            <NavLink className="px-3 py-2 rounded-md bg-surface-container-low text-on-surface" to="/testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</NavLink>
            <NavLink className="px-3 py-2 rounded-md bg-surface-container-low text-on-surface" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            <NavLink className="col-span-2 px-3 py-2 rounded-md bg-primary text-on-primary text-center" to="/book" onClick={() => setIsMobileMenuOpen(false)}>Book a Table</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
