import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import ProductUpload from './pages/ProductUpload';


// For the context to work, you must wrap your main App component with the AuthProvider.
import { AuthProvider } from './context/AuthContext';

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);


// Assume you have a variable or context for auth status
const isAdmin = true; // Replace with your actual auth logic (e.g., from your auth context)

export default function App() {
  return (
    <BrowserRouter>
	<Routes>
  		{/* Public Routes */}
  		<Route path="/" element={<Home />} />
  		<Route path="/cart" element={<Cart />} />
  		<Route path="/login" element={<Login />} />

  		{/* Admin Section (Protected) */}
  		{/* No need to pass props here anymore! */}
  			<Route element={<AdminLayout />}>
    			<Route path="/admin" element={<AdminDashboard />} />
    			<Route path="/admin/upload" element={<ProductUpload />} />
  			</Route>
	</Routes>
    </BrowserRouter>
  );
}