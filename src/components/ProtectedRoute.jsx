import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const isAuthenticated = sessionStorage.getItem('admin_auth') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/admin-dashboard-access" replace />;
  }

  return <Outlet />;
}
