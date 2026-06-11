const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // 1. Find user in your Database (via User model)
  // 2. Compare password with hashed password using bcrypt.compare()
  // 3. If match, create token:
  const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};