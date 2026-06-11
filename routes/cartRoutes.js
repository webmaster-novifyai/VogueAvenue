const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');

// Get cart items for a specific user
router.get('/:userId', auth, cartController.getCart);

// Add item to cart
router.post('/add', auth, cartController.addToCart);

module.exports = router;