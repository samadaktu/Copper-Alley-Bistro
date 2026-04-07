import React, { useState } from 'react';
import { useMenu } from '../context/MenuContext';
import { useCart } from '../context/CartContext';
import { useBusinessHours } from '../hooks/useBusinessHours';

export default function OrderOnline() {
  const { isOpen, nextOpenTime } = useBusinessHours();
  const [activeTab, setActiveTab] = useState('All');
  const { menuItems } = useMenu();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  
  const tabs = ['All', 'Breakfast', 'Starters', 'Sandwiches', 'Mains', 'Burgers', 'Salads', 'Sides'];

  const filteredItems = activeTab === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  return (
    <main className="pt-24 min-h-screen bg-surface flex max-w-[1440px] mx-auto relative px-8 gap-8">
      {/* Left Sidebar Category Nav (Desktop) */}
      <aside className="w-64 hidden lg:block sticky top-32 h-[calc(100vh-140px)] border-r border-surface-container-high pt-12 pr-8 shrink-0 overflow-y-auto scrollbar-hide pb-20">
        <h3 className="font-serif font-bold text-xl mb-10 text-on-surface">Categories</h3>
        <ul className="space-y-6">
          {tabs.map(tab => (
            <li key={tab}>
              <button 
                onClick={() => setActiveTab(tab)}
                className={`text-lg transition-all duration-300 whitespace-nowrap block w-full text-left ${activeTab === tab ? 'text-primary font-bold translate-x-2' : 'text-secondary hover:text-on-surface hover:translate-x-1'}`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <section className="flex-1 pt-12 pb-32">


        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-surface-container-high pb-6">
            <div>
              <h1 className="text-5xl font-serif font-bold italic mb-2">Order Online</h1>
              <p className="text-secondary">{isOpen ? 'Ready in 20-30 minutes' : `Closed for ordering until ${nextOpenTime}`}</p>
            </div>
            {!isOpen && (
              <div className="bg-error-container text-error px-4 py-2 rounded-xl text-sm font-bold animate-pulse flex items-center gap-2">
                <span className="material-symbols-outlined">schedule</span>
                Ordering Restricted (9 AM - 11 PM)
              </div>
            )}
            {isOpen && (
              <div className="hidden md:flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full text-sm">
                <span className="material-symbols-outlined text-primary text-sm">info</span>
                <span>Need delivery? Use our partner apps.</span>
              </div>
            )}
          </div>

          {!isOpen && (
            <div className="bg-surface-container-high p-8 rounded-3xl text-center mb-12 border-2 border-dashed border-outline">
               <span className="material-symbols-outlined text-5xl text-secondary mb-4">bedtime</span>
               <h2 className="text-2xl font-serif font-bold mb-2">Resting for Tomorrow</h2>
               <p className="text-secondary">Our online kitchen is currently closed for orders. We'll be back at 9:00 AM!</p>
            </div>
          )}

          {/* ... (Existing mobile categories nav) ... */}

          {/* Mobile Category Nav */}
          <div className="flex lg:hidden overflow-x-auto gap-4 mb-8 pb-4 scrollbar-hide border-b border-surface-container-high">
             {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab ? 'bg-primary text-white' : 'bg-surface-container-low text-secondary'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between group hover:shadow-md transition-shadow border border-surface-container-low">
                <div>
                  <div className="w-full h-40 bg-surface-container rounded-lg overflow-hidden mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-bold font-serif min-h-[56px]">
                      {item.name}
                      {item.vegetarian && (
                         <span className="inline-block ml-2 text-[10px] uppercase tracking-widest font-sans font-bold text-primary-container bg-primary-container/10 px-2 py-0.5 rounded align-middle">
                          V
                        </span>
                      )}
                    </h3>
                    <span className="text-primary font-bold shrink-0">€{parseFloat(item.price).toFixed(2)}</span>
                  </div>
                  <p className="text-secondary text-sm mb-4 min-h-[40px]">{item.description}</p>
                </div>
                
                <div className={`space-y-4 ${!isOpen ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
                  <div className="flex items-center justify-center gap-4 bg-surface-container-low py-2 rounded-lg">
                    <button 
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
                      disabled={!isOpen}
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="font-bold w-4 text-center">{quantities[item.id] || 1}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
                      disabled={!isOpen}
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(item, quantities[item.id] || 1)}
                    disabled={!isOpen}
                    className="w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors flex justify-center items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> 
                    {isOpen ? 'Add to Order' : 'Closed'}
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
        </div>
      </section>
    </main>
  );
}
