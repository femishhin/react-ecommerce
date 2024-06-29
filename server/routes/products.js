const express = require('express');
const { Product } = require('../models/products.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const productList = await Product.find().lean(); 

    if (!productList || productList.length === 0) {
        res.status(500).json({success: false, message: 'No products found' })
    }    
    res.send(productList);
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean();
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});

module.exports = router;