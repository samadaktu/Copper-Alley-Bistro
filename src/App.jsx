import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { MenuProvider } from './context/MenuContext';
import { OrderProvider } from './context/OrderContext';
import { BookingProvider } from './context/BookingContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import BookTable from './pages/BookTable';
import Checkout from './pages/Checkout';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <MenuProvider>
      <OrderProvider>
        <BookingProvider>
          <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="menu" element={<Menu />} />
                <Route path="order" element={<OrderOnline />} />
                <Route path="book" element={<BookTable />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="contact" element={<Contact />} />
              </Route>
              
              {/* Admin Routes */}
              <Route path="/admin-dashboard-access" element={<AdminLogin />} />
              <Route path="/admin-dashboard-access" element={<ProtectedRoute />}>
                <Route path="dashboard" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </BookingProvider>
    </OrderProvider>
  </MenuProvider>
);
}

export default App;
