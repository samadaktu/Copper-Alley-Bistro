import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#f6f3f0] dark:bg-[#1c1c1a] w-full py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <div className="text-lg font-serif font-bold text-[#1c1c1a] dark:text-[#fcf9f6] mb-4">
            Copper Alley Bistro
          </div>
          <p className="text-[#5f5e5e] dark:text-[#eae8e5] font-sans text-sm tracking-wide leading-relaxed">
            Dublin's premier destination for Irish-European fusion. Experience the heritage of Temple Bar through modern culinary craft.
          </p>
        </div>
        <div className="space-y-2">
          <h6 className="text-[#894d0d] font-bold uppercase text-xs tracking-widest mb-4">Service Hours</h6>
          <p className="text-[#5f5e5e] dark:text-[#eae8e5] font-sans text-sm tracking-wide">Breakfast: 7:30–11:45</p>
          <p className="text-[#5f5e5e] dark:text-[#eae8e5] font-sans text-sm tracking-wide">Lunch: 12–4</p>
          <p className="text-[#5f5e5e] dark:text-[#eae8e5] font-sans text-sm tracking-wide">Dinner: 4–10</p>
        </div>
        <div>
          <h6 className="text-[#894d0d] font-bold uppercase text-xs tracking-widest mb-4">Visit Us</h6>
          <p className="text-[#5f5e5e] dark:text-[#eae8e5] font-sans text-sm tracking-wide mb-6">
            © 2024 Copper Alley Bistro. 2 Lord Edward St, Temple Bar, Dublin.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a className="text-[#5f5e5e] hover:text-[#894d0d] transition-colors" href="https://maps.google.com/?q=2+Lord+Edward+St,+Dublin+2" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined">public</span></a>
            <a className="text-[#5f5e5e] hover:text-[#894d0d] transition-colors" href="mailto:reservations@copperalley.ie"><span className="material-symbols-outlined">alternate_email</span></a>
            <NavLink className="text-[#5f5e5e] hover:text-[#894d0d] transition-colors" to="/testimonials"><span className="material-symbols-outlined">share_reviews</span></NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
