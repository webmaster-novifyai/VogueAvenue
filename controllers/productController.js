const Product = require('../models/productModel');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new product (Admin only)
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, texture } = req.body;
    // req.file contains the image details
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newProduct = await Product.create({
      name, price, description, category, texture,
      image_urls: [imageUrl] // Saving the path to our SQL database
    });
    
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};