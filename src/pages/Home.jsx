import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
  };

  return (
    <main className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-50" alt="Luxurious dark wood restaurant interior with warm ambient lighting, copper accents, and elegantly set tables in a historic Dublin building" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=2000"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1a]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl text-surface-container-lowest leading-[1.1] mb-6 font-bold italic tracking-tight">
              Authentic Irish Dining <span className="block font-normal not-italic text-primary-fixed">Experience in Dublin</span>
            </h1>
            <p className="text-xl text-surface-variant mb-10 leading-relaxed font-light max-w-lg">
              Step into a haven of warmth where 13th-century heritage meets modern culinary artistry. Discover refined flavors and a cozy atmosphere in the heart of Temple Bar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book">
                <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2">
                  Book a Table
                  <span className="material-symbols-outlined">calendar_today</span>
                </button>
              </Link>
              <Link to="/order">
                <button className="bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 border border-surface-container-lowest/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                  Order Online
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="flex text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0.5" }}>star_half</span>
              </div>
              <div>
                <p className="font-bold text-lg">4.5 Stars</p>
                <p className="text-secondary text-sm">1000+ Verified Reviews</p>
              </div>
            </div>
            <div className="h-12 w-px bg-outline-variant hidden md:block"></div>
            <p className="text-on-surface font-serif italic text-2xl text-center">"Loved by locals & tourists alike"</p>
            <div className="h-12 w-px bg-outline-variant hidden md:block"></div>
            <div className="flex gap-10">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-1">restaurant</span>
                <span className="text-xs uppercase tracking-widest font-bold">Dine-In</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-1">takeout_dining</span>
                <span className="text-xs uppercase tracking-widest font-bold">Takeaway</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-bold mb-4">Signature Selections</h2>
              <p className="text-secondary max-w-md">Our most celebrated dishes, crafted from locally sourced Irish ingredients and seasonal produce.</p>
            </div>
            <Link to="/menu" className="text-primary font-bold border-b border-primary-container pb-1 hover:text-primary-container transition-colors">View Full Menu</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Dish Card 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden mb-6 rounded-xl aspect-[4/5] cursor-pointer">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Crispy golden Atlantic beer-bathed fish served with thick-cut triple-cooked chips, pea purée, and a wedge of lemon on a ceramic plate" src="https://images.unsplash.com/photo-1580476262798-badd96689d4c?auto=format&fit=crop&q=80&w=600"/>
                <button 
                  onClick={(e) => handleAddToCart(e, { id: 'm6', name: 'Atlantic Fish & Chips', price: 21, image: 'https://images.unsplash.com/photo-1580476262798-badd96689d4c?auto=format&fit=crop&q=80&w=600' })}
                  className="absolute bottom-6 right-6 bg-surface p-4 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container z-20">
                  <span className="material-symbols-outlined text-primary group-hover:text-primary">add_shopping_cart</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Atlantic Fish & Chips</h3>
                  <p className="text-secondary text-sm">Beer-bathed cod, mushy peas, tartare sauce</p>
                </div>
                <span className="text-primary font-bold text-xl">€21</span>
              </div>
            </div>
            {/* Dish Card 2 */}
            <div className="group relative">
              <div className="relative overflow-hidden mb-6 rounded-xl aspect-[4/5] cursor-pointer">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Rich dark beef stew with chunks of tender meat, carrots, and potatoes in a thick Guinness gravy served in a black cast iron pot" src="https://images.unsplash.com/photo-1514516875932-a55e2d1d0c2e?auto=format&fit=crop&q=80&w=600"/>
                <button 
                  onClick={(e) => handleAddToCart(e, { id: 'm4', name: 'Guinness Beef Stew', price: 19, image: 'https://images.unsplash.com/photo-1514516875932-a55e2d1d0c2e?auto=format&fit=crop&q=80&w=600' })}
                  className="absolute bottom-6 right-6 bg-surface p-4 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container z-20">
                  <span className="material-symbols-outlined text-primary group-hover:text-primary">add_shopping_cart</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Guinness Beef Stew</h3>
                  <p className="text-secondary text-sm">Slow-braised brisket, root vegetables, stout reduction</p>
                </div>
                <span className="text-primary font-bold text-xl">€19</span>
              </div>
            </div>
            {/* Dish Card 3 */}
            <div className="group relative">
              <div className="relative overflow-hidden mb-6 rounded-xl aspect-[4/5] cursor-pointer">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Premium dry-aged Irish sirloin steak cooked medium-rare, served with peppercorn sauce and grilled portobello mushroom" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=600"/>
                <button 
                  onClick={(e) => handleAddToCart(e, { id: 'm2', name: 'Dry-Aged Sirloin', price: 32, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=600' })}
                  className="absolute bottom-6 right-6 bg-surface p-4 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container z-20">
                  <span className="material-symbols-outlined text-primary group-hover:text-primary">add_shopping_cart</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Dry-Aged Sirloin</h3>
                  <p className="text-secondary text-sm">10oz Tipperary beef, peppercorn cream, rustic fries</p>
                </div>
                <span className="text-primary font-bold text-xl">€32</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview (Asymmetric) */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-high relative z-10">
              <img className="w-full h-full object-cover shadow-2xl" alt="Black and white historical photograph of 13th-century Copper Alley in Dublin with cobblestones and old stone buildings" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600"/>
            </div>
            <div className="absolute -bottom-12 -right-12 w-3/4 aspect-square bg-primary-container/10 -z-0"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold leading-tight">Founded on the Stones of <span className="italic text-primary">Copper Alley</span></h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Named after the 13th-century alleyway that once pulsed with Dublin's legendary copper merchants, we honor that history through our commitment to quality materials—from our hand-hammered copper accents to our locally forged partnerships with farmers.
            </p>
            <p className="text-on-surface-variant">
              Every plate tells a story of Dublin's heritage, reimagined for the contemporary palate. Our kitchen is a hearth where old-world tradition meets new-world finesse.
            </p>
            <div>
              <Link to="/about" className="inline-flex items-center gap-3 group">
                <span className="text-xl font-bold border-b-2 border-primary pb-1 group-hover:text-primary transition-colors">Discover Our Story</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Tabs */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-12">Explore Our Menus</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-surface-container-high pb-4">
            <button className="px-8 py-2 text-primary border-b-2 border-primary font-bold">A La Carte</button>
            <button className="px-8 py-2 text-secondary hover:text-on-surface font-medium transition-colors">Breakfast</button>
            <button className="px-8 py-2 text-secondary hover:text-on-surface font-medium transition-colors">Burgers</button>
            <button className="px-8 py-2 text-secondary hover:text-on-surface font-medium transition-colors">Salads</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 text-left">
            <div className="flex justify-between items-start group">
              <div className="max-w-[80%]">
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Wicklow Lamb Shank</h4>
                <p className="text-sm text-secondary">Slow-roasted with rosemary and garlic, served on creamy colcannon mash</p>
              </div>
              <span className="text-primary font-bold">€26</span>
            </div>
            <div className="flex justify-between items-start group">
              <div className="max-w-[80%]">
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Pan-Seared Salmon</h4>
                <p className="text-sm text-secondary">Sustainably sourced, with wild samphire and a lemon-butter reduction</p>
              </div>
              <span className="text-primary font-bold">€24</span>
            </div>
            <div className="flex justify-between items-start group">
              <div className="max-w-[80%]">
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Connemara Mussels</h4>
                <p className="text-sm text-secondary">Steamed in white wine and garlic cream, served with crusty sourdough</p>
              </div>
              <span className="text-primary font-bold">€18</span>
            </div>
            <div className="flex justify-between items-start group">
              <div className="max-w-[80%]">
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Mushroom Risotto</h4>
                <p className="text-sm text-secondary">Wild foraged mushrooms, truffle oil, and aged parmesan</p>
              </div>
              <span className="text-primary font-bold">€20</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Special (Bento Style) */}
      <section className="py-24 bg-[#1c1c1a] text-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
            <div className="md:col-span-4 bg-primary p-12 flex flex-col justify-center rounded-2xl">
              <span className="text-primary-fixed uppercase tracking-widest text-sm font-bold mb-4">Limited Availability</span>
              <h2 className="text-5xl font-bold mb-6 italic">Chef's Weekly Specials</h2>
              <p className="opacity-80 leading-relaxed mb-8">Selected delicacies curated by Chef Sean O'Connor, celebrating the finest of this week's local market haul.</p>
              <button className="bg-surface-container-lowest text-primary px-6 py-3 rounded font-bold w-fit hover:bg-primary-fixed transition-colors">Reserve Your Portion</button>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[400px]">
                <img className="absolute inset-0 w-full h-full object-cover brightness-75" alt="A whole roasted lamb shank glistening with glaze, served over buttery mashed potatoes with a sprig of fresh rosemary" src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=600"/>
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-2xl font-bold">Honey Glazed Lamb Shank</h4>
                  <p className="text-sm opacity-70 italic">Available after 5:00 PM</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[400px]">
                <img className="absolute inset-0 w-full h-full object-cover brightness-75" alt="Slices of roast beef tenderloin with a dark Guinness reduction sauce and sautéed spring vegetables" src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"/>
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-2xl font-bold">Beef & Guinness Roast</h4>
                  <p className="text-sm opacity-70 italic">Traditional Sunday Special</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="material-symbols-outlined text-primary text-5xl mb-6">format_quote</span>
            <h2 className="text-5xl font-bold italic">The Guest Journal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 rounded-lg shadow-sm">
              <p className="text-lg italic mb-8 leading-relaxed">"The atmosphere is exactly what you want from a Dublin bistro—warm, historic, but with a modern edge. The Lamb Shank was the best I've ever had."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Portrait of a smiling mature man" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80"/>
                </div>
                <div>
                  <h5 className="font-bold">David Miller</h5>
                  <p className="text-xs text-secondary uppercase tracking-tighter">Food Critic, London</p>
                </div>
              </div>
            </div>
            <div className="bg-surface p-10 rounded-lg shadow-sm border border-primary-container/20 scale-105">
              <p className="text-lg italic mb-8 leading-relaxed">"Copper Alley Bistro manages to make tradition feel entirely fresh. Their Guinness stew is a revelation. Truly the soul of Dublin in every bite."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Portrait of a young woman smiling" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80"/>
                </div>
                <div>
                  <h5 className="font-bold">Sarah Jenkins</h5>
                  <p className="text-xs text-secondary uppercase tracking-tighter">Local Guide</p>
                </div>
              </div>
            </div>
            <div className="bg-surface p-10 rounded-lg shadow-sm">
              <p className="text-lg italic mb-8 leading-relaxed">"Exceptional service in a stunning setting. The historic feel of Temple Bar shines through here without the usual tourist clichés. A masterpiece."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Portrait of a young man with a beard" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80"/>
                </div>
                <div>
                  <h5 className="font-bold">Michael O'Brien</h5>
                  <p className="text-xs text-secondary uppercase tracking-tighter">Dublin Local</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 italic">Find Us In Temple Bar</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <p className="font-bold text-xl">Address</p>
                  <p className="text-on-surface-variant">2 Lord Edward St, Temple Bar, Dublin, D02 X6P8</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                <div>
                  <p className="font-bold text-xl">Opening Hours</p>
                  <p className="text-on-surface-variant">Mon – Thu: 12:00 – 22:00</p>
                  <p className="text-on-surface-variant">Fri – Sat: 11:30 – 23:00</p>
                  <p className="text-on-surface-variant">Sun: 11:30 – 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">phone</span>
                <div>
                  <p className="font-bold text-xl">Reservations</p>
                  <p className="text-on-surface-variant">+353 (1) 555 0123</p>
                </div>
              </div>
            </div>
            <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-container transition-all">Get Directions</button>
          </div>
          <div className="h-[500px] w-full bg-surface-container relative rounded-2xl overflow-hidden shadow-sm">
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
        </div>
      </section>
    </main>
  );
}
