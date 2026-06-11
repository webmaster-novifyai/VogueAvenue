import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminLayout() {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // Prevents flickering

  // Redirect if not authenticated or not an admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="admin-container">
      <nav>Admin Sidebar</nav>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}


// import { Navigate, Outlet } from 'react-router-dom';

// export default function AdminLayout({ isAdmin }) {
  // If not an admin, redirect them back to the login or home page
//  if (!isAdmin) {
//    return <Navigate to="/login" replace />;
//  }

  // If they are an admin, render the child routes (the dashboard)
//  return (
//    <div className="admin-container">
//      <nav>Admin Sidebar</nav>
//      <main>
//        <Outlet /> {/* This renders your nested admin pages */}
//      </main>
//    </div>
//  );
// }