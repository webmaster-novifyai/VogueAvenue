const Product = require('../models/productModel');
const { Op } = require('sequelize');

exports.chat = async (req, res) => {
  const { message } = req.body;

  // 1. Simple Keyword Search (The "Retrieval" part)
  const products = await Product.findAll({
    where: {
      name: { [Op.iLike]: `%${message}%` }
    }
  });

  // 2. Prepare Context for the AI
  const context = products.map(p => `${p.name} - $${p.price}`).join('\n');
  
  // 3. Send to AI (Example: OpenAI API)
  // You would send 'message' + 'context' to an LLM here
  res.json({ 
    reply: `I found these products for you: \n${context || 'No products found matching that.'}` 
  });
};