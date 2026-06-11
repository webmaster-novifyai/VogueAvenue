const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

// Define the API endpoints
router.get('/', productController.getAllProducts);
// router.post('/add', productController.createProduct);
// Adding this new line
router.post('/add', auth, productController.createProduct);
module.exports = router;

const upload = require('../middleware/uploadMiddleware');

// Add the 'upload.single' middleware here
router.post('/add', auth, upload.single('image'), productController.createProduct);