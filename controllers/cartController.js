const Cart = require('../models/cartModel');

exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await Cart.findAll({ where: { user_id: userId } });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const item = await Cart.create({ user_id: userId, product_id: productId, quantity });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to cart' });
  }
};