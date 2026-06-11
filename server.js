const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Importing routes (Your Sections)
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Defining Sections
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));

// mportant Setup Requirement: Syncing

const sequelize = require('./config/database');

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced successfully');
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.log('Database sync error: ', err));