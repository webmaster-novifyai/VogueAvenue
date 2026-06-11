const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  category: { type: DataTypes.STRING }, // 'men' or 'women'
  texture: { type: DataTypes.STRING },
  image_urls: { type: DataTypes.ARRAY(DataTypes.STRING) }, // Array for multiple images
  is_sold_out: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'products', // Must match your SQL table name
  timestamps: true // Adds created_at and updated_at automatically
});

module.exports = Product;