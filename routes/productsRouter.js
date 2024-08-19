import express from 'express'

import { fetchProducts, fetchProduct } from '../controller/productsController.js'

const router = express.Router()

router.get('/products',fetchProducts)
router.get('/products/:id',fetchProduct)

export default router 