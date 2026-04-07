import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartSidebar() {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#1c1c1a]/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-surface shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b border-surface-container-high flex justify-between items-center bg-surface-container-low">
          <h2 className="text-2xl font-serif font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined">shopping_basket</span>
            Your Order
          </h2>
          <button 
            onClick={toggleCart}
            className="text-secondary hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container-highest"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto w-full">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-secondary p-8 text-center">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-50">shopping_cart</span>
              <p className="text-lg">Your bucket is empty.</p>
              <p className="text-sm mt-2 opacity-75">Add some delicious dishes to get started.</p>
              <button 
                onClick={toggleCart} 
                className="mt-6 text-primary font-bold border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-surface-container-high">
              {cartItems.map((item) => (
                <li key={item.id} className="p-6 flex gap-4">
                  <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-on-surface leading-tight">{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} className="text-secondary hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                    <span className="text-primary font-bold text-sm mb-3">€{item.price.toFixed(2)}</span>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="flex items-center bg-surface-container-low rounded-lg border border-surface-container-high">
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-secondary hover:text-primary transition-colors hover:bg-surface-container"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-secondary hover:text-primary transition-colors hover:bg-surface-container"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 bg-surface-container-low border-t border-surface-container-high">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg text-on-surface">Subtotal</span>
              <span className="font-bold text-2xl text-primary">€{cartTotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" onClick={toggleCart}>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2">
                Proceed to Checkout
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
