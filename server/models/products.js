const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const productListSchema  = new mongoose.Schema({
    products: [productSchema],
});
const Product = mongoose.model('Product', productListSchema )
 
module.exports = { Product };
 