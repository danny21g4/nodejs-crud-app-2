const express = require('express');
const Product = require('../models/productModel');
const {getProducts,getProduct,updateProduct,delteProduct,saveProduct} = require('../controllers/productController')

const router = express.Router();



// save products
router.post('/',saveProduct)

// get products
router.get('/',getProducts)

// get single product
router.get('/:id',getProduct)

// update product
router.put('/:id',updateProduct)

// delete product
router.delete('/:id',delteProduct)


module.exports = router;
