import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    // Optionally: call your backend API here to sync to database
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Add this inside your CartProvider in CartContext.jsx
const addToCart = async (product) => {
  setCartItems([...cartItems, product]); // Local update for speed
  
  // API Sync
  try {
    await axios.post('http://localhost:3000/api/cart/add', {
      userId: user.id, // Ensure you have user from your AuthContext
      productId: product.id,
      quantity: 1
    });
  } catch (err) {
    console.error("Failed to sync cart to DB", err);
  }
};


export const useCart = () => useContext(CartContext);