import React from 'react';
import { Link } from 'react-router-dom';
import { testimonialData } from '../data/testimonialData';

export default function Testimonials() {
  return (
    <main className="pt-24 min-h-screen bg-surface">
      {/* Header */}
      <section className="px-8 pt-16 pb-12 max-w-4xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-5xl mb-6">workspace_premium</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-6 text-on-surface">Guest Stories</h1>
        <p className="text-xl text-secondary font-body leading-relaxed">
          For over two decades, we've had the privilege of hosting Dublin's most memorable evenings. Here is what our guests have to say.
        </p>
      </section>

      {/* Google Review Summary Widget Simulation */}
      <section className="max-w-md mx-auto px-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-container flex items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl font-bold text-[#202124]">4.5</span>
              <div className="flex text-[#fbbc04] text-xl">
                ★<span className="tracking-tighter">★</span><span className="tracking-tighter">★</span><span className="tracking-tighter">★</span><span style={{ clipPath: 'inset(0 50% 0 0)' }}>★</span>
              </div>
            </div>
            <a href="#" className="text-sm text-[#1a73e8] hover:underline font-medium">1,245 Google reviews</a>
          </div>
          <div className="w-12 h-12 flex-shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="max-w-6xl mx-auto px-8 mb-24">
        <div className="bg-surface-container-low rounded-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
          {/* Decorative element */}
          <span className="material-symbols-outlined absolute -top-10 -left-10 text-[200px] text-surface-container-high/50 -z-0">format_quote</span>
          
          <div className="w-full md:w-1/3 relative z-10">
             <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-surface">
               <img className="w-full h-full object-cover" alt="Couple laughing over dinner at Copper Alley Bistro with wine glasses" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600" />
             </div>
          </div>
          
          <div className="w-full md:w-2/3 relative z-10 space-y-6">
            <div className="flex text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <h3 className="text-3xl font-serif font-bold leading-tight">"The perfect anniversary dinner. The staff went above and beyond."</h3>
            <p className="text-lg text-secondary leading-relaxed">
              We celebrated our 10th anniversary here, and the team made it incredibly special. The ambiance is so romantic with the copper details and dim lighting. The Dry-Aged Sirloin was cooked to absolute perfection. 
            </p>
            <div className="pt-4 border-t border-surface-container-high/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Portrait of Emma and James" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" />
               </div>
              <div>
                <p className="font-bold">Emma & James T.</p>
                <p className="text-sm text-secondary">Belfast, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Review Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {testimonialData.map((t, idx) => (
            <div key={idx} className="bg-white p-6 mb-6 rounded-2xl border border-[#ebebeb] hover:shadow-lg transition-shadow break-inside-avoid shadow-sm text-left font-sans">
              
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-lg shrink-0" 
                  style={{ backgroundColor: `hsl(${(idx * 47) % 360}, 70%, 45%)` }}
                >
                  {t.name.charAt(0).toUpperCase()}
                </div>
                
                <div className="flex-1">
                  <div className="font-medium text-[15px] -mb-0.5 text-[#202124]">{t.name}</div>
                  <div className="text-[12px] text-[#70757a]">
                    {t.rating >= 4 && idx % 3 === 0 ? "Local Guide · " : ""}
                    {Math.floor(Math.random() * 6) + 1} months ago
                  </div>
                </div>

                <div className="w-5 h-5 shrink-0 opacity-80" title="Google Review">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    <path fill="none" d="M0 0h48v48H0z"/>
                  </svg>
                </div>
              </div>

              <div className="flex text-[#fbbc04] text-[15px] mb-2 tracking-tighter">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < t.rating ? '★' : <span className="text-[#e8eaed]">★</span>}</span>
                ))}
              </div>

              <p className="text-[#3c4043] text-[14px] leading-[1.6]">
                {t.review}
              </p>
              
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center border-t border-surface-container-high pt-12">
          <a href="#" className="inline-flex flex-col items-center gap-2 text-primary font-bold hover:text-primary-container transition-colors group">
            <span className="bg-primary/10 text-primary-container px-6 py-3 rounded-full group-hover:bg-primary/20 transition-colors flex items-center gap-3">
              Read all highly rated reviews on Google
              <span className="material-symbols-outlined text-sm shrink-0">open_in_new</span>
            </span>
          </a>
        </div>
      </section>

      {/* CTA */}
       <section className="border-t border-surface-container-high py-24 bg-surface-container-low text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">Create Your Own Story</h2>
          <p className="text-secondary mb-10">We'd love to welcome you to our table.</p>
          <Link to="/book">
            <button className="copper-glow text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all active:scale-95">Book Now</button>
          </Link>
        </div>
       </section>
    </main>
  );
}
