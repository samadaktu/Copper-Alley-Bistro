import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section: Editorial Header */}
      <section className="px-8 pt-16 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-primary font-medium tracking-widest uppercase text-xs mb-4 block">Est. Dublin 13th Century</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight -ml-1 text-on-surface italic">
              The Soul of <span className="text-primary-container not-italic">Dublin's</span> Heritage.
            </h1>
          </div>
          <div className="lg:col-span-5 pb-4">
            <p className="text-xl text-secondary leading-relaxed font-body">
              Authentic Irish Dining, Modern Artistry. We bridge the gap between ancient Dublin traditions and contemporary culinary innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric History Section */}
      <section className="bg-surface-container-low py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl shadow-sm">
                <img className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-105" alt="Vintage atmospheric photo of a cobblestone Dublin alleyway with historic stone buildings and soft evening fog" src="/public/about-us.webp"/>
              </div>
              <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 p-8 bg-surface shadow-xl rounded-lg">
                <p className="text-sm italic font-serif text-secondary leading-relaxed">
                  "Copper Alley was named for the copper coinage struck here by the Royal Mint in the 13th century."
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface leading-snug">
                Thirteen Centuries of <br/>Craft and Currency
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-loose max-w-lg">
                <p>
                  Copper Alley holds a unique place in Dublin’s architectural and economic tapestry. Once the site of the Royal Mint, the street pulsed with the rhythm of metalworkers and merchants for generations. 
                </p>
                <p>
                  Our bistro sits upon these historic foundations. We have meticulously preserved the original stonework, allowing the ghosts of Dublin’s past to mingle with the warmth of modern hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Interior: Texture & Light */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <h2 className="text-5xl font-serif font-bold italic text-on-surface">The Atmosphere</h2>
            <p className="max-w-md text-secondary text-lg">
              A sanctuary of warmth where hand-beaten copper meets century-old Irish oak.
            </p>
          </div>
          {/* Bento Grid Interior */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-8 group overflow-hidden rounded-xl relative">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Interior of a luxury bistro featuring a magnificent hand-beaten copper bar top with warm golden ambient lighting and dark wood shelves" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200"/>
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-serif italic text-xl">The Copper-Clad Heart</p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="group overflow-hidden rounded-xl relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Close-up of cozy leather booth seating in a dim restaurant with warm candlelight and rustic stone walls" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"/>
              </div>
              <div className="group overflow-hidden rounded-xl relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Close-up of a perfectly crafted cocktail in a crystal glass sitting on a textured copper coaster with soft bokeh light" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section: Editorial Spotlight */}
      <section className="py-32 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="aspect-square bg-surface-dim rounded-2xl overflow-hidden border-[12px] border-surface">
                  <img className="w-full h-full object-cover" alt="Portrait of Chef Sean O'Connor in a professional white chef coat looking thoughtfully at a fresh sprig of herbs in a dimly lit kitchen" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1200"/>
                </div>
                <div className="absolute -top-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-2xl hidden md:block">
                  <span className="font-serif italic text-2xl">Chef de Cuisine</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">The Visionary</span>
              <h2 className="text-5xl font-serif font-bold text-on-surface">Sean O'Connor</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-loose italic font-serif">
                <p>
                  "My philosophy is simple: respect the ingredient, honor the history, and never settle for anything less than excellence. Irish soil provides the finest larder in the world; my job is merely to showcase it."
                </p>
              </div>
              <div className="space-y-4 text-secondary leading-relaxed font-body">
                <p>
                  With two decades of experience across Europe’s most prestigious kitchens, Chef Sean O’Connor returned to his native Dublin with a singular mission: to redefine the Irish dining experience. 
                </p>
                <p>
                  At Copper Alley, Sean combines hyper-seasonal foraging with rigorous French techniques, creating a menu that is as evocative as it is precise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-8 text-center bg-surface">
        <div className="max-w-3xl mx-auto space-y-10">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-on-surface">Experience the Legacy</h3>
          <p className="text-xl text-secondary">Join us for a journey through Dublin's history and flavor.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/book">
              <button className="copper-glow text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all active:scale-95">Book a Table</button>
            </Link>
            <Link to="/menu">
              <button className="bg-surface-container text-on-surface px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-high transition-all">View Our Menu</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
