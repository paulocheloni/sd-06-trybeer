const { Router } = require('express');
const cartService = require('../services/cartService');

const router = Router();

router.post('/checkout', async (req, res) => {
  const { userId, total, street, number, data, status } = req.body;

  try {
    const saleId = await cartService.addSale(userId, total, street, number, data, status);
    return res.status(201).json({ saleId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
})

module.exports = router;