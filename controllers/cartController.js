const Cart = require('../models/cartModel');

// Get all items in user's cart
exports.getCart = async (req, res) => {
  const { userId } = req.params;
  const cartItems = await Cart.findAll({ where: { userId } });
  res.json(cartItems);
};

// Add item to cart
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const item = await Cart.create({ userId, productId, quantity });
  res.status(201).json(item);
};