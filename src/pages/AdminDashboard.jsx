import React, { useState, useEffect, useRef } from 'react';
import { useMenu } from '../context/MenuContext';
import { useOrders } from '../context/OrderContext';
import { useBookings } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem } = useMenu();
  const { orders, updateOrderStatus, deleteOrder } = useOrders();
  const { bookings, updateBookingStatus, deleteBooking } = useBookings();
  const navigate = useNavigate();

  // Audio Alert State
  const [isAudioEnabled, setIsAudioEnabled] = useState(() => {
    const saved = localStorage.getItem('admin_audio_enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('admin_audio_enabled', JSON.stringify(isAudioEnabled));
  }, [isAudioEnabled]);

  const prevOrderCount = useRef(orders.length);
  const playTriggered = useRef(false);

  useEffect(() => {
    // Check for new orders
    if (isAudioEnabled && orders.length > prevOrderCount.current) {
      const alert = new Audio('/order-alert.mp3');
      alert.play().catch(err => {
        console.warn("Audio playback delayed until user interaction:", err);
      });
    }
    prevOrderCount.current = orders.length;
  }, [orders.length, isAudioEnabled]);

  // Menu Form State
  const [isEditing, setIsEditing] = useState(null);
  const [menuForm, setMenuForm] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Mains',
    image: '',
    vegetarian: false
  });

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    navigate('/admin-dashboard-access');
  };

  const handleMenuSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateMenuItem(isEditing, menuForm);
      setIsEditing(null);
    } else {
      addMenuItem(menuForm);
    }
    setMenuForm({ name: '', price: '', description: '', category: 'Mains', image: '', vegetarian: false });
  };

  const startEdit = (item) => {
    setIsEditing(item.id);
    setMenuForm(item);
    setActiveTab('menu');
  };

  const menuTabs = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'orders', label: 'Orders', icon: 'shopping_cart' },
    { id: 'bookings', label: 'Bookings', icon: 'event' },
    { id: 'menu', label: 'Menu', icon: 'restaurant_menu' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-surface-container-lowest flex font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-surface-container-high transition-transform duration-300 z-50 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-primary/20">CA</div>
            <h1 className="text-xl font-serif font-bold text-on-surface">Admin Panel</h1>
          </div>

          <nav className="flex-1 space-y-2">
            {menuTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.id ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-secondary hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-surface-container">
            <div className="flex items-center gap-3 px-4 py-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">person</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">technoalig@gmail.com</p>
                <p className="text-[10px] text-secondary">Restaurant Owner</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-error hover:bg-error-container transition-all"
            >
              <span className="material-symbols-outlined">logout</span>
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="fixed top-0 right-0 left-0 lg:left-64 h-20 bg-white/80 backdrop-blur-md border-b border-surface-container-high z-30 px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="lg:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg font-bold text-on-surface capitalize">{activeTab}</h2>
          </div>
          
          <div className="flex items-center gap-4">
             <button 
               onClick={() => setIsAudioEnabled(!isAudioEnabled)}
               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${isAudioEnabled ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-surface-container text-secondary'}`}
               title={isAudioEnabled ? 'Disable Audio Alerts' : 'Enable Audio Alerts'}
             >
               <span className="material-symbols-outlined text-sm">{isAudioEnabled ? 'volume_up' : 'volume_off'}</span>
               {isAudioEnabled ? 'Audio On' : 'Audio Off'}
             </button>
             <div className="hidden sm:flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-secondary">
               <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
               Live System
             </div>
             <button className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary hover:text-primary transition-colors">
               <span className="material-symbols-outlined">notifications</span>
             </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 pt-24 px-4 md:px-8 pb-12 overflow-x-hidden">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in space-y-8">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   { label: 'Total Orders', value: orders.length, color: 'primary', icon: 'shopping_bag' },
                   { label: 'Table Bookings', value: bookings.length, color: 'info', icon: 'calendar_month' },
                   { label: 'Menu Items', value: menuItems.length, color: 'success', icon: 'restaurant' },
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-6 rounded-3xl border border-surface-container-high shadow-sm flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-container/10 text-${stat.color} flex items-center justify-center`}>
                        <span className="material-symbols-outlined text-3xl font-bold">{stat.icon}</span>
                      </div>
                      <div>
                        <p className="text-secondary text-sm font-medium">{stat.label}</p>
                        <h3 className="text-3xl font-bold">{stat.value}</h3>
                      </div>
                   </div>
                 ))}
               </div>

               <div className="grid lg:grid-cols-2 gap-8">
                  {/* Latest Orders Preview */}
                  <div className="bg-white p-8 rounded-3xl border border-surface-container-high shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-serif font-bold">Latest Orders</h3>
                      <button onClick={() => setActiveTab('orders')} className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                      {orders.slice(0, 5).map(order => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl border border-surface-container">
                          <div>
                            <p className="font-bold text-sm">Order #{order.id.slice(-4)}</p>
                            <p className="text-xs text-secondary">{order.customer.firstName} {order.customer.lastName}</p>
                          </div>
                          <div className="text-right">
                             <p className="font-bold text-primary text-sm">€{order.total.toFixed(2)}</p>
                             <span className="text-[10px] uppercase font-bold text-secondary">{order.status}</span>
                          </div>
                        </div>
                      ))}
                      {orders.length === 0 && <p className="text-center text-secondary py-8">No orders yet.</p>}
                    </div>
                  </div>

                  {/* Latest Bookings Preview */}
                  <div className="bg-white p-8 rounded-3xl border border-surface-container-high shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-serif font-bold">Latest Bookings</h3>
                      <button onClick={() => setActiveTab('bookings')} className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                      {bookings.slice(0, 5).map(booking => (
                        <div key={booking.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl border border-surface-container text-sm">
                          <div>
                            <p className="font-bold">{booking.fullName}</p>
                            <p className="text-xs text-secondary">{booking.date} at {booking.time}</p>
                          </div>
                          <div className="text-right">
                             <p className="font-bold text-info">{booking.guests} Guests</p>
                             <span className="text-[10px] uppercase font-bold text-secondary">{booking.status}</span>
                          </div>
                        </div>
                      ))}
                      {bookings.length === 0 && <p className="text-center text-secondary py-8">No bookings yet.</p>}
                    </div>
                  </div>
               </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="animate-fade-in space-y-6">
               <h2 className="text-2xl font-serif font-bold">Manage Orders</h2>
               <div className="grid gap-6">
                 {orders.map(order => (
                   <div key={order.id} className="bg-white p-6 rounded-3xl border border-surface-container-high shadow-sm">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                           <div className="flex flex-wrap items-center gap-3">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                order.status === 'pending' ? 'bg-warning-container text-warning' : 
                                order.status === 'approved' ? 'bg-info-container text-info' : 
                                'bg-success-container text-success'
                              }`}>
                                {order.status}
                              </span>
                              <span className="text-secondary text-xs">{new Date(order.createdAt).toLocaleString()}</span>
                           </div>

                           <div className="grid sm:grid-cols-2 gap-6">
                              <div>
                                 <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Customer</p>
                                 <p className="font-bold">{order.customer.firstName} {order.customer.lastName}</p>
                                 <p className="text-sm text-secondary">{order.customer.phone}</p>
                              </div>
                              <div>
                                 <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Order Details</p>
                                 <p className="font-bold flex items-center gap-1 capitalize">
                                   <span className="material-symbols-outlined text-sm">{order.deliveryMethod === 'delivery' ? 'local_shipping' : 'restaurant'}</span>
                                   {order.deliveryMethod}
                                 </p>
                                 {order.tableNumber && <p className="text-primary font-bold">Table No: {order.tableNumber}</p>}
                              </div>
                           </div>
                           
                           <div className="pt-4 border-t border-surface-container overflow-hidden">
                              <ul className="text-sm space-y-2">
                                {order.items.map((item, idx) => (
                                  <li key={idx} className="flex justify-between items-center">
                                    <span className="text-secondary"><b className="text-on-surface">{item.quantity}x</b> {item.name}</span>
                                    <span className="font-mono">€{(item.price * item.quantity).toFixed(2)}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex justify-between items-center mt-4 pt-4 border-t border-surface-container font-black text-lg">
                                <span>Total Amount</span>
                                <span className="text-primary">€{order.total.toFixed(2)}</span>
                              </div>
                           </div>
                        </div>

                        <div className="flex flex-row lg:flex-col gap-2 shrink-0">
                           {order.status === 'pending' && (
                             <button onClick={() => updateOrderStatus(order.id, 'approved')} className="flex-1 lg:w-48 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/10 transition-all active:scale-95">Approve</button>
                           )}
                           {order.status === 'approved' && (
                             <button onClick={() => updateOrderStatus(order.id, 'delivered')} className="flex-1 lg:w-48 py-3 bg-success text-white rounded-xl font-bold shadow-lg shadow-success/10 transition-all active:scale-95">Deliver</button>
                           )}
                           <button onClick={() => deleteOrder(order.id)} className="p-3 border border-outline rounded-xl text-secondary hover:text-error hover:bg-error-container transition-all">
                              <span className="material-symbols-outlined">delete</span>
                           </button>
                        </div>
                      </div>
                   </div>
                 ))}
                 {orders.length === 0 && <div className="text-center py-20 bg-white rounded-3xl border border-surface-container text-secondary">No orders to display.</div>}
               </div>
            </div>
          )}

          {/* BOOKINGS TAB */}
          {activeTab === 'bookings' && (
            <div className="animate-fade-in space-y-6">
               <h2 className="text-2xl font-serif font-bold">Table Reservations</h2>
               <div className="grid gap-6">
                 {bookings.map(booking => (
                   <div key={booking.id} className="bg-white p-6 rounded-3xl border border-surface-container-high shadow-sm">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                           <div className="space-y-4">
                              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                booking.status === 'pending' ? 'bg-warning-container text-warning' : 
                                booking.status === 'confirmed' ? 'bg-info-container text-info' : 
                                'bg-error-container text-error'
                              }`}>
                                {booking.status}
                              </span>
                              <div>
                                <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Reservation Date</p>
                                <p className="text-lg font-bold flex items-center gap-2">
                                   <span className="material-symbols-outlined text-primary">calendar_today</span>
                                   {booking.date}
                                </p>
                                <p className="text-lg font-bold flex items-center gap-2">
                                   <span className="material-symbols-outlined text-primary">schedule</span>
                                   {booking.time}
                                </p>
                              </div>
                           </div>

                           <div>
                              <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Customer Info</p>
                              <p className="font-bold text-lg">{booking.fullName}</p>
                              <p className="text-sm text-secondary">{booking.email}</p>
                              <p className="text-sm text-secondary">{booking.phone}</p>
                              <div className="mt-4 bg-info-container/5 p-3 rounded-xl border border-info-container/10">
                                 <p className="font-bold text-info-container flex items-center gap-2">
                                   <span className="material-symbols-outlined">group</span>
                                   {booking.guests} Guests
                                 </p>
                              </div>
                           </div>

                           <div>
                              <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Special Requests</p>
                              <p className="text-sm italic text-secondary leading-relaxed">
                                 {booking.requests || "No special requests provided."}
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-row lg:flex-col gap-2 shrink-0">
                           {booking.status === 'pending' && (
                             <button onClick={() => updateBookingStatus(booking.id, 'confirmed')} className="flex-1 lg:w-48 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/10 transition-all active:scale-95">Confirm</button>
                           )}
                           <button onClick={() => updateBookingStatus(booking.id, 'cancelled')} className="flex-1 lg:w-48 py-3 border border-outline rounded-xl font-bold hover:bg-error hover:text-white hover:border-error transition-all active:scale-95">Cancel</button>
                           <button onClick={() => deleteBooking(booking.id)} className="p-3 bg-surface-container rounded-xl text-secondary hover:text-error hover:bg-error-container transition-all">
                              <span className="material-symbols-outlined">delete</span>
                           </button>
                        </div>
                      </div>
                   </div>
                 ))}
                 {bookings.length === 0 && <div className="text-center py-20 bg-white rounded-3xl border border-surface-container text-secondary">No table bookings received yet.</div>}
               </div>
            </div>
          )}

          {/* MENU TAB */}
          {activeTab === 'menu' && (
            <div className="animate-fade-in grid lg:grid-cols-3 gap-12 items-start">
               {/* Menu Form */}
               <div className="lg:col-span-1 lg:sticky lg:top-24">
                  <div className="bg-white p-8 rounded-3xl border border-surface-container-high shadow-lg">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-on-surface">{isEditing ? 'Edit Dish' : 'Add New Dish'}</h3>
                    <form onSubmit={handleMenuSubmit} className="space-y-4">
                      <div>
                        <label className="text-xs font-black uppercase text-secondary tracking-widest mb-1.5 block">Item Name</label>
                        <input type="text" required value={menuForm.name} onChange={(e) => setMenuForm({...menuForm, name: e.target.value})} className="w-full bg-surface-container border border-outline rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Enter dish name" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-black uppercase text-secondary tracking-widest mb-1.5 block">Price (€)</label>
                          <input type="number" step="0.01" required value={menuForm.price} onChange={(e) => setMenuForm({...menuForm, price: e.target.value})} className="w-full bg-surface-container border border-outline rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="0.00" />
                        </div>
                        <div>
                          <label className="text-xs font-black uppercase text-secondary tracking-widest mb-1.5 block">Category</label>
                          <select value={menuForm.category} onChange={(e) => setMenuForm({...menuForm, category: e.target.value})} className="w-full bg-surface-container border border-outline rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none cursor-pointer">
                            {['Breakfast', 'Starters', 'Sandwiches', 'Mains', 'Burgers', 'Salads', 'Sides'].map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-black uppercase text-secondary tracking-widest mb-1.5 block">Description</label>
                        <textarea required value={menuForm.description} onChange={(e) => setMenuForm({...menuForm, description: e.target.value})} className="w-full bg-surface-container border border-outline rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all min-h-[100px] resize-none" placeholder="What's in this dish?" />
                      </div>
                      <div>
                        <label className="text-xs font-black uppercase text-secondary tracking-widest mb-1.5 block">Image URL</label>
                        <input type="url" required value={menuForm.image} onChange={(e) => setMenuForm({...menuForm, image: e.target.value})} className="w-full bg-surface-container border border-outline rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Paste Unsplash URL" />
                      </div>
                      <div className="flex items-center gap-3 py-2">
                        <input type="checkbox" id="veg" checked={menuForm.vegetarian} onChange={(e) => setMenuForm({...menuForm, vegetarian: e.target.checked})} className="w-5 h-5 rounded-md border-outline text-primary focus:ring-primary" />
                        <label htmlFor="veg" className="text-sm font-bold text-secondary cursor-pointer">Mark as Vegetarian</label>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <button type="submit" className="flex-1 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">{isEditing ? 'Save Changes' : 'Publish Dish'}</button>
                        {isEditing && (
                          <button type="button" onClick={() => { setIsEditing(null); setMenuForm({ name: '', price: '', description: '', category: 'Mains', image: '', vegetarian: false }); }} className="px-6 py-4 border border-outline rounded-xl text-secondary hover:bg-surface-container transition-all">Cancel</button>
                        )}
                      </div>
                    </form>
                  </div>
               </div>

               {/* Menu Item Management List */}
               <div className="lg:col-span-2 space-y-6">
                  <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
                    {menuItems.map(item => (
                      <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-surface-container-high shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="h-48 relative overflow-hidden">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute top-4 left-4 flex gap-2">
                              <span className="bg-white/90 backdrop-blur-md text-[10px] font-black uppercase px-2 py-1 rounded-md text-primary tracking-widest">{item.category}</span>
                              {item.vegetarian && <span className="bg-success text-white text-[10px] font-black uppercase px-2 py-1 rounded-md tracking-widest">VEG</span>}
                           </div>
                        </div>
                        <div className="p-6">
                           <div className="flex justify-between items-start mb-2">
                             <h4 className="text-lg font-serif font-bold text-on-surface line-clamp-1">{item.name}</h4>
                             <p className="text-primary font-bold text-lg">€{parseFloat(item.price).toFixed(2)}</p>
                           </div>
                           <p className="text-xs text-secondary line-clamp-2 mb-6 h-8">{item.description}</p>
                           <div className="flex gap-2">
                              <button onClick={() => startEdit(item)} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-surface-container text-secondary hover:bg-primary-container/20 hover:text-primary rounded-xl font-bold text-sm transition-all">
                                 <span className="material-symbols-outlined text-sm">edit</span>
                                 Edit
                              </button>
                              <button onClick={() => deleteMenuItem(item.id)} className="w-12 flex items-center justify-center bg-surface-container text-secondary hover:bg-error-container hover:text-error rounded-xl transition-all">
                                 <span className="material-symbols-outlined text-xl">delete</span>
                              </button>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
