const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

// User must be logged in to checkout
router.post('/checkout', auth, orderController.checkout);

module.exports = router;