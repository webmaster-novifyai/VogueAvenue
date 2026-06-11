const { Sequelize } = require('sequelize');
require('dotenv').config();

// Supabase/PostgreSQL connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

module.exports = sequelize;