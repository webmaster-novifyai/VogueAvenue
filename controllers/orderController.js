const Order = require('../models/orderModel');
const OrderItem = require('../models/orderItemModel');
const sequelize = require('../config/database');

exports.checkout = async (req, res) => {
  const t = await sequelize.transaction(); // Start a transaction

  try {
    const { userId, items, total_price, shipping_address } = req.body;

    // 1. Create the Order
    const newOrder = await Order.create({
      user_id: userId,
      total_price,
      shipping_address
    }, { transaction: t });

    // 2. Create the Order Items
    for (const item of items) {
      await OrderItem.create({
        order_id: newOrder.id,
        product_id: item.productId,
        quantity: item.quantity,
        price_at_purchase: item.price
      }, { transaction: t });
    }

    await t.commit(); // Commit the transaction
    res.status(201).json({ message: 'Order placed successfully', orderId: newOrder.id });
  } catch (error) {
    await t.rollback(); // Undo if something goes wrong
    res.status(500).json({ error: 'Checkout failed: ' + error.message });
  }
};