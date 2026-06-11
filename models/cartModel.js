// 1. Import the sequelize instance you created in your config/db file
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust this path to where your sequelize connection lives

// 2. Define your model
const Cart = sequelize.define('Cart', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  productId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 }
});

module.exports = Cart;