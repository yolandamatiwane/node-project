import express from 'express'

import { fetchProducts, fetchProduct, addProduct, removeProduct } from '../controller/productsController.js'

const router = express.Router()

router.get('/products',fetchProducts)
router.get('/products/:id',fetchProduct)
router.post('/products/addProduct',addProduct)
router.delete('/products/delete/:id',removeProduct)

export default router 