import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useBusinessHours } from '../hooks/useBusinessHours';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { isOpen, nextOpenTime } = useBusinessHours();
  const [deliveryMethod, setDeliveryMethod] = useState('collection');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tableNumber: '',
    address: '',
    suite: '',
    eircode: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    if (!isOpen) {
      alert('Sorry, our online kitchen is currently closed (Opening hours: 8:00 AM - 10:00 PM Dublin Time).');
      return;
    }

    setIsSubmitting(true);
    
    const orderData = {
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      },
      items: cartItems,
      total: deliveryMethod === 'delivery' ? cartTotal + 4.50 : cartTotal,
      deliveryMethod,
      tableNumber: deliveryMethod === 'collection' ? formData.tableNumber : null,
      address: deliveryMethod === 'delivery' ? {
        street: formData.address,
        suite: formData.suite,
        city: 'Dublin',
        eircode: formData.eircode
      } : null
    };

    try {
      placeOrder(orderData);
      clearCart();
      alert('Order placed successfully!');
      navigate('/');
    } catch (error) {
      console.error('Order error:', error);
      alert('Failed to place order.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="pt-32 min-h-screen bg-surface flex flex-col items-center justify-center">
        <span className="material-symbols-outlined text-6xl text-surface-container-high mb-4">shopping_basket</span>
        <h1 className="text-3xl font-serif font-bold mb-4">Your basket is empty</h1>
        <Link to="/menu" className="text-primary font-bold hover:underline">Go to Menu</Link>
      </main>
    );
  }

  if (!isOpen) {
    return (
      <main className="pt-32 min-h-screen bg-surface flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-primary font-bold">lock</span>
        </div>
        <h1 className="text-4xl font-serif font-bold mb-4 text-[#1c1c1a]">Kitchen is Currently Closed</h1>
        <p className="text-lg text-secondary max-w-md mb-8">
          Our online ordering system is active between <strong>8:00 AM</strong> and <strong>10:00 PM</strong> Dublin time.
        </p>
        <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container mb-8">
          <p className="font-bold text-primary">Re-opening at {nextOpenTime}</p>
        </div>
        <Link to="/menu" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-container transition-all">
          Back to Menu
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-surface-container-low pb-24">
      <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-12 mt-12">
        
        <div className="flex-1">
          <Link to="/menu" className="inline-flex items-center gap-2 text-primary hover:text-primary-container font-medium mb-8 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Menu
          </Link>

          <h1 className="text-4xl font-serif font-bold mb-8">Checkout</h1>

          {/* Delivery Toggle */}
          <div className="flex p-1 bg-surface-container rounded-lg mb-8">
            <button 
              className={`flex-1 py-3 text-center rounded-md font-bold transition-colors ${deliveryMethod === 'collection' ? 'bg-surface shadow-sm text-primary' : 'text-secondary hover:text-on-surface'}`}
              onClick={() => setDeliveryMethod('collection')}
            >
              Collection / Dine-in
            </button>
            <button 
              className={`flex-1 py-3 text-center rounded-md font-bold transition-colors ${deliveryMethod === 'delivery' ? 'bg-surface shadow-sm text-primary' : 'text-secondary hover:text-on-surface'}`}
              onClick={() => setDeliveryMethod('delivery')}
            >
              Delivery
            </button>
          </div>

          <form className="space-y-8" id="checkout-form" onSubmit={handleSubmit}>
            
            {/* Contact Info */}
            <section className="bg-surface p-8 rounded-xl shadow-sm border border-surface-container">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="firstName" required value={formData.firstName} onChange={handleInputChange} type="text" placeholder="First Name" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                <input name="lastName" required value={formData.lastName} onChange={handleInputChange} type="text" placeholder="Last Name" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                <input name="email" required value={formData.email} onChange={handleInputChange} type="email" placeholder="Email Address" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2" />
                <input name="phone" required value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2" />
                
                {deliveryMethod === 'collection' && (
                  <div className="md:col-span-2 pt-4">
                    <label className="block text-sm font-bold mb-2">Table Number (If dining in)</label>
                    <input 
                      name="tableNumber" 
                      value={formData.tableNumber} 
                      onChange={handleInputChange} 
                      type="text" 
                      placeholder="e.g. 12 (Optional if collecting)" 
                      className="w-full border border-outline rounded-lg px-4 py-3 bg-primary/5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all font-bold" 
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Address Info (Conditionally rendered) */}
            {deliveryMethod === 'delivery' && (
              <section className="bg-surface p-8 rounded-xl shadow-sm border border-surface-container animate-fade-in">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  Delivery Address
                </h2>
                <div className="space-y-4">
                  <input name="address" required={deliveryMethod === 'delivery'} value={formData.address} onChange={handleInputChange} type="text" placeholder="Street Address" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input name="suite" value={formData.suite} onChange={handleInputChange} type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" defaultValue="Dublin" disabled className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-low text-secondary cursor-not-allowed" />
                    <input name="eircode" required={deliveryMethod === 'delivery'} value={formData.eircode} onChange={handleInputChange} type="text" placeholder="Eircode" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
              </section>
            )}

            {/* Payment Info */}
             <section className="bg-surface p-8 rounded-xl shadow-sm border border-surface-container">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">credit_card</span>
                Payment Details
              </h2>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="text" placeholder="CVC" className="w-full border border-outline rounded-lg px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </section>

          </form>
        </div>

        {/* Right Side: Order Summary */}
        <aside className="w-full lg:w-96">
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-surface-container sticky top-32">
            <h3 className="font-serif font-bold text-2xl mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 border-b border-surface-container-high pb-6 max-h-[400px] overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-start">
                  <div>
                    <p className="font-bold">{item.quantity}x {item.name}</p>
                    <p className="text-sm text-secondary truncate max-w-[200px]">{item.description}</p>
                  </div>
                  <p className="font-mono">€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span>€{cartTotal.toFixed(2)}</span>
              </div>
              {deliveryMethod === 'delivery' && (
                <div className="flex justify-between text-secondary">
                  <span>Delivery Fee</span>
                  <span>€4.50</span>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold pt-4 border-t border-surface-container-high">
                <span>Total</span>
                <span className="text-primary font-mono text-2xl">
                  €{(deliveryMethod === 'delivery' ? cartTotal + 4.50 : cartTotal).toFixed(2)}
                </span>
              </div>
            </div>

            <button 
              form="checkout-form"
              type="submit"
              disabled={isSubmitting}
              className="w-full copper-glow text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all active:scale-95 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="material-symbols-outlined">lock</span>
                  Place Order
                </>
              )}
            </button>
          </div>
        </aside>

      </div>
    </main>
  );
}
