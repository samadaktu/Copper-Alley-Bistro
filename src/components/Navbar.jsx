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
        <div className="md:hidden border-t border-outline-variant bg-[#fcf9f6] animate-in fade-in slide-in-from-top-2 duration-300" id="mobile-menu">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base font-medium">
            <NavLink className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-primary/10 transition-colors flex items-center gap-3" to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary text-xl">home</span>
              Home
            </NavLink>
            <NavLink className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-primary/10 transition-colors flex items-center gap-3" to="/menu" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary text-xl">restaurant_menu</span>
              Menu
            </NavLink>
            <NavLink className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-primary/10 transition-colors flex items-center gap-3" to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary text-xl">auto_stories</span>
              About
            </NavLink>
            <NavLink className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-primary/10 transition-colors flex items-center gap-3" to="/testimonials" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary text-xl">stars</span>
              Reviews
            </NavLink>
            <NavLink className="px-4 py-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-primary/10 transition-colors flex items-center gap-3" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-primary text-xl">contact_support</span>
              Contact
            </NavLink>
            <NavLink className="sm:col-span-2 px-4 py-4 rounded-xl bg-primary text-on-primary text-center font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2" to="/book" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined">event_available</span>
              Book a Table
            </NavLink>
          </div>
        </div>
      )}

    </header>
  );
}
