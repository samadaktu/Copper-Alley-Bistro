import React, { useState } from 'react';
import { useMenu } from '../context/MenuContext';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { menuItems, loading } = useMenu();
  const { addToCart } = useCart();

  // Define the ordered tabs available
  const tabs = ['All', 'Breakfast', 'Starters', 'Sandwiches', 'Mains', 'Burgers', 'Salads', 'Sides'];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);


  return (
    <main className="pt-24 min-h-screen bg-surface">
      {/* Editorial Header */}
      <section className="px-8 pt-16 pb-12 max-w-7xl mx-auto text-center border-b border-surface-container-high">
        <h1 className="text-6xl md:text-7xl font-serif font-bold italic mb-4 text-on-surface">Our Menu</h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto font-body">
          A celebration of Irish terroir, thoughtfully prepared. Prices are in Euro.
        </p>
      </section>

      {/* Menu Navigation */}
      <section className="sticky top-[88px] bg-surface/90 backdrop-blur-md z-40 py-4 border-b border-surface-container-high shadow-sm">
        <div className="max-w-7xl mx-auto px-8 overflow-x-auto scrollbar-hide">
          <ul className="flex justify-start md:justify-center whitespace-nowrap gap-6 md:gap-8 font-serif italic text-lg text-secondary">
            {tabs.map(tab => (
              <li 
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`cursor-pointer transition-colors pb-1 ${
                  activeCategory === tab 
                    ? 'text-primary border-b-2 border-primary font-bold' 
                    : 'hover:text-primary'
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative flex flex-col h-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface-container-low">
              {/* Image */}
              <div className="w-full h-48 bg-surface-container overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-xl font-bold font-serif text-on-surface leading-tight">
                    {item.name}
                    {item.vegetarian && (
                      <span className="inline-block ml-2 text-[10px] uppercase tracking-widest font-sans font-bold text-primary-container bg-primary-container/10 px-2 py-0.5 rounded align-middle">
                        V
                      </span>
                    )}
                  </h3>
                  <span className="text-primary font-bold text-lg shrink-0">€{item.price.toFixed(2)}</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                
                {/* Action */}
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full mt-auto py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors flex justify-center items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span> 
                  Add to Bucket
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24 text-secondary">
            <span className="material-symbols-outlined text-5xl opacity-50 mb-4">restaurant</span>
            <p className="text-xl font-serif">No items found in this category.</p>
          </div>
        )}
      </section>

      {/* Decorative Bottom */}
      <div className="h-32 bg-surface-container-low w-full flex items-center justify-center border-t border-surface-container-high text-primary/30">
        <span className="material-symbols-outlined text-outline-variant text-4xl">restaurant_menu</span>
      </div>
    </main>
  );
}
