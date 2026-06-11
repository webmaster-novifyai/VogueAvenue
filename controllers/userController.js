const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { 
      username, 
      email, 
      password, 
      phone_number, 
      shipping_address, 
      billing_address 
    } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // 2. Create the user
    // The password will be hashed automatically by the User model hook
    const newUser = await User.create({
      username,
      email,
      password_hash: password, // The model maps this and hashes it
      phone_number,
      shipping_address,
      billing_address
    });

    // 3. Generate a token for immediate login
    const token = jwt.sign(
      { id: newUser.id, isAdmin: newUser.is_admin }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );

    res.status(201).json({ 
      message: 'User registered successfully', 
      token,
      user: { id: newUser.id, username: newUser.username } 
    });

  } catch (error) {
    res.status(500).json({ error: 'Registration failed: ' + error.message });
  }
};