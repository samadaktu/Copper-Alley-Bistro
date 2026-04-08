import React from 'react';

export default function Contact() {
  return (
    <main className="pt-[88px] min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] min-h-[250px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200" 
          alt="Copper Alley Bistro ambiance" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4]"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold italic text-white mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">We'd love to hear from you. Reach out for private dining, events, or inquiries.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 lg:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-on-surface">Contact Information</h2>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                Located in the heart of Dublin, just steps away from Christ Church Cathedral. Whether you have a question about our menu, dietary requirements, or wish to book a private event, our team is here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">location_on</span>
                <h3 className="font-bold text-xl mb-2">Location</h3>
                <p className="text-secondary">
                  Ifield St., <br />
                  Temple Bar, Dublin 8, <br />
                  Ireland
                </p>
              </div>
              
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">schedule</span>
                <h3 className="font-bold text-xl mb-2">Hours</h3>
                <p className="text-secondary mb-1">Mon - Sun: 8am - 10pm</p>
                <p className="text-secondary">Breakfast / Brunch / Dinner</p>
              </div>

              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">call</span>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <p className="text-secondary font-medium">+353 1 234 5678</p>
              </div>

              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">mail</span>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <p className="text-secondary font-medium hover:text-primary transition-colors cursor-pointer">hello@copperalley.ie</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#ebebeb] relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
             
             <h3 className="text-3xl font-serif font-bold mb-8 relative z-10 text-[#202124]">Send a Message</h3>
             
             <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#5f5e5e] uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full bg-[#fcf9f6] border border-[#d1cdca] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#5f5e5e] uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full bg-[#fcf9f6] border border-[#d1cdca] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#5f5e5e] uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-[#fcf9f6] border border-[#d1cdca] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#5f5e5e] uppercase tracking-wider">Subject</label>
                  <select className="w-full bg-[#fcf9f6] border border-[#d1cdca] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Private Events & Catering</option>
                    <option>Feedback</option>
                    <option>Careers</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#5f5e5e] uppercase tracking-wider">Message</label>
                  <textarea rows="4" className="w-full bg-[#fcf9f6] border border-[#d1cdca] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#894d0d] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#6e3c08] hover:shadow-xl transform hover:-translate-y-0.5 transition-all active:scale-[0.98] mt-4 flex justify-center items-center gap-2">
                  Send Message
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
             </form>
          </div>

        </div>

        {/* Interactive Google Map */}
        <div className="mt-20 h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-[#ebebeb] relative">
          <iframe 
            src="https://maps.google.com/maps?q=Copper+Alley+Bistro,+Dublin,+Ireland&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
