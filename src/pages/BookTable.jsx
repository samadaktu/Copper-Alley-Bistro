import React, { useState } from 'react';
import { useBookings } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';

export default function BookTable() {
  const { addBooking } = useBookings();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    guests: 2,
    date: '',
    time: '',
    fullName: '',
    email: '',
    phone: '',
    requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      addBooking(formData);
      alert('Reservation submitted successfully! We will contact you soon.');
      navigate('/');
    } catch (err) {
      alert('Failed to submit reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-[88px] min-h-screen bg-surface flex flex-col md:flex-row">
      {/* Left Side: Image/Context */}
      <section className="w-full md:w-1/2 h-[400px] md:h-[calc(100vh-88px)] relative sticky top-[88px]">
        <img className="absolute inset-0 w-full h-full object-cover grayscale" alt="Elegant dining table setting at Copper Alley Bistro with polished wine glasses, folded linen napkins, and flickering candlelight against a bokeh background of an old stone wall" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Reserve Your<br/>Experience</h2>
          <p className="text-white/80 text-lg max-w-md">Join us at Copper Alley for an unforgettable evening of culinary craftsmanship. We hold tables for 15 minutes past reservation time.</p>
        </div>
      </section>

      {/* Right Side: Form */}
      <section className="w-full md:w-1/2 bg-surface p-8 md:p-16 lg:p-24 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-8 text-on-surface">Find a Table</h3>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Guests */}
            <div>
              <label className="block text-sm font-bold text-[#5f5e5e] mb-2 uppercase tracking-wide">Party Size</label>
              <div className="flex items-center border border-[#d1cdca] rounded-xl overflow-hidden bg-[#fcf9f6] transition-all focus-within:ring-2 focus-within:ring-[#894d0d]/50 focus-within:border-[#894d0d]">
                <button type="button" onClick={() => setFormData(p => ({...p, guests: Math.max(1, p.guests - 1)}))} className="px-4 py-3 hover:bg-[#894d0d]/10 transition-colors text-[#894d0d] material-symbols-outlined">remove</button>
                <div className="flex-1 text-center font-bold text-lg text-[#202124]">{formData.guests} Guests</div>
                <button type="button" onClick={() => setFormData(p => ({...p, guests: Math.min(12, p.guests + 1)}))} className="px-4 py-3 hover:bg-[#894d0d]/10 transition-colors text-[#894d0d] material-symbols-outlined">add</button>
              </div>
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#5f5e5e] mb-2 uppercase tracking-wide">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full border border-[#d1cdca] rounded-xl px-4 py-3 bg-[#fcf9f6] text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData(p => ({...p, date: e.target.value}))}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#5f5e5e] mb-2 uppercase tracking-wide">Time</label>
                <select 
                  required
                  className="w-full border border-[#d1cdca] rounded-xl px-4 py-3 bg-[#fcf9f6] text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all appearance-none cursor-pointer"
                  value={formData.time}
                  onChange={(e) => setFormData(p => ({...p, time: e.target.value}))}
                >
                  <option value="" disabled>Select time</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="pt-6 border-t border-[#ebebeb] mt-8">
              <h4 className="text-xl font-serif font-bold mb-6 text-[#202124]">Contact Details</h4>
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name" 
                    className="w-full border border-[#d1cdca] rounded-xl px-4 py-3 bg-[#fcf9f6] focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all text-[#202124]"
                    value={formData.fullName}
                    onChange={(e) => setFormData(p => ({...p, fullName: e.target.value}))}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address" 
                    className="w-full border border-[#d1cdca] rounded-xl px-4 py-3 bg-[#fcf9f6] focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all text-[#202124]"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({...p, email: e.target.value}))}
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number" 
                    className="w-full border border-[#d1cdca] rounded-xl px-4 py-3 bg-[#fcf9f6] focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all text-[#202124]"
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({...p, phone: e.target.value}))}
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Special Requests (Allergies, Occasion, etc.)" 
                    rows="3" 
                    className="w-full border border-[#d1cdca] rounded-xl px-4 py-3 bg-[#fcf9f6] focus:outline-none focus:ring-2 focus:ring-[#894d0d]/50 focus:border-[#894d0d] transition-all resize-none text-[#202124]"
                    value={formData.requests}
                    onChange={(e) => setFormData(p => ({...p, requests: e.target.value}))}
                  ></textarea>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full copper-glow text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all active:scale-95 mt-8 disabled:opacity-50"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
            </button>
            <p className="text-center text-xs text-secondary mt-4">By booking, you agree to our cancellation policy.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
