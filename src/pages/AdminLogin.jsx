import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'technoalig@gmail.com' && password === 'Copper@alig') {
      sessionStorage.setItem('admin_auth', 'true');
      navigate('/admin-dashboard-access/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-surface-container p-8 rounded-2xl shadow-xl border border-surface-container-high">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <span className="material-symbols-outlined text-4xl font-bold">admin_panel_settings</span>
          </div>
          <h1 className="text-3xl font-serif font-bold italic">Admin Login</h1>
          <p className="text-secondary mt-2">Copper Alley Bistro Management</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-error-container text-error p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:shadow-lg transition-all active:scale-95"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
