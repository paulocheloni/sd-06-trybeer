const { Router } = require('express');
const adminOrderService = require('../services/adminOrderService');

const router = Router();

router.get('/adminOrders', async (req, res) => {
  try {
    const allOrders = await adminOrderService.allOrders();

    if (!allOrders) return res.status(404).json({ message: 'Pedidos não foram encontrados.' });

    return res.status(200).json(allOrders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
