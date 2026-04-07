import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1a] text-[#fcf9f6] w-full pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-6 text-center md:text-left">
            <Link to="/" className="text-3xl font-serif font-bold italic tracking-tight hover:text-primary-fixed transition-colors">
              Copper Alley <span className="text-primary">Bistro</span>
            </Link>
            <p className="text-[#c8c6c5] font-sans text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Steeped in history and refined by modern culinary craft, we bring the heart of Dublin's heritage to your table.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="mailto:reservations@copperalley.ie" className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <NavLink to="/testimonials" className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-sm">stars</span>
              </NavLink>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-center md:text-left">
            <h6 className="text-[#894d0d] font-bold uppercase text-xs tracking-widest mb-8">Navigation</h6>
            <nav className="flex flex-col gap-4">
              <NavLink to="/" className="text-sm text-[#c8c6c5] hover:text-[#fcf9f6] transition-colors">Home</NavLink>
              <NavLink to="/menu" className="text-sm text-[#c8c6c5] hover:text-[#fcf9f6] transition-colors">Explore Menus</NavLink>
              <NavLink to="/about" className="text-sm text-[#c8c6c5] hover:text-[#fcf9f6] transition-colors">Our Story</NavLink>
              <NavLink to="/book" className="text-sm text-[#c8c6c5] hover:text-[#fcf9f6] transition-colors">Reservations</NavLink>
              <NavLink to="/contact" className="text-sm text-[#c8c6c5] hover:text-[#fcf9f6] transition-colors">Contact Us</NavLink>
            </nav>
          </div>

          {/* Service Hours */}
          <div className="text-center md:text-left">
            <h6 className="text-[#894d0d] font-bold uppercase text-xs tracking-widest mb-8">Opening Hours</h6>
            <div className="space-y-4">
              <div className="flex justify-between md:justify-start md:gap-8 items-center border-b border-outline/10 pb-2">
                <span className="text-xs text-[#857467] font-medium uppercase tracking-tighter">Mon - Thu</span>
                <span className="text-sm text-[#c8c6c5]">12:00 - 22:00</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8 items-center border-b border-outline/10 pb-2">
                <span className="text-xs text-[#857467] font-medium uppercase tracking-tighter">Fri - Sat</span>
                <span className="text-sm text-[#c8c6c5]">11:30 - 23:00</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8 items-center">
                <span className="text-xs text-[#857467] font-medium uppercase tracking-tighter">Sun</span>
                <span className="text-sm text-[#c8c6c5]">11:30 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h6 className="text-[#894d0d] font-bold uppercase text-xs tracking-widest mb-8">Locate Us</h6>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <address className="not-italic text-sm text-[#c8c6c5] leading-relaxed">
                  2 Lord Edward St, Temple Bar,<br />
                  Dublin, D02 X6P8
                </address>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                <span className="text-sm text-[#c8c6c5]">+353 (1) 555 0123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#5f5e5e] font-sans">
            &copy; {currentYear} Copper Alley Bistro. All rights reserved.
          </p>
          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-[#5f5e5e]">
            <p>
              Developed By <a href="https://technoalig.com" target="_blank" rel="noopener noreferrer" className="text-[#894d0d] font-bold hover:text-primary transition-colors">Techno Alig</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

