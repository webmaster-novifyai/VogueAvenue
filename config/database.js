const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log("--- DEBUGGING DATABASE CONNECTION ---");
console.log("DATABASE_URL found in process.env:", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  console.error("ERROR: DATABASE_URL is missing! Check your .env file.");
  process.exit(1); // Stop the process so you can fix it
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false // Set to console.log if you want to see SQL queries
});

module.exports = sequelize;