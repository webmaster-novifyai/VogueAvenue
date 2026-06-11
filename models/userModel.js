const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password_hash: { type: DataTypes.TEXT, allowNull: false },
  phone_number: { type: DataTypes.STRING },
  shipping_address: { type: DataTypes.TEXT },
  billing_address: { type: DataTypes.TEXT },
  card_info_encrypted: { type: DataTypes.TEXT }, // Note: Consider using a tokenized service like Stripe
  is_admin: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'users',
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.password_hash = await bcrypt.hash(user.password_hash, salt);
    }
  }
});

module.exports = User;