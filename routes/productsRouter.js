import express from 'express'

import { fetchProducts, fetchProduct, addProduct } from '../controller/productsController.js'

const router = express.Router()

router.get('/products',fetchProducts)
router.get('/products/:id',fetchProduct)
router.post('/products/insert',addProduct)

export default router 